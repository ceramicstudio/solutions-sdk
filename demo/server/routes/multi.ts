import express from "express";
import { multiplePointsController } from "../controllers/multiController";

const router = express.Router();

router.get("/", multiplePointsController.getPoints, (req, res) => {
  return res.json({ totalPoints: res.locals.totalPoints });
});

router.post("/create", multiplePointsController.createPoints, (req, res) => {
  return res.json({ totalPoints: res.locals.totalPoints });
});

router.post(
  "/aggregate",
  multiplePointsController.getAggregation,
  multiplePointsController.updateAggregation,
  (req, res) => {
    return res.json({ aggregation: res.locals.aggregation, document: res.locals.document.content });
  }
);

export default router;
