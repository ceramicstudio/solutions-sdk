import type { DocumentLoader } from '@composedb/loader'
import type { CeramicAPI, ModelInstanceDocument } from '@composedb/types'

import { getCeramic } from './ceramic.js'
import { getAuthenticatedDID } from './did.js'
import {
  type MultiplePointsContent,
  PointsReader,
  type TotalPointsContent,
} from './points-reader.js'

export type PointsWriterFromSeedParams = {
  ceramic?: CeramicAPI | string
  loader?: DocumentLoader
  modelID?: string
  seed: Uint8Array
}

export type PointsWriterParams = {
  ceramic: CeramicAPI
  aggregationModelID?: string
  allocationModelID?: string
  loader?: DocumentLoader
}

export class PointsWriter<
  AggregationContent extends TotalPointsContent = TotalPointsContent,
  AllocationContent extends MultiplePointsContent = MultiplePointsContent,
> extends PointsReader<AggregationContent, AllocationContent> {
  static async fromSeed<
    AggregationContent extends TotalPointsContent = TotalPointsContent,
    AllocationContent extends MultiplePointsContent = MultiplePointsContent,
  >(
    params: PointsWriterFromSeedParams,
  ): Promise<PointsWriter<AggregationContent, AllocationContent>> {
    const ceramic = getCeramic(params.ceramic)
    const did = await getAuthenticatedDID(params.seed)
    ceramic.did = did
    return new PointsWriter({ ...params, ceramic })
  }

  constructor(params: PointsWriterParams) {
    if (!params.ceramic.did?.authenticated) {
      throw new Error(`An authenticated DID instance must be set on the Ceramic client`)
    }
    super({ ...params, issuer: params.ceramic.did.id })
  }

  async allocatePointsTo(
    did: string,
    points: number,
    content: Partial<AllocationContent> = {},
  ): Promise<ModelInstanceDocument<AllocationContent>> {
    return await this.loader.create(this.allocationModelID, {
      ...content,
      recipient: did,
      points,
    } as AllocationContent)
  }

  async removePointsAllocation(id: string): Promise<void> {
    const doc = await this.loader.load({ id })
    if (doc.metadata.model.toString() !== this.allocationModelID) {
      throw new Error(`Document ${id} is not using the expected model ${this.allocationModelID}`)
    }
    await doc.shouldIndex(false)
  }

  async setPointsAggregationFor(
    did: string,
    points: number,
    content: Partial<AggregationContent> = {},
  ): Promise<ModelInstanceDocument<AggregationContent>> {
    const doc = await this.loadAggregationDocumentFor(did, {
      ignoreEmpty: false,
      onlyIndexed: false,
    })
    const date = new Date().toISOString()
    await doc!.replace({ date, ...content, points, recipient: did } as AggregationContent)
    return doc!
  }
}
