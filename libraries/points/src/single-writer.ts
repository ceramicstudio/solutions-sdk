import type { ModelInstanceDocument } from '@ceramicnetwork/stream-model-instance'
import type { DocumentLoader } from '@composedb/loader'
import { CeramicAPI } from '@composedb/types'

import { getCeramic } from './ceramic.js'
import { getAuthenticatedDID } from './did.js'
import { type SinglePointContent, SinglePointReader } from './single-reader.js'

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

export class SinglePointWriter<
  Content extends SinglePointContent = SinglePointContent,
> extends SinglePointReader<Content> {
  async fromSeed<Content extends SinglePointContent = SinglePointContent>(
    params: FromSeedParams,
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
    await doc.shouldIndex(false)
  }
}
