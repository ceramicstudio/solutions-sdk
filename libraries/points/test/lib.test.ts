import { createRequire } from 'node:module'
import { type CeramicContext, getEphemeralCeramic } from '@composexp/ceramic-utils'
import { deployComposite } from '@composexp/composite-utils'

import { SinglePointReader, SinglePointWriter } from '../src'

const require = createRequire(import.meta.url)
const compositePath = require.resolve('@composexp/points-composite/composite.json')

describe('points', () => {
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

    await expect(reader.countTotalPoints()).resolves.toBe(0)

    await writer.addPointTo('did:test:123')
    await writer.addPointTo('did:test:123')
    await writer.addPointTo('did:test:123')
    await expect(reader.countTotalPoints()).resolves.toBe(3)
    await expect(reader.countPointsFor('did:test:123')).resolves.toBe(3)
    await expect(reader.countPointsFor('did:test:456')).resolves.toBe(0)

    await writer.addPointTo('did:test:456')
    await writer.addPointTo('did:test:456')
    await expect(reader.countTotalPoints()).resolves.toBe(5)
    await expect(reader.countPointsFor('did:test:123')).resolves.toBe(3)
    await expect(reader.countPointsFor('did:test:456')).resolves.toBe(2)
  })
})
