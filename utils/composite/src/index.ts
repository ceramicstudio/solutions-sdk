import {
  createComposite,
  writeEncodedComposite,
  writeRuntimeDefinition,
  writeGraphQLSchema,
} from '@composedb/devtools-node'
import { getEphemeralCeramic } from '@composesolutions/ceramic-utils'

export type WriteCompositeParams = {
  schemaPath: string
  compositeDefinitionPath: string
  runtimeDefinitionPath: string
  runtimeJSONPath?: string
  runtimeGraphQLPath?: string
}

export async function writeComposite(params: WriteCompositeParams) {
  const ctx = await getEphemeralCeramic()
  // @ts-ignore Ceramic type
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
