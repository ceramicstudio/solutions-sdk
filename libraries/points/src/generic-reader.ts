import type { BaseQuery } from '@ceramicnetwork/common'
import { DocumentLoader } from '@composedb/loader'
import type { CeramicAPI } from '@composedb/types'
import type { PointsContent } from '@ceramic-solutions/points-composite'

import { getCeramic } from './ceramic.js'
import { getQueryForRecipient, queryConnection } from './query.js'
import type { QueryDocumentsOptions, QueryDocumentsResult } from './types.js'

export type GenericReaderParams = {
  issuer: string
  modelID: string
  ceramic?: CeramicAPI | string
  loader?: DocumentLoader
}

export class GenericReader<Content extends PointsContent = PointsContent> {
  #baseQuery: BaseQuery
  #issuer: string
  #ceramic: CeramicAPI
  #loader: DocumentLoader
  #modelID: string

  constructor(params: GenericReaderParams) {
    const ceramic = getCeramic(params.ceramic)
    this.#baseQuery = { account: params.issuer, models: [params.modelID] }
    this.#modelID = params.modelID
    this.#ceramic = ceramic
    this.#issuer = params.issuer
    this.#loader = params.loader ?? new DocumentLoader({ ceramic })
  }

  get issuer(): string {
    return this.#issuer
  }

  get modelID(): string {
    return this.#modelID
  }

  get ceramic(): CeramicAPI {
    return this.#ceramic
  }

  get loader(): DocumentLoader {
    return this.#loader
  }

  async queryDocuments(options?: QueryDocumentsOptions): Promise<QueryDocumentsResult<Content>> {
    return await queryConnection(this.#loader, this.#baseQuery, options)
  }

  async queryDocumentsFor(
    did: string,
    options?: QueryDocumentsOptions,
  ): Promise<QueryDocumentsResult<Content>> {
    const query = getQueryForRecipient(this.#baseQuery, did)
    return await queryConnection(this.#loader, query, options)
  }
}
