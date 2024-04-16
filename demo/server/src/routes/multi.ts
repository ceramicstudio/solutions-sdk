import { RequestHandler, Request, Response, Router } from 'express'
import { multiplePointsController } from '../controllers/multiController.js'

const router: Router = Router()

type R = Response & {
  locals: {
    contextTotal: number
    total: number
    contextDocument: unknown
    document: unknown
  }
}

router.post(
  '/aggregate',
  multiplePointsController.updateContextAggregation as RequestHandler,
  multiplePointsController.updateTotalAggregation as RequestHandler,
  (_req: Request, res: R) => {
    return res.json({
      contextTotal: res.locals.contextTotal,
      total: res.locals.total,
    })
  },
)

router.get(
  '/getAggregations',
  multiplePointsController.getContextAggregation as RequestHandler,
  multiplePointsController.getTotalAggregation as RequestHandler,
  (_req: Request, res: R) => {
    return res.locals.contextTotal !== 0
      ? res.json({
          contextTotal: res.locals.contextTotal,
          total: res.locals.total,
          contextDocument: res.locals.contextDocument,
          document: res.locals.document,
        })
      : res.json({
          total: res.locals.total,
          document: res.locals.document,
        })
  },
)

export default router
