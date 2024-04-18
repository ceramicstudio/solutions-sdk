import { getAuthenticatedDID } from '@ceramic-solutions/key-did'
import { fromString } from 'uint8arrays'
import { CeramicClient } from '@ceramicnetwork/http-client'
import 'dotenv/config.js'

type Context = {
  ceramic: CeramicClient
  aggregationModelID: string
}

export const getContext = async (): Promise<Context> => {
  const CERAMIC_URL: string = process.env.CERAMIC_URL || ''
  const CERAMIC_PRIVATE_KEY: string = process.env.CERAMIC_PRIVATE_KEY || ''
  const aggregationModelID: string = process.env.AGGREGATION_ID || ''

  //eslint-disable-next-line
  const key = fromString(CERAMIC_PRIVATE_KEY, 'base16') as Uint8Array

  const ceramic = new CeramicClient(CERAMIC_URL)
  ceramic.did = await getAuthenticatedDID(key)
  return { ceramic, aggregationModelID }
}
