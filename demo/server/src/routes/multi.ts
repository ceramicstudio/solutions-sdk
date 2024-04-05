import express from "express";
import { multiplePointsController } from "../controllers/multiController.js";

const router: express.Router = express.Router();

router.get("/", multiplePointsController.getPoints, (_req, res) => {
  return res.json({ totalPoints: res.locals.totalPoints });
});

router.post("/create", multiplePointsController.createPoints, (_req, res) => {
  return res.json({ totalPoints: res.locals.totalPoints });
});

router.post(
  "/aggregate",
  multiplePointsController.updateAggregation,
  (_req, res) => {
    return res.json({ aggregation: res.locals.aggregation, document: res.locals.document.content });
  }
);

router.post(
  "/aggregateIfNew",
  multiplePointsController.getAggregation,
  multiplePointsController.updateAggregationIfNew,
  (_req, res) => {
    return res.json({ aggregation: res.locals.aggregation, document: res.locals.document.content });
  }
);

router.get(
  "/getAggregation",
  multiplePointsController.getAggregation,
  (_req, res) => {
    return res.json({ aggregation: res.locals.aggregation, document: res.locals.document.content });
  }
);

router.get(
  "/getAggregations",
  multiplePointsController.getAllAggregations,
  (_req, res) => {
    return res.json({ documents: res.locals.documents });
  }
);

router.get(
  "/getAggregationTotal",
  multiplePointsController.getAllAggregations,
  multiplePointsController.getPointTotal,
  (_req, res) => {
    return res.json({ total: res.locals.total });
  }
);

export default router;
