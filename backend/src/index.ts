import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { carRouter } from "../routes/car.route.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const app = express();

// Connect to frontend
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/", carRouter);

// Connect to database and run server
if (!mongoUri) {
  console.error("MONGO_URI is not defined in environment variables.");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("connected to database");

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("failed to connect to database");
  });
