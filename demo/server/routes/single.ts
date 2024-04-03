import express from "express";
import { singlePointController } from "../controllers/singleController";

const router = express.Router();

router.get("/", singlePointController.getSinglePoints, (req, res) => {
  return res.json({ totalPoints: res.locals.totalPoints });
});

router.post(
  "/create",
  singlePointController.createSinglePoint,
  singlePointController.getSinglePoints,
  (req, res) => {
    return res.json({ totalPoints: res.locals.totalPoints });
  }
);

router.delete(
  "/remove",
  singlePointController.removeSinglePoint,
  singlePointController.getSinglePoints,
  (req, res) => {
    return res.json({ totalPoints: res.locals.totalPoints });
  }
);

export default router;
