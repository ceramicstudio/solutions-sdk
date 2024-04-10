import {
  type PathInput,
  createComposite,
  readEncodedComposite,
  writeEncodedComposite,
  writeRuntimeDefinition,
  writeGraphQLSchema,
} from '@composedb/devtools-node'
import type { CeramicAPI } from '@composedb/types'
import { getEphemeralCeramic } from '@composexp/ceramic-utils'

export type WriteCompositeParams = {
  schemaPath: PathInput
  compositeDefinitionPath: PathInput
  runtimeDefinitionPath: PathInput
  runtimeJSONPath?: PathInput
  runtimeGraphQLPath?: PathInput
}

export async function writeComposite(params: WriteCompositeParams) {
  const ctx = await getEphemeralCeramic()
  // @ts-expect-error Ceramic type
  const composite = await createComposite(ctx.ceramic, params.schemaPath)
  const runtimeDefinition = composite.toRuntime()

  const toWrite = [
    writeEncodedComposite(composite, params.compositeDefinitionPath),
    writeRuntimeDefinition(runtimeDefinition, params.runtimeDefinitionPath),
  ]
  if (params.runtimeJSONPath != null) {
    toWrite.push(writeRuntimeDefinition(runtimeDefinition, params.runtimeJSONPath))
  }
  if (params.runtimeGraphQLPath != null) {
    toWrite.push(writeGraphQLSchema(runtimeDefinition, params.runtimeGraphQLPath))
  }

  await Promise.all(toWrite)
  await ctx.dispose()
}

export async function deployComposite(ceramic: CeramicAPI, path: PathInput): Promise<void> {
  // @ts-expect-error Ceramic type
  await readEncodedComposite(ceramic, path, true)
}
