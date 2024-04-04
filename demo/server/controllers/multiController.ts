import { getContext } from "../utils/context.js";
import { Request, Response, NextFunction } from "express";
import {
  PointsWriter,
  PointsReader,
} from "../../../libraries/points/dist/index.js";

const getPoints = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ceramic } = await getContext();
    const reader = new PointsReader({ ceramic, issuer: ceramic.did!.id });
    const totalPoints = await reader.queryAllocationDocumentsFor(
      req.body.recipient
    );
    const sumPoints = totalPoints.documents.reduce(
      (acc, doc) => acc + (doc.content?.points || 0),
      0
    );

    res.locals = { totalPoints: sumPoints };
    return next();
  } catch (error) {
    console.error(error);
    return error;
  }
};

const createPoints = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ceramic } = await getContext();
    console.log(ceramic);
    const writer = new PointsWriter({ ceramic });
    await writer.allocatePointsTo(req.body.recipient, req.body.amount);

    const reader = new PointsReader({ ceramic, issuer: ceramic.did!.id });
    const totalPoints = await reader.queryAllocationDocumentsFor(
      req.body.recipient
    );
    const sumPoints = totalPoints.documents.reduce(
      (acc, doc) => acc + (doc.content?.points || 0),
      0
    );

    res.locals = { ceramic, totalPoints: sumPoints, writer };
    return next();
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getAggregation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ceramic, aggregationModelID } = await getContext();
    const reader = new PointsReader({ ceramic, issuer: ceramic.did!.id, aggregationModelID });
    const document = await reader.loadAggregationDocumentFor([req.body.recipient, req.body.context]);
    res.locals.document = document || {};
    res.locals.aggregation = document?.content?.points || 0;
    return next();
  } catch (error) {
    console.error(error);
    return error;
  }
};

const updateAggregation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
try {
    const { ceramic, aggregationModelID } = await getContext();
    const writer = new PointsWriter({ ceramic, aggregationModelID });
    const {context, recipient, amount} = req.body;
    const aggregation = await writer.setPointsAggregationFor(
        [{recipient}, {context}],
        amount
    );
    res.locals.aggregation = aggregation.content?.points;
    res.locals.document = aggregation;
    return next();
} catch (error) {
    console.error(error);
    return error;
}
};

export const multiplePointsController = {
  createPoints,
  updateAggregation,
  getAggregation,
  getPoints,
};
