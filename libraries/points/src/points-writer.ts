import type { DocumentLoader } from '@composedb/loader'
import type { CeramicAPI, ModelInstanceDocument } from '@composedb/types'
import {
  SimplePointsAggregationID,
  SimplePointsAllocationID,
} from '@ceramic-solutions/points-composite'

import { assertAuthenticated, getAuthenticatedCeramic } from './ceramic.js'
import { ListWriter } from './list-writer.js'
import {
  type AllocatePointsContent,
  PointsReader,
  type TotalPointsContent,
} from './points-reader.js'
import { SetWriter } from './set-writer.js'

export type PointsWriterFromAuthenticatedParams = {
  aggregationModelID?: string
  allocationModelID?: string
  ceramic: CeramicAPI
  loader?: DocumentLoader
}

export type PointsWriterFromSeedParams = {
  aggregationModelID?: string
  allocationModelID?: string
  ceramic?: CeramicAPI | string
  loader?: DocumentLoader
  seed: Uint8Array
}

export type PointsWriterParams<
  AggregationContent extends TotalPointsContent = TotalPointsContent,
  AllocationContent extends AllocatePointsContent = AllocatePointsContent,
> = {
  aggregationWriter: SetWriter<AggregationContent>
  allocationWriter: ListWriter<AllocationContent>
}

export class PointsWriter<
  AggregationContent extends TotalPointsContent = TotalPointsContent,
  AllocationContent extends AllocatePointsContent = AllocatePointsContent,
> extends PointsReader<AggregationContent, AllocationContent> {
  static fromAuthenticated<
    AggregationContent extends TotalPointsContent = TotalPointsContent,
    AllocationContent extends AllocatePointsContent = AllocatePointsContent,
  >(
    params: PointsWriterFromAuthenticatedParams,
  ): PointsWriter<AggregationContent, AllocationContent> {
    assertAuthenticated(params.ceramic.did)
    const aggregationWriter = new SetWriter<AggregationContent>({
      ceramic: params.ceramic,
      loader: params.loader,
      modelID: params.aggregationModelID ?? SimplePointsAggregationID,
    })
    const allocationWriter = new ListWriter<AllocationContent>({
      ceramic: params.ceramic,
      loader: params.loader,
      modelID: params.allocationModelID ?? SimplePointsAllocationID,
    })
    return new PointsWriter({ aggregationWriter, allocationWriter })
  }

  static async fromSeed<
    AggregationContent extends TotalPointsContent = TotalPointsContent,
    AllocationContent extends AllocatePointsContent = AllocatePointsContent,
  >(
    params: PointsWriterFromSeedParams,
  ): Promise<PointsWriter<AggregationContent, AllocationContent>> {
    const { seed, ...rest } = params
    const ceramic = await getAuthenticatedCeramic(seed, params.ceramic)
    return PointsWriter.fromAuthenticated({ ...rest, ceramic })
  }

  #aggregation: SetWriter<AggregationContent>
  #allocation: ListWriter<AllocationContent>

  constructor(params: PointsWriterParams<AggregationContent, AllocationContent>) {
    super({
      aggregationReader: params.aggregationWriter,
      allocationReader: params.allocationWriter,
    })
    this.#aggregation = params.aggregationWriter
    this.#allocation = params.allocationWriter
  }

  async allocatePointsTo(
    did: string,
    points: number,
    content: Partial<AllocationContent> = {},
  ): Promise<ModelInstanceDocument<AllocationContent>> {
    return await this.#allocation.createDocument({
      ...content,
      recipient: did,
      points,
    } as AllocationContent)
  }

  async removePointsAllocation(id: string): Promise<void> {
    await this.#allocation.removeDocument(id)
  }

  async updatePointsAggregationFor(
    didOrValues: string | Array<string>,
    updateContent: (content: AggregationContent | null) => Partial<AggregationContent>,
  ): Promise<ModelInstanceDocument<AggregationContent>> {
    return await this.#aggregation.setDocumentFor(didOrValues, updateContent)
  }

  async setPointsAggregationFor(
    didOrValues: string | Array<string>,
    points: number,
    content: Partial<AggregationContent> = {},
  ): Promise<ModelInstanceDocument<AggregationContent>> {
    const date = new Date().toISOString()
    return await this.updatePointsAggregationFor(didOrValues, () => ({ date, ...content, points }))
  }
}
