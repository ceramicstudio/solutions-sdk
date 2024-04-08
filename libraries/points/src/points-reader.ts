import type { BaseQuery } from '@ceramicnetwork/common'
import { type DeterministicLoadOptions, DocumentLoader } from '@composedb/loader'
import type { CeramicAPI, ModelInstanceDocument } from '@composedb/types'
import { definition } from '@composexp/points-composite'

import { getCeramic } from './ceramic.js'
import { getQueryForRecipient, queryConnection } from './query.js'
import type { QueryDocumentsOptions, QueryDocumentsResult } from './types.js'

export function toUniqueArg(value: string | Array<string>): Array<string> {
  return Array.isArray(value) ? value : [value]
}

export type MultiplePointsContent = {
  recipient: string
  points: number
}

export type TotalPointsContent = {
  recipient: string
  points: number
  date: string
}

export type PointsReaderParams = {
  issuer: string
  aggregationModelID?: string
  allocationModelID?: string
  ceramic?: CeramicAPI | string
  loader?: DocumentLoader
}

export class PointsReader<
  AggregationContent extends TotalPointsContent = TotalPointsContent,
  AllocationContent extends MultiplePointsContent = MultiplePointsContent,
> {
  #aggregationBaseQuery: BaseQuery
  #aggregationModelID: string
  #allocationBaseQuery: BaseQuery
  #allocationModelID: string
  #issuer: string
  #ceramic: CeramicAPI
  #loader: DocumentLoader

  constructor(params: PointsReaderParams) {
    const ceramic = getCeramic(params.ceramic)
    const aggregationModelID = params.aggregationModelID ?? definition.models.TotalPoints.id
    const allocationModelID = params.allocationModelID ?? definition.models.MultiplePoints.id

    this.#aggregationBaseQuery = { account: params.issuer, models: [aggregationModelID] }
    this.#aggregationModelID = aggregationModelID
    this.#allocationBaseQuery = { account: params.issuer, models: [allocationModelID] }
    this.#allocationModelID = allocationModelID
    this.#ceramic = ceramic
    this.#issuer = params.issuer
    this.#loader = params.loader ?? new DocumentLoader({ ceramic })
  }

  get aggregationModelID(): string {
    return this.#aggregationModelID
  }

  get allocationModelID(): string {
    return this.#allocationModelID
  }

  get ceramic(): CeramicAPI {
    return this.#ceramic
  }

  get loader(): DocumentLoader {
    return this.#loader
  }

  async loadAggregationDocumentFor(
    didOrValues: string | Array<string>,
    options: DeterministicLoadOptions = {},
  ): Promise<ModelInstanceDocument<AggregationContent> | null> {
    return await this.#loader.loadSet(
      this.#issuer,
      this.#aggregationModelID,
      toUniqueArg(didOrValues),
      { ignoreEmpty: true, ...options },
    )
  }

  async loadAggregationDocumentsFor(
    did: string,
    options?: QueryDocumentsOptions,
  ): Promise<QueryDocumentsResult<AggregationContent>> {
    const query = getQueryForRecipient(this.#aggregationBaseQuery, did)
    return await queryConnection(this.#loader, query, options)
  }

  async getAggregationPointsFor(didOrValues: string | Array<string>): Promise<number> {
    const doc = await this.loadAggregationDocumentFor(didOrValues)
    return doc?.content?.points ?? 0
  }

  async queryAggregationDocuments(
    options?: QueryDocumentsOptions,
  ): Promise<QueryDocumentsResult<AggregationContent>> {
    return await queryConnection(this.#loader, this.#aggregationBaseQuery, options)
  }

  async queryAllocationDocumentsFor(
    did: string,
    options?: QueryDocumentsOptions,
  ): Promise<QueryDocumentsResult<AllocationContent>> {
    const query = getQueryForRecipient(this.#allocationBaseQuery, did)
    return await queryConnection(this.#loader, query, options)
  }
}
