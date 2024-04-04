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
  multiplePointsController.updateAggregation,
  (req, res) => {
    return res.json({ aggregation: res.locals.aggregation, document: res.locals.document.content });
  }
);

router.get(
  "/getAggregation",
  multiplePointsController.getAggregation,
  (req, res) => {
    return res.json({ aggregation: res.locals.aggregation, document: res.locals.document.content });
  }
);

router.get(
  "/getAggregations",
  multiplePointsController.getAllAggregations,
  (req, res) => {
    return res.json({ documents: res.locals.documents });
  }
);

router.get(
  "/getAggregationTotal",
  multiplePointsController.getAllAggregations,
  multiplePointsController.getPointTotal,
  (req, res) => {
    return res.json({ total: res.locals.total });
  }
);

export default router;
