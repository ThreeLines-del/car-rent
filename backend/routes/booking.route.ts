import express from "express";
import {
  addBooking,
  getAllBookings,
} from "../controllers/booking.controller.js";
import { currentUserProvider, tokenProvider } from "../utils/middleware.js";

export const bookingRouter = express.Router();

bookingRouter.post(
  "/addbooking",
  tokenProvider,
  currentUserProvider,
  addBooking
);

bookingRouter.get(
  "/allbookings",
  tokenProvider,
  currentUserProvider,
  getAllBookings
);
