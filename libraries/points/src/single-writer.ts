import type { ModelInstanceDocument } from '@ceramicnetwork/stream-model-instance'
import type { DocumentLoader } from '@composedb/loader'
import { CeramicAPI } from '@composedb/types'

import { getCeramic } from './ceramic.js'
import { getAuthenticatedDID } from './did.js'
import { SinglePointReader } from './single-reader.js'

export type FromSeedParams = {
  ceramic?: CeramicAPI | string
  loader?: DocumentLoader
  modelID?: string
  seed: Uint8Array
}

export type SinglePointWriterParams = {
  ceramic: CeramicAPI
  loader?: DocumentLoader
  modelID?: string
}

export class SinglePointWriter extends SinglePointReader {
  async fromSeed(params: FromSeedParams): Promise<SinglePointWriter> {
    const ceramic = getCeramic(params.ceramic)
    const did = await getAuthenticatedDID(params.seed)
    ceramic.did = did
    return new SinglePointWriter({ ceramic, loader: params.loader, modelID: params.modelID })
  }

  constructor(params: SinglePointWriterParams) {
    if (!params.ceramic.did?.authenticated) {
      throw new Error(`An authenticated DID instance must be set on the Ceramic client`)
    }
    super({ ...params, allocatedBy: params.ceramic.did.id })
  }

  async addPointTo(
    did: string,
    content: Record<string, unknown> = {},
  ): Promise<ModelInstanceDocument> {
    return await this.loader.create(this.modelID, { ...content, allocatedTo: did })
  }

  async removePoint(id: string): Promise<void> {
    const doc = await this.loader.load({ id })
    await doc.shouldIndex(false)
  }
}
