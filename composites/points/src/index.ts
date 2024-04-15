/**
 * @module points-composite
 */

import { definition } from './definition.js'

export { definition }
export const SimplePointsAggregationID = definition.models.SimplePointsAggregation.id
export const SimplePointsAllocationID = definition.models.SimplePointsAllocation.id

export type PointsContent = {
  issuer: string // DID
  recipient: string // DID
  points: number
}
