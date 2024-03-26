import type { ModelInstanceDocument } from '@composedb/types'

export type QueryDocumentsOptions = {
  count?: number
  before?: string | null
  after?: string | null
}

export type QueryDocumentsResult<Content> = {
  documents: Array<ModelInstanceDocument<Content>>
  startCursor: string | null
  endCursor: string | null
  hasPreviousPage: boolean
  hasNextPage: boolean
}
