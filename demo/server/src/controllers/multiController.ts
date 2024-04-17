import { getContext } from '../utils/context.js'
import { Request, Response, NextFunction } from 'express'

type PointsContent = {
  recipient: string;
  points: number;
  date: string;
};

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
    const { contextReader } = await getContext()
    const { recipient, context } = req.body

    const doc = await contextReader.loadAggregationDocumentFor([recipient, context])
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
    const { totalReader } = await getContext()
    const { recipient } = req.body

    const doc = await totalReader.loadAggregationDocumentFor([recipient])
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
    const { contextWriter } = await getContext()
    const { amount, recipient, context } = req.body

    // load the document for the recipient and context
    const doc = await contextWriter.loadAggregationDocumentFor([recipient, context])
    if (!doc) {
      await contextWriter.setPointsAggregationFor([recipient, context], amount, {
        recipient,
        points: amount,
        date: new Date().toISOString(),
        context,
      } as Partial<PointsContent>) 
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
    const { totalWriter } = await getContext()
    const { amount, recipient } = req.body

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
