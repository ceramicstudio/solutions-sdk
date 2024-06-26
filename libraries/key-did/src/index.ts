/**
 * @module key-did
 */

import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'

export function generatePrivateKey(): Uint8Array {
  return globalThis.crypto.getRandomValues(new Uint8Array(32))
}

export async function getAuthenticatedDID(seed: Uint8Array): Promise<DID> {
  const did = new DID({ provider: new Ed25519Provider(seed), resolver: getResolver() })
  await did.authenticate()
  return did
}
