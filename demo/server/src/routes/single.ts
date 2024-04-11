import { RequestHandler, Response, Router, Request } from 'express'
import { singlePointController } from '../controllers/singleController.js'

const router: Router = Router()

type R = Response & {
  locals: {
    totalPoints: number
  }
}

router.get(
  '/',
  singlePointController.getSinglePoints as RequestHandler,
  (_req: Request, res: R): Response => {
    return res.json({ totalPoints: res.locals.totalPoints })
  },
)

router.post(
  '/create',
  singlePointController.createSinglePoint as RequestHandler,
  singlePointController.getSinglePoints as RequestHandler,
  (_req: Request, res: R): Response => {
    return res.json({ totalPoints: res.locals.totalPoints })
  },
)

router.delete(
  '/remove',
  singlePointController.removeSinglePoint as RequestHandler,
  singlePointController.getSinglePoints as RequestHandler,
  (_req: Request, res: R): Response => {
    return res.json({ totalPoints: res.locals.totalPoints })
  },
)

export default router
