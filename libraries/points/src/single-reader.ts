import type { BaseQuery, QueryFilters } from '@ceramicnetwork/common'
import type { ModelInstanceDocument } from '@ceramicnetwork/stream-model-instance'
import { type ConnectionQuery, DocumentLoader } from '@composedb/loader'
import type { CeramicAPI } from '@composedb/types'
import { definition } from '@composexp/points-composite'

import { getCeramic } from './ceramic.js'

export type SinglePointContent = {
  recipient: string
}

export type QueryDocumentsOptions = {
  count?: number
  before?: string | null
  after?: string | null
}

export type QueryDocumentsResult<Content extends SinglePointContent = SinglePointContent> = {
  documents: Array<ModelInstanceDocument<Content>>
  startCursor: string | null
  endCursor: string | null
  hasPreviousPage: boolean
  hasNextPage: boolean
}

export type SinglePointReaderParams = {
  issuer: string
  ceramic?: CeramicAPI | string
  loader?: DocumentLoader
  modelID?: string
}

export class SinglePointReader<Content extends SinglePointContent = SinglePointContent> {
  #baseQuery: BaseQuery
  #ceramic: CeramicAPI
  #loader: DocumentLoader
  #modelID: string

  constructor(params: SinglePointReaderParams) {
    const ceramic = getCeramic(params.ceramic)
    const modelID = params.modelID ?? definition.models.SinglePoint!.id

    this.#baseQuery = { account: params.issuer, models: [modelID] }
    this.#ceramic = ceramic
    this.#loader = params.loader ?? new DocumentLoader({ ceramic })
    this.#modelID = modelID
  }

  get ceramic(): CeramicAPI {
    return this.#ceramic
  }

  get loader(): DocumentLoader {
    return this.#loader
  }

  get modelID(): string {
    return this.#modelID
  }

  async loadPointDocument(id: string): Promise<ModelInstanceDocument<Content> | null> {
    return await this.#loader.load({ id })
  }

  async countTotalPoints(): Promise<number> {
    return await this.#ceramic.index.count(this.#baseQuery)
  }

  async queryPointDocumentsFor(
    did: string,
    options: QueryDocumentsOptions,
  ): Promise<QueryDocumentsResult<Content>> {
    const count = options.count ?? 20
    const queryFilters: QueryFilters = { where: { recipient: { equalTo: did } } }
    const query: ConnectionQuery = options.after
      ? // Query in chronological order if the `after` cursor is specified
        { ...this.#baseQuery, queryFilters, first: count, after: options.after }
      : // Query in reverse chronological order by default
        { ...this.#baseQuery, queryFilters, last: count, before: options.before }
    const results = await this.#loader.queryConnection(query)
    const documents = results.edges.map((e) => e.node).filter((n) => n != null) as Array<
      ModelInstanceDocument<Content>
    >
    return { ...results.pageInfo, documents }
  }

  async countPointsFor(did: string): Promise<number> {
    return await this.#ceramic.index.count({
      ...this.#baseQuery,
      queryFilters: { where: { recipient: { equalTo: did } } },
    })
  }
}
