import { CeramicClient } from '@ceramicnetwork/http-client'
import type { CeramicAPI } from '@composedb/types'

export function getCeramic(ceramic?: CeramicAPI | string): CeramicAPI {
  return ceramic == null || typeof ceramic === 'string' ? new CeramicClient(ceramic) : ceramic
}
