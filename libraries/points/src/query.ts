import type { BaseQuery } from '@ceramicnetwork/common'
import type { ConnectionQuery, DocumentLoader } from '@composedb/loader'
import type { ModelInstanceDocument } from '@composedb/types'

import type { QueryDocumentsOptions, QueryDocumentsResult } from './types.js'

export function getQueryForRecipient(base: BaseQuery, did: string): BaseQuery {
  return { ...base, queryFilters: { where: { recipient: { equalTo: did } } } }
}
export async function queryConnection<Content>(
  loader: DocumentLoader,
  baseQuery: BaseQuery,
  options: QueryDocumentsOptions = {},
): Promise<QueryDocumentsResult<Content>> {
  const count = options.count ?? 20
  const query: ConnectionQuery = options.after
    ? // Query in chronological order if the `after` cursor is specified
      { ...baseQuery, first: count, after: options.after }
    : // Query in reverse chronological order by default
      { ...baseQuery, last: count, before: options.before }
  const results = await loader.queryConnection(query)
  const documents = results.edges.map((e) => e.node).filter((n) => n != null) as Array<
    ModelInstanceDocument<Content>
  >
  return { ...results.pageInfo, documents }
}
