import type { CeramicAPI, ModelInstanceDocument } from '@composedb/types'
import type { PointsContent } from '@ceramic-solutions/points-composite'

import { getAuthenticatedCeramic } from './ceramic.js'
import { PointsSetReader, type PointsSetReaderParams, toUniqueArg } from './set-reader.js'

export type PointsSetWriterFromSeedParams = PointsSetReaderParams & {
  seed: Uint8Array
}

export type PointsSetWriterParams = Omit<PointsSetReaderParams, 'ceramic'> & {
  ceramic: CeramicAPI
}

export class PointsSetWriter<
  Content extends PointsContent = PointsContent,
> extends PointsSetReader<Content> {
  static async fromSeed<Content extends PointsContent = PointsContent>(
    params: PointsSetWriterFromSeedParams,
  ): Promise<PointsSetWriter<Content>> {
    const ceramic = await getAuthenticatedCeramic(params.seed, params.ceramic)
    return new PointsSetWriter({ ...params, ceramic })
  }

  constructor(params: PointsSetWriterParams) {
    if (!params.ceramic.did?.authenticated) {
      throw new Error(`An authenticated DID instance must be set on the Ceramic client`)
    }
    super({ ...params, issuer: params.ceramic.did.id })
  }

  async _loadDocumentFor(
    didOrValues: string | Array<string>,
  ): Promise<ModelInstanceDocument<Content>> {
    const doc = await this.loadDocumentFor(didOrValues, { ignoreEmpty: false, onlyIndexed: false })
    return doc!
  }

  async setDocumentFor(
    didOrValues: string | Array<string>,
    updateContent: (content: Content | null) => Partial<Content>,
  ): Promise<ModelInstanceDocument<Content>> {
    const unique = toUniqueArg(didOrValues)
    const doc = await this._loadDocumentFor(didOrValues)
    const content = doc!.content
    await doc!.replace({
      // Copy existing content or set recipient (assuming it's the first value)
      ...(content ?? { recipient: unique[0] }),
      // Apply content update
      ...updateContent(content),
    } as Content)
    return doc!
  }

  async removeDocument(id: string): Promise<void> {
    const doc = await this.loader.load({ id })
    if (doc.metadata.model.toString() !== this.modelID) {
      throw new Error(`Document ${id} is not using the expected model ${this.modelID}`)
    }
    await doc.shouldIndex(false)
  }

  async removeDocumentFor(didOrValues: string | Array<string>): Promise<void> {
    const doc = await this._loadDocumentFor(didOrValues)
    await doc.shouldIndex(false)
  }
}
