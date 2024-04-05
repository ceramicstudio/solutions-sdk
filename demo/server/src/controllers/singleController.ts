import { getContext } from "../utils/context.js";
import { Request, Response, NextFunction } from "express";
import {
  SinglePointReader,
  SinglePointWriter,
} from '@composexp/points';

const createSinglePoint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ceramic } = await getContext();
    const writer = new SinglePointWriter({ ceramic });
    await writer.addPointTo(req.body.recipient);
    res.locals.ceramic = ceramic;
    return next();
  } catch (error) {
    console.error(error);
    return error;
  }
};

const removeSinglePoint = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { ceramic } = await getContext();
    const reader = new SinglePointReader({
      ceramic,
      issuer: ceramic.did!.id,
    });
    const documents = await reader.queryPointDocumentsFor(req.body.recipient);
    const id = documents.documents[documents.documents.length - 1].id;
    const writer = new SinglePointWriter({ ceramic });
    await writer.removePoint(id.toString());
    return next();
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getSinglePoints = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ceramic = res.locals.ceramic ?? (await getContext()).ceramic;
    const reader = new SinglePointReader({
      ceramic,
      issuer: ceramic.did!.id,
    });
    const totalPoints = await reader.countPointsFor(req.body.recipient);
    res.locals.totalPoints = totalPoints;
    return next();
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const singlePointController = { createSinglePoint, getSinglePoints, removeSinglePoint };
