import { CeramicClient } from '@ceramicnetwork/http-client'
import type { CeramicAPI } from '@composedb/types'
import type { DID } from 'dids'

import { getAuthenticatedDID } from './did.js'

export function getCeramic(ceramic?: CeramicAPI | string): CeramicAPI {
  return ceramic == null || typeof ceramic === 'string' ? new CeramicClient(ceramic) : ceramic
}

export async function getAuthenticatedCeramic(
  seed: Uint8Array,
  ceramicClientOrURL?: CeramicAPI | string,
): Promise<CeramicAPI> {
  const ceramic = getCeramic(ceramicClientOrURL)
  const did = await getAuthenticatedDID(seed)
  ceramic.did = did
  return ceramic
}

export function assertAuthenticated(did?: DID): asserts did {
  if (!did?.authenticated) {
    throw new Error(`An authenticated DID instance must be set on the Ceramic client`)
  }
}
