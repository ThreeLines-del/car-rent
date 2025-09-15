import { NextFunction, Request, Response } from "express";
import User from "../models/user.model.js";
import { UserInputSchema, UserSchema } from "../types/schemas.js";
import bcrypt from "bcrypt";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;

  const { password, ...rest } = UserInputSchema.parse(body);
  try {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      ...rest,
      passwordHash: passwordHash,
    });
    const savedUser = await user.save();

    res.json(savedUser);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentUser = req.user;

  if (!currentUser) {
    res.status(400).json({ error: "Unauthorized" });
  }

  res.send(currentUser);
};
