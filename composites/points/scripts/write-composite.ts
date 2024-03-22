import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { writeComposite } from '@composexp/composite-utils'

const PACKAGE_PATH = fileURLToPath(new URL('..', import.meta.url))

await writeComposite({
  schemaPath: join(PACKAGE_PATH, 'schemas', '1-init.graphql'),
  compositeDefinitionPath: join(PACKAGE_PATH, 'composite.json'),
  runtimeDefinitionPath: join(PACKAGE_PATH, 'src', 'index.ts'),
})

process.exit(0)
