import { getContext } from '../utils/context.js'
import { Request, Response, NextFunction } from 'express'
import { PointsWriter, PointsReader } from '@composexp/points'

const getContextAggregation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ceramic, aggregationModelID } = await getContext()
    const { recipient, context } = req.body

    //instantiate a reader
    const reader = new PointsReader({
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
    return error
  }
}

const getTotalAggregation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ceramic } = await getContext()
    const { recipient } = req.body

    //instantiate a reader
    const reader = new PointsReader({
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
    return error
  }
}

const updateContextAggregation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ceramic, aggregationModelID } = await getContext()
    const { amount, recipient, context } = req.body

    //instantiate a writer and reader
    const contextWriter = new PointsWriter({
      ceramic,
      aggregationModelID,
    })

    const contextReader = new PointsReader({
      ceramic,
      issuer: ceramic.did!.id,
      aggregationModelID,
    })

    // load the document for the recipient and context
    const doc = await contextReader.loadAggregationDocumentFor([recipient, context])
    if (!doc) {
      await contextWriter.setPointsAggregationFor([recipient, context], amount, {
        recipient,
        points: amount,
        date: new Date().toISOString(),
        //@ts-ignore
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
            //@ts-ignore
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
    return error
  }
}

const updateTotalAggregation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ceramic } = await getContext()
    const { amount, recipient } = req.body

    //instantiate a writer and reader
    const totalWriter = new PointsWriter({ ceramic })
    const totalReader = new PointsReader({ ceramic, issuer: ceramic.did!.id })

    // load the document for the recipient and context
    const doc = await totalReader.loadAggregationDocumentFor([recipient])
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
    return error
  }
}

export const multiplePointsController = {
  updateContextAggregation,
  updateTotalAggregation,
  getContextAggregation,
  getTotalAggregation,
}