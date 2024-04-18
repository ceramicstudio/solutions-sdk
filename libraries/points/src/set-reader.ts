import type { PointsContent } from '@ceramic-solutions/points-composite'
import type { DeterministicLoadOptions } from '@composedb/loader'
import type { ModelInstanceDocument } from '@composedb/types'

import { GenericReader, type GenericReaderParams } from './generic-reader.js'

export function toUniqueArg(value: string | Array<string>): Array<string> {
  return Array.isArray(value) ? value : [value]
}

export type SetReaderParams = GenericReaderParams

export class SetReader<
  Content extends PointsContent = PointsContent,
> extends GenericReader<Content> {
  async loadDocumentFor(
    didOrValues: string | Array<string>,
    options: DeterministicLoadOptions = {},
  ): Promise<ModelInstanceDocument<Content> | null> {
    return await this.loader.loadSet(this.issuer, this.modelID, toUniqueArg(didOrValues), {
      ignoreEmpty: true,
      ...options,
    })
  }

  async getPointsFor(
    didOrValues: string | Array<string>,
    options?: DeterministicLoadOptions,
  ): Promise<number> {
    const doc = await this.loadDocumentFor(didOrValues, options)
    return doc?.content?.points ?? 0
  }
}
