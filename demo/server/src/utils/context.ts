import { getAuthenticatedDID } from '@ceramic-solutions/key-did'
import { fromString } from 'uint8arrays'
import 'dotenv/config.js'

type Context = {
  contextWriter: PointsWriter
  totalWriter: PointsWriter
  contextReader: PointsReader
  totalReader: PointsReader
}

export const getContext = async (): Promise<Context> => {
  const CERAMIC_URL: string | undefined = process.env.CERAMIC_URL || undefined
  const CERAMIC_PRIVATE_KEY: string = process.env.CERAMIC_PRIVATE_KEY || ''
  const aggregationModelID: string | undefined = process.env.AGGREGATION_ID || undefined

  //eslint-disable-next-line
  const key = fromString(CERAMIC_PRIVATE_KEY, 'base16') as Uint8Array

  // generate issuer for reader context
  const issuer = await getAuthenticatedDID(key)
  

  const contextWriter = await PointsWriter.fromSeed({
    aggregationModelID,
    seed: key,
    ceramic: CERAMIC_URL,
  })

  const totalWriter = await PointsWriter.fromSeed({
    seed: key,
    ceramic: CERAMIC_URL,
  })

  const contextReader = PointsReader.create({
    ceramic: CERAMIC_URL,
    issuer: issuer.id,
    aggregationModelID,
  })

  const totalReader = PointsReader.create({
    ceramic: CERAMIC_URL,
    issuer: issuer.id,
  })

 
  return { contextWriter, totalWriter, contextReader, totalReader }
}
