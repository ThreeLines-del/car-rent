import { NextFunction, Request, Response } from "express";
import { LoginSchema } from "../types/schemas.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;

  const { email, password } = LoginSchema.parse(body);
  try {
    const user = await User.findOne({ email: email });
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: "invalid email or password",
      });
    }

    const userForToken = {
      id: user._id,
      email: user.email,
    };

    if (!process.env.SECRET) {
      throw new Error("JWT secret is not defined in environment variables");
    }

    const token = jwt.sign(userForToken, process.env.SECRET);

    res.json({
      token,
      email: user.email,
      fullName: user.fullName,
    });
  } catch (error) {
    next(error);
  }
};
