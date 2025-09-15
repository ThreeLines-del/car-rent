import express from "express";
import { createUser, getUser } from "../controllers/user.controller.js";
import { currentUserProvider, tokenProvider } from "../utils/middleware.js";

export const userRouter = express.Router();

userRouter.post("/user", createUser);
userRouter.get("/user", tokenProvider, currentUserProvider, getUser);
