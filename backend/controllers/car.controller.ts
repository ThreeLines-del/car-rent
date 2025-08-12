import { NextFunction, Request, Response } from "express";
import Car from "../models/car.model.js";

export const getAllCars = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cars = await Car.find({});

    res.send(cars);
  } catch (error) {
    next(error);
  }
};

export const addCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const car = await Car.create(req.body);
    await car.save();

    res.status(200).json({
      success: true,
      make: req.body.make,
    });
  } catch (error) {
    next(error);
  }
};

export const getCarById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const car = await Car.findOne({ _id: id });

    if (!car) {
      res.status(404).json({
        message: "car not found",
      });
    }

    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
};

export const removeCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const car = await Car.findOneAndDelete({ _id: req.body.id });

    if (!car) {
      res.status(404).json({
        message: "car not found",
      });
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, ...updates } = req.body;

    const car = await Car.findOneAndUpdate(
      { _id: id },
      updates,
      { new: true } // return the updated document
    );

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    const newCarList = await Car.find({});
    res.status(200).json(newCarList);
  } catch (error) {
    next(error);
  }
};
