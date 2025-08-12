import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

export { port, mongoUri, corsOptions };
