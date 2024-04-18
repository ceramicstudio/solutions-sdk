import { assertAuthenticated, getAuthenticatedClient } from '@ceramic-solutions/experiments-client'
import type { PointsContent } from '@ceramic-solutions/points-composite'
import type { DocumentLoader } from '@composedb/loader'
import type { CeramicAPI, ModelInstanceDocument } from '@composedb/types'

import { GenericReader } from './generic-reader.js'

export type ListWriterFromSeedParams = {
  ceramic?: CeramicAPI | string
  loader?: DocumentLoader
  modelID: string
  seed: Uint8Array
}

export type ListWriterParams = {
  ceramic: CeramicAPI
  loader?: DocumentLoader
  modelID: string
}

export class ListWriter<
  Content extends PointsContent = PointsContent,
> extends GenericReader<Content> {
  static async fromSeed<Content extends PointsContent = PointsContent>(
    params: ListWriterFromSeedParams,
  ): Promise<ListWriter<Content>> {
    const ceramic = await getAuthenticatedClient(params.seed, params.ceramic)
    return new ListWriter({ ...params, ceramic })
  }

  constructor(params: ListWriterParams) {
    assertAuthenticated(params.ceramic.did)
    super({ ...params, issuer: params.ceramic.did.id })
  }

  async createDocument(content: Content): Promise<ModelInstanceDocument<Content>> {
    return await this.loader.create(this.modelID, content)
  }

  async removeDocument(id: string): Promise<void> {
    const doc = await this.loader.load({ id })
    if (doc.metadata.model.toString() !== this.modelID) {
      throw new Error(`Document ${id} is not using the expected model ${this.modelID}`)
    }
    await doc.shouldIndex(false)
  }
}
