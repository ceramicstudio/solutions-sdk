import type { BaseQuery } from '@ceramicnetwork/common'
import type { ModelInstanceDocument } from '@ceramicnetwork/stream-model-instance'
import { DocumentLoader } from '@composedb/loader'
import type { CeramicAPI } from '@composedb/types'
import { definition } from '@composexp/points-composite'

import { getCeramic } from './ceramic.js'

export type QueryDocumentsOptions = {
  count?: number
  cursor?: string
}

export type QueryDocumentsResult = {
  documents: Array<ModelInstanceDocument>
  cursor: string | null
}

export type SinglePointReaderParams = {
  allocatedBy: string
  ceramic?: CeramicAPI | string
  loader?: DocumentLoader
  modelID?: string
}

export class SinglePointReader {
  #baseQuery: BaseQuery
  #ceramic: CeramicAPI
  #loader: DocumentLoader
  #modelID: string

  constructor(params: SinglePointReaderParams) {
    const ceramic = getCeramic(params.ceramic)
    const modelID = params.modelID ?? definition.models.SinglePoint!.id

    this.#baseQuery = { account: params.allocatedBy, models: [modelID] }
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

  async loadPointDocument(id: string): Promise<ModelInstanceDocument | null> {
    return await this.#loader.load({ id })
  }

  async countTotalPoints(): Promise<number> {
    return await this.#ceramic.index.count(this.#baseQuery)
  }

  async queryPointDocumentsFor(
    did: string,
    options: QueryDocumentsOptions,
  ): Promise<QueryDocumentsResult> {
    const results = await this.#loader.queryConnection({
      ...this.#baseQuery,
      queryFilters: { where: { allocatedTo: { equalTo: did } } },
      last: options.count ?? 20,
      before: options.cursor,
    })
    const documents = results.edges
      .map((e) => e.node)
      .filter((n) => n != null) as Array<ModelInstanceDocument>
    return { documents, cursor: results.pageInfo.endCursor }
  }

  async countPointsFor(did: string): Promise<number> {
    return await this.#ceramic.index.count({
      ...this.#baseQuery,
      queryFilters: { where: { allocatedTo: { equalTo: did } } },
    })
  }
}
