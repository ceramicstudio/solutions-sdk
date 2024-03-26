import { createRequire } from 'node:module'
import { CeramicClient } from '@ceramicnetwork/http-client'
import { DocumentLoader } from '@composedb/loader'
import { type CeramicContext, getEphemeralCeramic } from '@composexp/ceramic-utils'
import { generatePrivateKey, getAuthenticatedDID } from '@composexp/did-utils'
import { deployComposite } from '@composexp/composite-utils'
import { definition } from '@composexp/points-composite'

import { SinglePointReader, SinglePointWriter } from '../src'

const require = createRequire(import.meta.url)
const compositePath = require.resolve('@composexp/points-composite/composite.json')

describe('points', () => {
  describe('SinglePointReader class', () => {
    test('getters', () => {
      const reader = new SinglePointReader({ issuer: 'did:key:123' })
      expect(reader.ceramic).toBeInstanceOf(CeramicClient)
      expect(reader.loader).toBeInstanceOf(DocumentLoader)
      expect(reader.modelID).toBe(definition.models.SinglePoint!.id)
    })

    test('uses provided ceramic and modelID params', () => {
      const ceramic = new CeramicClient()
      const reader = new SinglePointReader({ ceramic, issuer: 'did:key:123', modelID: 'test' })
      expect(reader.ceramic).toBe(ceramic)
      expect(reader.modelID).toBe('test')
    })
  })

  describe('SinglePointWriter class', () => {
    test('requires an authenticated Ceramic DID', async () => {
      const ceramic = new CeramicClient()
      expect(() => {
        new SinglePointWriter({ ceramic })
      }).toThrow('An authenticated DID instance must be set on the Ceramic client')

      ceramic.did = await getAuthenticatedDID(generatePrivateKey())
      expect(() => {
        new SinglePointWriter({ ceramic })
      }).not.toThrow()
    })

    test('SinglePointWriter.fromSeed() authenticates the DID from the provided seed', async () => {
      expect(SinglePointWriter.fromSeed({ seed: generatePrivateKey() })).resolves.toBeInstanceOf(
        SinglePointWriter,
      )
    })

    test('extends SinglePointReader', async () => {
      const writer = await SinglePointWriter.fromSeed({ seed: generatePrivateKey() })
      expect(writer).toBeInstanceOf(SinglePointReader)
    })
  })

  describe('interaction flows', () => {
    let context: CeramicContext

    beforeEach(async () => {
      context = await getEphemeralCeramic()
      await deployComposite(context.ceramic, compositePath)
    })

    afterEach(async () => {
      await context.dispose()
    })

    test('write and read', async () => {
      const reader = new SinglePointReader({ ceramic: context.ceramic, issuer: context.did.id })
      const writer = new SinglePointWriter({ ceramic: context.ceramic })
      // Sanity check no points have been allocated yet
      await expect(reader.countTotalPoints()).resolves.toBe(0)
      // Add points to a first recipient account
      await writer.addPointTo('did:test:123')
      await writer.addPointTo('did:test:123')
      await writer.addPointTo('did:test:123')
      await expect(reader.countTotalPoints()).resolves.toBe(3)
      await expect(reader.countPointsFor('did:test:123')).resolves.toBe(3)
      await expect(reader.countPointsFor('did:test:456')).resolves.toBe(0)
      // Add points to another recipient account
      await writer.addPointTo('did:test:456')
      await writer.addPointTo('did:test:456')
      await expect(reader.countTotalPoints()).resolves.toBe(5)
      await expect(reader.countPointsFor('did:test:123')).resolves.toBe(3)
      await expect(reader.countPointsFor('did:test:456')).resolves.toBe(2)
    })

    test('multiple writers', async () => {
      const [did1, did2] = await Promise.all([
        getAuthenticatedDID(generatePrivateKey()),
        getAuthenticatedDID(generatePrivateKey()),
      ])
      expect(did1.id).not.toBe(did2.id)
      // Write points with a first issuer account
      context.ceramic.did = did1
      const writer1 = new SinglePointWriter({ ceramic: context.ceramic })
      await writer1.addPointTo('did:test:123')
      await expect(writer1.countPointsFor('did:test:123')).resolves.toBe(1)
      // Write points with another issuer account
      context.ceramic.did = did2
      const writer2 = new SinglePointWriter({ ceramic: context.ceramic })
      await writer2.addPointTo('did:test:123')
      await writer2.addPointTo('did:test:123')
      await expect(writer2.countPointsFor('did:test:123')).resolves.toBe(2)
      // Sanity check the first issuer points count hasn't changed
      await expect(writer1.countPointsFor('did:test:123')).resolves.toBe(1)
    })

    test('add and remove points', async () => {
      const writer = new SinglePointWriter({ ceramic: context.ceramic })
      const firstPoint = await writer.addPointTo('did:test:123')
      const secondPoint = await writer.addPointTo('did:test:123')
      await expect(writer.countPointsFor('did:test:123')).resolves.toBe(2)
      await writer.remove(firstPoint.id.toString())
      await expect(writer.countPointsFor('did:test:123')).resolves.toBe(1)
      await writer.remove(secondPoint.id.toString())
      await expect(writer.countPointsFor('did:test:123')).resolves.toBe(0)
    })

    test('query point documents', async () => {
      const writer = new SinglePointWriter({ ceramic: context.ceramic })
      const createdDoc = await writer.addPointTo('did:test:123')
      const loadedDoc = await writer.loader.load({ id: createdDoc.id.toString() })
      expect(loadedDoc?.id.equals(createdDoc.id)).toBe(true)
      const createdDoc1 = await writer.addPointTo('did:test:123')
      const createdDoc2 = await writer.addPointTo('did:test:123')
      const createdDoc3 = await writer.addPointTo('did:test:123')
      const createdDoc4 = await writer.addPointTo('did:test:123')
      // First query without cursor, returns the last documents created
      const query1 = await writer.queryPointDocumentsFor('did:test:123', { count: 2 })
      expect(query1.documents).toHaveLength(2)
      expect(query1.documents.map((doc) => doc.id.toString())).toEqual([
        createdDoc3.id.toString(),
        createdDoc4.id.toString(),
      ])
      // Second query using cursor from the first query
      const query2 = await writer.queryPointDocumentsFor('did:test:123', {
        before: query1.startCursor,
      })
      expect(query2.documents).toHaveLength(3)
      expect(query2.documents.map((doc) => doc.id.toString())).toEqual([
        createdDoc.id.toString(),
        createdDoc1.id.toString(),
        createdDoc2.id.toString(),
      ])
      // Third query for a specific slice in chronological order
      const query3 = await writer.queryPointDocumentsFor('did:test:123', {
        count: 2,
        after: query2.startCursor,
      })
      expect(query3.documents).toHaveLength(2)
      expect(query3.documents.map((doc) => doc.id.toString())).toEqual([
        createdDoc1.id.toString(),
        createdDoc2.id.toString(),
      ])
    })
  })
})
