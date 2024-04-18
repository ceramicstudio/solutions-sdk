import { getCeramicClient } from '@ceramic-solutions/experiments-client'
import {
  type PointsContent,
  SimplePointsAggregationID,
  SimplePointsAllocationID,
} from '@ceramic-solutions/points-composite'
import { type DeterministicLoadOptions, DocumentLoader } from '@composedb/loader'
import type { CeramicAPI, ModelInstanceDocument } from '@composedb/types'

import { GenericReader } from './generic-reader.js'
import { SetReader } from './set-reader.js'
import type { QueryDocumentsOptions, QueryDocumentsResult } from './types.js'

export type AllocatePointsContent = PointsContent

export type TotalPointsContent = PointsContent & {
  date: string
}

export type CreatePointsReaderParams = {
  issuer: string
  aggregationModelID?: string
  allocationModelID?: string
  ceramic?: CeramicAPI | string
  loader?: DocumentLoader
}

export type PointsReaderParams<
  AggregationContent extends TotalPointsContent = TotalPointsContent,
  AllocationContent extends AllocatePointsContent = AllocatePointsContent,
> = {
  aggregationReader: SetReader<AggregationContent>
  allocationReader: GenericReader<AllocationContent>
}

export class PointsReader<
  AggregationContent extends TotalPointsContent = TotalPointsContent,
  AllocationContent extends AllocatePointsContent = AllocatePointsContent,
> {
  static create<
    AggregationContent extends TotalPointsContent = TotalPointsContent,
    AllocationContent extends AllocatePointsContent = AllocatePointsContent,
  >(params: CreatePointsReaderParams): PointsReader<AggregationContent, AllocationContent> {
    const ceramic = getCeramicClient(params.ceramic)
    const aggregationReader = new SetReader<AggregationContent>({
      ceramic,
      issuer: params.issuer,
      loader: params.loader,
      modelID: params.aggregationModelID ?? SimplePointsAggregationID,
    })
    const allocationReader = new GenericReader<AllocationContent>({
      ceramic,
      issuer: params.issuer,
      loader: params.loader,
      modelID: params.allocationModelID ?? SimplePointsAllocationID,
    })
    return new PointsReader({ aggregationReader, allocationReader })
  }

  #aggregation: SetReader<AggregationContent>
  #allocation: GenericReader<AllocationContent>

  constructor(params: PointsReaderParams<AggregationContent, AllocationContent>) {
    this.#aggregation = params.aggregationReader
    this.#allocation = params.allocationReader
  }

  async loadAggregationDocumentFor(
    didOrValues: string | Array<string>,
    options?: DeterministicLoadOptions,
  ): Promise<ModelInstanceDocument<AggregationContent> | null> {
    return await this.#aggregation.loadDocumentFor(didOrValues, options)
  }

  async loadAggregationDocumentsFor(
    did: string,
    options?: QueryDocumentsOptions,
  ): Promise<QueryDocumentsResult<AggregationContent>> {
    return await this.#aggregation.queryDocumentsFor(did, options)
  }

  async getAggregationPointsFor(didOrValues: string | Array<string>): Promise<number> {
    return await this.#aggregation.getPointsFor(didOrValues)
  }

  async queryAggregationDocuments(
    options?: QueryDocumentsOptions,
  ): Promise<QueryDocumentsResult<AggregationContent>> {
    return await this.#aggregation.queryDocuments(options)
  }

  async queryAllocationDocumentsFor(
    did: string,
    options?: QueryDocumentsOptions,
  ): Promise<QueryDocumentsResult<AllocationContent>> {
    return await this.#allocation.queryDocumentsFor(did, options)
  }
}
