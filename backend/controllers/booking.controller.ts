import { NextFunction, Request, Response } from "express";
import { BookingInputSchema } from "../types/schemas.js";
import Booking from "../models/booking.model.js";
import User from "../models/user.model.js";
import Car from "../models/car.model.js";

export const addBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  const currentUser = req.user;

  if (!currentUser) {
    res.status(400).json({ error: "Unauthorized" });
  }

  const obj = {
    ...body,
    userId: currentUser._id.toString(),
  };

  const parsed = BookingInputSchema.parse(obj);
  try {
    const booking = new Booking(parsed);
    const savedBooking = await booking.save();
    //add booking to "bookings" in current user and add 1 to numBookings of car
    const user = await User.findOne({ email: currentUser.email });
    const car = await Car.findById(savedBooking.carId);

    user?.bookings.push(savedBooking._id);
    if (car) {
      car.numBookings = (car.numBookings ?? 0) + 1;
    }

    car?.save();
    user?.save();

    res.json(savedBooking);
  } catch (error) {
    next(error);
  }
};

export const getAllBookings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const currentUser = req.user;

    if (!currentUser) {
      res.status(400).json({ error: "Unauthorized" });
    }

    const bookings = await Booking.find({ userId: currentUser._id });

    res.json(bookings);
  } catch (error) {
    next(error);
  }
};
