import type { DocumentLoader } from '@composedb/loader'
import type { CeramicAPI, ModelInstanceDocument } from '@composedb/types'

import { getCeramic } from './ceramic.js'
import { getAuthenticatedDID } from './did.js'
import { type SinglePointContent, SinglePointReader } from './single-reader.js'

export type SinglePointWriterFromSeedParams = {
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

export class SinglePointWriter<
  Content extends SinglePointContent = SinglePointContent,
> extends SinglePointReader<Content> {
  static async fromSeed<Content extends SinglePointContent = SinglePointContent>(
    params: SinglePointWriterFromSeedParams,
  ): Promise<SinglePointWriter<Content>> {
    const ceramic = getCeramic(params.ceramic)
    const did = await getAuthenticatedDID(params.seed)
    ceramic.did = did
    return new SinglePointWriter({ ceramic, loader: params.loader, modelID: params.modelID })
  }

  constructor(params: SinglePointWriterParams) {
    if (!params.ceramic.did?.authenticated) {
      throw new Error(`An authenticated DID instance must be set on the Ceramic client`)
    }
    super({ ...params, issuer: params.ceramic.did.id })
  }

  async addPointTo(
    did: string,
    content: Partial<Content> = {},
  ): Promise<ModelInstanceDocument<Content>> {
    return await this.loader.create(this.modelID, { ...content, recipient: did } as Content)
  }

  async removePoint(id: string): Promise<void> {
    const doc = await this.loader.load({ id })
    if (doc.metadata.model.toString() !== this.modelID) {
      throw new Error(`Document ${id} is not using the expected model ${this.modelID}`)
    }
    await doc.shouldIndex(false)
  }
}
