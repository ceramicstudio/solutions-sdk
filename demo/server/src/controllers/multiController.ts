import { getContext } from '../utils/context.js'
import { Request, Response, NextFunction } from 'express'
import { PointsWriter, PointsReader } from '@ceramic-solutions/points'

type ContextAggregationContent = {
  recipient: string
  points: number
  date: string
  context: string
}

export interface GetContextAggregationRequest extends Request {
  body: {
    recipient: string
    context: string
  }
}

export interface UpdateTotalAggregationRequest extends Request {
  body: {
    recipient: string
    amount: number
  }
}

export interface UpdateContextAggregationRequest extends Request {
  body: {
    recipient: string
    context: string
    amount: number
  }
}

export interface GetTotalRequest extends Request {
  body: {
    recipient: string
  }
}

const getContextAggregation = async (
  req: GetContextAggregationRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { ceramic, aggregationModelID } = await getContext()
    const { recipient, context } = req.body

    //instantiate a reader
    const reader = PointsReader.create({
      ceramic,
      issuer: ceramic.did!.id,
      aggregationModelID,
    })
    const doc = await reader.loadAggregationDocumentFor([recipient, context])
    res.locals = {
      ...res.locals,
      contextTotal: doc ? (doc.content ? doc.content.points : 0) : 0,
      contextDocument: doc ? doc.content : null,
    }
    return next()
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const getTotalAggregation = async (
  req: GetTotalRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { ceramic } = await getContext()
    const { recipient } = req.body

    //instantiate a reader
    const reader = PointsReader.create({
      ceramic,
      issuer: ceramic.did!.id,
    })
    const doc = await reader.loadAggregationDocumentFor([recipient])
    res.locals = {
      ...res.locals,
      total: doc ? (doc.content ? doc.content.points : 0) : 0,
      document: doc ? doc.content : null,
    }
    return next()
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const updateContextAggregation = async (
  req: UpdateContextAggregationRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { ceramic, aggregationModelID } = await getContext()
    const { amount, recipient, context } = req.body

    //instantiate a writer
    const contextWriter = PointsWriter.fromAuthenticated<ContextAggregationContent>({
      ceramic,
      aggregationModelID,
    })

    // load the document for the recipient and context
    const doc = await contextWriter.loadAggregationDocumentFor([recipient, context])
    if (!doc) {
      await contextWriter.setPointsAggregationFor([recipient, context], amount, {
        recipient,
        points: amount,
        date: new Date().toISOString(),
        context,
      })
      res.locals = {
        ...res.locals,
        contextTotal: amount,
      }
    } else {
      const updatedDoc = await contextWriter.updatePointsAggregationFor(
        [recipient, context],
        (content) => {
          return {
            points: content ? content.points + amount : amount,
            date: new Date().toISOString(),
            recipient,
            context,
          }
        },
      )
      res.locals = {
        ...res.locals,
        contextTotal: updatedDoc.content ? updatedDoc.content.points : 0,
      }
    }
    return next()
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const updateTotalAggregation = async (
  req: UpdateTotalAggregationRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { ceramic } = await getContext()
    const { amount, recipient } = req.body

    //instantiate a writer
    const totalWriter = PointsWriter.fromAuthenticated({ ceramic })

    // load the document for the recipient and context
    const doc = await totalWriter.loadAggregationDocumentFor([recipient])
    if (!doc) {
      await totalWriter.setPointsAggregationFor([recipient], amount, {
        recipient,
        points: amount,
        date: new Date().toISOString(),
      })
      res.locals = {
        ...res.locals,
        total: amount,
      }
    } else {
      const updatedDoc = await totalWriter.updatePointsAggregationFor([recipient], (content) => {
        return {
          points: content ? content.points + amount : amount,
          date: new Date().toISOString(),
          recipient,
        }
      })
      res.locals = {
        ...res.locals,
        total: updatedDoc.content ? updatedDoc.content.points : 0,
      }
    }
    return next()
  } catch (error) {
    console.error(error)
    next(error)
  }
}

export const multiplePointsController = {
  updateContextAggregation,
  updateTotalAggregation,
  getContextAggregation,
  getTotalAggregation,
}
