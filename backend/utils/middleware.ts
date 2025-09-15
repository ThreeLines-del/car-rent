import { NextFunction, Request, Response } from "express";
import logger from "./logger.js";
import { ZodError } from "zod";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

declare module "express-serve-static-core" {
  interface Request {
    token?: string;
    user?: any;
  }
}

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

  if (error instanceof ZodError) {
    return response.status(400).json({ error: error.message });
  }

  // Default to 500 Internal Server Error
  return response.status(500).json({ error: "something went wrong" });
};

const tokenProvider = (req: Request, res: Response, next: NextFunction) => {
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"];
  let token: string | undefined;

  if (typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
    token = authHeader.slice(7).trim();
  }

  if (!token) {
    return res.status(404).json({ error: "token not found" });
  }
  req.token = token;
  next();
};

const currentUserProvider = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.token) {
    return res.status(400).json({ error: "Token not provided" });
  }
  const decodedToken = jwt.decode(req.token) as { email?: string } | null;
  if (!decodedToken || !decodedToken.email) {
    return res.status(400).json({ error: "Invalid token" });
  }

  try {
    const user = await User.findOne({ email: decodedToken.email });
    req.user = user;
  } catch (error) {
    next(error);
  }

  next();
};

export { errorHandler, tokenProvider, currentUserProvider };
