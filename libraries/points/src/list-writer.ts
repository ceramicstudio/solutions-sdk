import type { CeramicAPI, ModelInstanceDocument } from '@composedb/types'
import type { PointsContent } from '@ceramic-solutions/points-composite'

import { getAuthenticatedCeramic } from './ceramic.js'
import { PointsBaseReader, type PointsBaseReaderParams } from './base-reader.js'

export type PointsListWriterFromSeedParams = PointsBaseReaderParams & {
  seed: Uint8Array
}

export type PointsListWriterParams = Omit<PointsBaseReaderParams, 'ceramic'> & {
  ceramic: CeramicAPI
}

export class PointsListWriter<
  Content extends PointsContent = PointsContent,
> extends PointsBaseReader<Content> {
  static async fromSeed<Content extends PointsContent = PointsContent>(
    params: PointsListWriterFromSeedParams,
  ): Promise<PointsListWriter<Content>> {
    const ceramic = await getAuthenticatedCeramic(params.seed, params.ceramic)
    return new PointsListWriter({ ...params, ceramic })
  }

  constructor(params: PointsListWriterParams) {
    if (!params.ceramic.did?.authenticated) {
      throw new Error(`An authenticated DID instance must be set on the Ceramic client`)
    }
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
