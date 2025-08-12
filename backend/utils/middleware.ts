import { NextFunction, Request, Response } from "express";
import logger from "./logger.js";

const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  logger.error(error);

  if (error.name === "CastError") {
    return response.status(400).json({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (
    error.name === "MongoServerError" &&
    error.message.includes("E11000 duplicate key error")
  ) {
    return response
      .status(400)
      .json({ error: "expected `username` to be unique" });
  } else if (error.name === "JsonWebTokenError") {
    return response.status(401).json({ error: "token invalid" });
  } else if (error.name === "SyntaxError") {
    return response.status(400).json({ error: "missing fields" });
  }

  // Default to 500 Internal Server Error
  return response.status(500).json({ error: "something went wrong" });
};

export { errorHandler };
