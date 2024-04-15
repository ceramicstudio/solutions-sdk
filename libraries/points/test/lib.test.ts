import { createRequire } from 'node:module'
import { CeramicClient } from '@ceramicnetwork/http-client'
import { DocumentLoader } from '@composedb/loader'
import { type CeramicContext, getEphemeralCeramic } from '@ceramic-solutions/ceramic-utils'
import { generatePrivateKey, getAuthenticatedDID } from '@ceramic-solutions/did-utils'
import { deployComposite } from '@ceramic-solutions/composite-utils'
import {
  SimplePointsAggregationID,
  SimplePointsAllocationID,
} from '@ceramic-solutions/points-composite'
import { jest } from '@jest/globals'

import { PointsReader, PointsWriter } from '../src'

const require = createRequire(import.meta.url)
const compositePath = require.resolve('@ceramic-solutions/points-composite/composite.json')

describe('points', () => {
  describe('PointsReader class', () => {
    test('getters', () => {
      const reader = new PointsReader({ issuer: 'did:key:123' })
      expect(reader.ceramic).toBeInstanceOf(CeramicClient)
      expect(reader.loader).toBeInstanceOf(DocumentLoader)
      expect(reader.aggregationModelID).toBe(SimplePointsAggregationID)
      expect(reader.allocationModelID).toBe(SimplePointsAllocationID)
    })

    test('uses provided ceramic and modelID params', () => {
      const ceramic = new CeramicClient()
      const reader = new PointsReader({
        ceramic,
        issuer: 'did:key:123',
        aggregationModelID: 'testAggragation',
        allocationModelID: 'testAllocation',
      })
      expect(reader.ceramic).toBe(ceramic)
      expect(reader.aggregationModelID).toBe('testAggragation')
      expect(reader.allocationModelID).toBe('testAllocation')
    })
  })

  describe('PointsWriter class', () => {
    test('requires an authenticated Ceramic DID', async () => {
      const ceramic = new CeramicClient()
      expect(() => {
        new PointsWriter({ ceramic })
      }).toThrow('An authenticated DID instance must be set on the Ceramic client')

      ceramic.did = await getAuthenticatedDID(generatePrivateKey())
      expect(() => {
        new PointsWriter({ ceramic })
      }).not.toThrow()
    })

    test('PointsWriter.fromSeed() authenticates the DID from the provided seed', async () => {
      expect(PointsWriter.fromSeed({ seed: generatePrivateKey() })).resolves.toBeInstanceOf(
        PointsWriter,
      )
    })

    test('extends PointsReader', async () => {
      const writer = await PointsWriter.fromSeed({ seed: generatePrivateKey() })
      expect(writer).toBeInstanceOf(PointsReader)
    })
  })

  describe('interaction flows', () => {
    jest.setTimeout(20000)
    let context: CeramicContext

    beforeEach(async () => {
      context = await getEphemeralCeramic()
      await deployComposite(context.ceramic, compositePath)
    })

    afterEach(async () => {
      await context.dispose()
    })

    describe('allocation documents', () => {
      test('allocate points to multiple recipients', async () => {
        const writer = new PointsWriter({ ceramic: context.ceramic })
        // Add points to a first recipient account
        await writer.allocatePointsTo('did:test:123', 10)
        await writer.allocatePointsTo('did:test:123', 20)
        await writer.allocatePointsTo('did:test:123', 5)
        await expect(
          writer.ceramic.index.count({ models: [writer.allocationModelID] }),
        ).resolves.toBe(3)
        // Add points to another recipient account
        await writer.allocatePointsTo('did:test:456', 5)
        await writer.allocatePointsTo('did:test:456', 10)
        await expect(
          writer.ceramic.index.count({ models: [writer.allocationModelID] }),
        ).resolves.toBe(5)
      })

      test('multiple points writers', async () => {
        const [did1, did2] = await Promise.all([
          getAuthenticatedDID(generatePrivateKey()),
          getAuthenticatedDID(generatePrivateKey()),
        ])
        expect(did1.id).not.toBe(did2.id)
        // Write points with a first issuer account
        context.ceramic.did = did1
        const writer1 = new PointsWriter({ ceramic: context.ceramic })
        await writer1.allocatePointsTo('did:test:123', 10)
        // Write points with another issuer account
        context.ceramic.did = did2
        const writer2 = new PointsWriter({ ceramic: context.ceramic })
        await writer2.allocatePointsTo('did:test:123', 10)
        await writer2.allocatePointsTo('did:test:123', 10)
        // Count how many documents are written by issuer
        const modelID = SimplePointsAllocationID
        await expect(context.ceramic.index.count({ models: [modelID] })).resolves.toBe(3)
        await expect(
          context.ceramic.index.count({ account: did1.id, models: [modelID] }),
        ).resolves.toBe(1)
        await expect(
          context.ceramic.index.count({ account: did2.id, models: [modelID] }),
        ).resolves.toBe(2)
      })

      test('add and remove points allocation documents', async () => {
        const writer = new PointsWriter({ ceramic: context.ceramic })
        const firstPoint = await writer.allocatePointsTo('did:test:123', 5)
        const secondPoint = await writer.allocatePointsTo('did:test:123', 10)
        await expect(
          writer.ceramic.index.count({ models: [writer.allocationModelID] }),
        ).resolves.toBe(2)
        // Check point removal only applies to the specified model
        const modelID = SimplePointsAllocationID
        await expect(writer.removePointsAllocation(modelID)).rejects.toThrow(
          `Document ${modelID} is not using the expected model ${modelID}`,
        )
        // Remove added points
        await writer.removePointsAllocation(firstPoint.id.toString())
        await expect(
          writer.ceramic.index.count({ models: [writer.allocationModelID] }),
        ).resolves.toBe(1)
        await writer.removePointsAllocation(secondPoint.id.toString())
        await expect(
          writer.ceramic.index.count({ models: [writer.allocationModelID] }),
        ).resolves.toBe(0)
      })

      test('query points allocation documents', async () => {
        const writer = new PointsWriter({ ceramic: context.ceramic })
        const createdDoc = await writer.allocatePointsTo('did:test:123', 5)
        const loadedDoc = await writer.loader.load({ id: createdDoc.id.toString() })
        expect(loadedDoc?.id.equals(createdDoc.id)).toBe(true)
        const createdDoc1 = await writer.allocatePointsTo('did:test:123', 10)
        const createdDoc2 = await writer.allocatePointsTo('did:test:123', 15)
        const createdDoc3 = await writer.allocatePointsTo('did:test:123', 5)
        const createdDoc4 = await writer.allocatePointsTo('did:test:123', -10)
        // First query without cursor, returns the last documents created
        const query1 = await writer.queryAllocationDocumentsFor('did:test:123', { count: 2 })
        expect(query1.documents).toHaveLength(2)
        expect(query1.documents.map((doc) => doc.id.toString())).toEqual([
          createdDoc3.id.toString(),
          createdDoc4.id.toString(),
        ])
        // Second query using cursor from the first query
        const query2 = await writer.queryAllocationDocumentsFor('did:test:123', {
          before: query1.startCursor,
        })
        expect(query2.documents).toHaveLength(3)
        expect(query2.documents.map((doc) => doc.id.toString())).toEqual([
          createdDoc.id.toString(),
          createdDoc1.id.toString(),
          createdDoc2.id.toString(),
        ])
        // Third query for a specific slice in chronological order
        const query3 = await writer.queryAllocationDocumentsFor('did:test:123', {
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

    describe('aggregation documents', () => {
      test('aggregate points', async () => {
        const writer = new PointsWriter({ ceramic: context.ceramic })
        await expect(writer.loadAggregationDocumentFor('did:key:123')).resolves.toBeNull()
        await expect(writer.getAggregationPointsFor('did:key:123')).resolves.toBe(0)
        const doc = await writer.setPointsAggregationFor('did:key:123', 10)
        const loadedDoc = await writer.loadAggregationDocumentFor('did:key:123')
        expect(loadedDoc).toBeDefined()
        expect(loadedDoc!.id.equals(doc.id)).toBe(true)
        expect(loadedDoc!.content!.points).toBe(10)
        await writer.setPointsAggregationFor('did:key:123', 20)
        await expect(writer.getAggregationPointsFor('did:key:123')).resolves.toBe(20)
      })

      test('query aggregation documents', async () => {
        const writer = new PointsWriter({ ceramic: context.ceramic })
        const createdDoc = await writer.setPointsAggregationFor('did:test:1', 5)
        const loadedDoc = await writer.loader.load({ id: createdDoc.id.toString() })
        expect(loadedDoc?.id.equals(createdDoc.id)).toBe(true)
        const createdDoc1 = await writer.setPointsAggregationFor('did:test:2', 10)
        const createdDoc2 = await writer.setPointsAggregationFor('did:test:3', 15)
        const createdDoc3 = await writer.setPointsAggregationFor('did:test:4', 5)
        const createdDoc4 = await writer.setPointsAggregationFor('did:test:5', -10)
        const queryAll = await writer.queryAggregationDocuments()
        expect(queryAll.documents).toHaveLength(5)
        // First query without cursor, returns the last documents created
        const query1 = await writer.queryAggregationDocuments({ count: 2 })
        expect(query1.documents).toHaveLength(2)
        expect(query1.documents.map((doc) => doc.id.toString())).toEqual([
          createdDoc3.id.toString(),
          createdDoc4.id.toString(),
        ])
        // Second query using cursor from the first query
        const query2 = await writer.queryAggregationDocuments({
          before: query1.startCursor,
        })
        expect(query2.documents).toHaveLength(3)
        expect(query2.documents.map((doc) => doc.id.toString())).toEqual([
          createdDoc.id.toString(),
          createdDoc1.id.toString(),
          createdDoc2.id.toString(),
        ])
        // Third query for a specific slice in chronological order
        const query3 = await writer.queryAggregationDocuments({
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
})
