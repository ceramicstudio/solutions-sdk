import express from 'express'
import { multiplePointsController } from '../controllers/multiController.js'

const router: express.Router = express.Router()

router.post(
  '/aggregate',
  multiplePointsController.updateContextAggregation,
  multiplePointsController.updateTotalAggregation,
  (_req, res) => {
    return res.json({ contextTotal: res.locals.contextTotal, total: res.locals.total })
  },
)

router.get(
  '/getAggregations',
  multiplePointsController.getContextAggregation,
  multiplePointsController.getTotalAggregation,
  (_req, res) => {
    return res.json({
      contextTotal: res.locals.contextTotal,
      total: res.locals.total,
      contextDocument: res.locals.contextDocument,
      document: res.locals.document,
    })
  },
)

export default router
