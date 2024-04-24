export interface Guilds {
  id: string
  name: string
  icon: string
  owner: boolean
  permissions: number
  features: Array<string>
  permissions_new: string
}

export interface AggregationContent {
  recipient: string // DID
  points: number
  date: string
}

export interface PointsContent {
  recipient: string
  points: number
  date: string
}
