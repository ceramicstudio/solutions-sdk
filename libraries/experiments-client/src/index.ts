/**
 * @module experiments-client
 */

import { getAuthenticatedDID } from '@ceramic-solutions/key-did'
import { CeramicClient } from '@ceramicnetwork/http-client'
import type { CeramicAPI } from '@composedb/types'
import type { DID } from 'dids'

const DEFAULT_CERAMIC_URL = 'https://experiments.ceramic.dev'

export function getCeramicClient(ceramic: CeramicAPI | string = DEFAULT_CERAMIC_URL): CeramicAPI {
  return typeof ceramic === 'string' ? new CeramicClient(ceramic) : ceramic
}

export async function getAuthenticatedClient(
  seed: Uint8Array,
  ceramicClientOrURL?: CeramicAPI | string,
): Promise<CeramicAPI> {
  const ceramic = getCeramicClient(ceramicClientOrURL)
  const did = await getAuthenticatedDID(seed)
  ceramic.did = did
  return ceramic
}

export function assertAuthenticated(did?: DID): asserts did {
  if (!did?.authenticated) {
    throw new Error(`An authenticated DID instance must be set on the Ceramic client`)
  }
}
