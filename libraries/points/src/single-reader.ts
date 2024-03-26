import type { BaseQuery } from '@ceramicnetwork/common'
import { DocumentLoader } from '@composedb/loader'
import type { CeramicAPI } from '@composedb/types'
import { definition } from '@composexp/points-composite'

import { getCeramic } from './ceramic.js'
import { getQueryForRecipient, queryConnection } from './query.js'
import type { QueryDocumentsOptions, QueryDocumentsResult } from './types.js'

export type SinglePointContent = {
  recipient: string
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

  async countTotalPoints(): Promise<number> {
    return await this.#ceramic.index.count(this.#baseQuery)
  }

  async queryPointDocumentsFor(
    did: string,
    options?: QueryDocumentsOptions,
  ): Promise<QueryDocumentsResult<Content>> {
    const query = getQueryForRecipient(this.#baseQuery, did)
    return await queryConnection(this.#loader, query, options)
  }

  async countPointsFor(did: string): Promise<number> {
    const query = getQueryForRecipient(this.#baseQuery, did)
    return await this.#ceramic.index.count(query)
  }
}
