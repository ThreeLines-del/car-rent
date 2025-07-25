import express from "express";
import {
  addCar,
  getAllCars,
  getCarById,
  removeCar,
  updateCar,
} from "../controllers/car.controller.js";

export const carRouter = express.Router();

carRouter.get("/allcars", getAllCars);
carRouter.post("/addcar", addCar);
carRouter.get("/car/:id", getCarById);
carRouter.delete("/removecar", removeCar);
carRouter.put("/updatecar", updateCar);
