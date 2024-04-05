import express from "express";
import { singlePointController } from "../controllers/singleController.js";

const router: express.Router = express.Router();

router.get("/", singlePointController.getSinglePoints, (_req, res) => {
  return res.json({ totalPoints: res.locals.totalPoints });
});

router.post(
  "/create",
  singlePointController.createSinglePoint,
  singlePointController.getSinglePoints,
  (_req, res) => {
    return res.json({ totalPoints: res.locals.totalPoints });
  }
);

router.delete(
  "/remove",
  singlePointController.removeSinglePoint,
  singlePointController.getSinglePoints,
  (_req, res) => {
    return res.json({ totalPoints: res.locals.totalPoints });
  }
);

export default router;
