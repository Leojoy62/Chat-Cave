import { validationResult } from "express-validator";

export const runValidator = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.send({ errors: result.array() });
  }

  next();
};
