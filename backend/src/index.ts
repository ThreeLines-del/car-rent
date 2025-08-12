import express from "express";
import mongoose from "mongoose";
import { carRouter } from "../routes/car.route.js";
import cors from "cors";
import { errorHandler } from "../utils/middleware.js";
import logger from "../utils/logger.js";
import { port, mongoUri, corsOptions } from "../utils/config.js";

const app = express();

// Connect to frontend
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/", carRouter);

// Error handler
app.use(errorHandler);

// Connect to database and run server
if (!mongoUri) {
  logger.error("MONGO_URI is not defined in environment variables.");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    logger.info("connected to database");

    app.listen(port, () => {
      logger.info(`Server running at http://localhost:${port}`);
    });
  })
  .catch(() => {
    logger.error("failed to connect to database");
  });
