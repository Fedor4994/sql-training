import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export const addProductValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    pries: Joi.number().required(),
  });

  const validatoinResult = schema.validate(req.body);
  if (validatoinResult.error) {
    return res.status(400).json({
      message: `${validatoinResult.error}`,
    });
  }

  next();
};
