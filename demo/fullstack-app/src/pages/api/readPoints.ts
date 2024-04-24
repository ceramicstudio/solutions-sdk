import { type NextApiRequest, type NextApiResponse } from 'next'
import { contextReader, reader } from '@/utils/context'
import type { ModelInstanceDocument } from '@composedb/types'
import { type AggregationContent } from '@/utils/types'

interface Request extends NextApiRequest {
  body: {
    recipient: string
    context: string
  }
}

interface Response extends NextApiResponse {
  status(code: number): Response
  send(data: { contextTotal: number; total: number } | { error: string }): void
}

export default async function handler(req: Request, res: Response) {
  try {
    const { recipient, context } = req.body

    // get context aggregation doc if exists
    const contextAggregationDoc: ModelInstanceDocument<AggregationContent> | null =
      await contextReader.loadAggregationDocumentFor([recipient, context])

    // get total aggregation doc if exists
    const totalAggregationDoc: ModelInstanceDocument<AggregationContent> | null =
      await reader.loadAggregationDocumentFor([recipient])

    res.status(200).send({
      contextTotal: contextAggregationDoc
        ? contextAggregationDoc.content
          ? contextAggregationDoc.content.points
          : 0
        : 0,
      total: totalAggregationDoc
        ? totalAggregationDoc.content
          ? totalAggregationDoc.content.points
          : 0
        : 0,
    })
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: 'Internal Server Error' })
  }
}
