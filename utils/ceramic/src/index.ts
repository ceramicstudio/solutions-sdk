import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { CeramicDaemon, DaemonConfig } from '@ceramicnetwork/cli'
import type { IpfsApi } from '@ceramicnetwork/common'
import { Ceramic } from '@ceramicnetwork/core'
import { createIPFS } from '@ceramicnetwork/ipfs-daemon'
import { getAuthenticatedDID } from '@composesolutions/did-utils'
import type { DID } from 'dids'

export type CeramicParams = {
  adminSeed: Uint8Array
  dataPath: string
}

export type CeramicContext = {
  ceramic: Ceramic
  did: DID
  ipfs: IpfsApi
  dispose: () => Promise<void>
}

export async function getCeramic(params: CeramicParams): Promise<CeramicContext> {
  const ceramicPath = join(params.dataPath, 'ceramic')
  const [did, ipfs] = await Promise.all([
    getAuthenticatedDID(params.adminSeed),
    createIPFS({ go: { repo: join(params.dataPath, 'ipfs') } }, false),
    mkdir(ceramicPath, { recursive: true }),
  ])

  const ceramic = await Ceramic.create(ipfs, {
    indexing: {
      allowQueriesBeforeHistoricalSync: true,
      db: 'sqlite://' + join(ceramicPath, 'indexing.db'),
      disableComposedb: false,
      enableHistoricalSync: false,
    },
    networkName: 'inmemory',
    stateStoreDirectory: join(ceramicPath, 'state'),
  })
  ceramic.did = did

  async function dispose() {
    await ceramic.close()
    await ipfs.stop()
  }

  return { ceramic, did, ipfs, dispose }
}

export type CeramicDaemonParams = CeramicParams & {
  port?: number
}

export type CeramicDaemonContext = CeramicContext & {
  daemon: CeramicDaemon
  port: number
}

export async function startCeramicDaemon(
  params: CeramicDaemonParams,
): Promise<CeramicDaemonContext> {
  const port = params.port ?? 7007

  const ctx = await getCeramic(params)
  const daemon = new CeramicDaemon(
    ctx.ceramic,
    DaemonConfig.fromObject({
      'http-api': {
        'admin-dids': [ctx.ceramic.did!.id],
        'cors-allowed-origins': ['.*'],
        port,
      },
    }),
  )
  await daemon.listen()

  async function dispose() {
    await daemon.close()
  }

  return { ...ctx, daemon, dispose, port }
}
