import { CeramicClient } from '@ceramicnetwork/http-client'
import type { CeramicAPI } from '@composedb/types'
import type { DID } from 'dids'

import { getAuthenticatedDID } from './did.js'

const DEFAULT_CERAMIC_URL = 'https://experiments.ceramic.dev'

export function getCeramic(ceramic: CeramicAPI | string = DEFAULT_CERAMIC_URL): CeramicAPI {
  return typeof ceramic === 'string' ? new CeramicClient(ceramic) : ceramic
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
