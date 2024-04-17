import { getAuthenticatedCeramic } from '@ceramic-solutions/points'
import { fromString } from 'uint8arrays'
import { CeramicClient } from '@ceramicnetwork/http-client'
import type { CeramicAPI } from '@composedb/types'
import 'dotenv/config.js'

type Context = {
  ceramic: CeramicAPI
  aggregationModelID: string
}

export const getContext = async (): Promise<Context> => {
  const CERAMIC_URL: string | undefined = process.env.CERAMIC_URL || undefined
  const CERAMIC_PRIVATE_KEY: string = process.env.CERAMIC_PRIVATE_KEY || ''
  const aggregationModelID: string = process.env.AGGREGATION_ID || ''

  //eslint-disable-next-line
  const key = fromString(CERAMIC_PRIVATE_KEY, 'base16') as Uint8Array

  const client = CERAMIC_URL ? new CeramicClient(CERAMIC_URL) : undefined
  const ceramic = await getAuthenticatedCeramic(key, client)
  return { ceramic, aggregationModelID }
}
