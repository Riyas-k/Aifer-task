import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import quizRouter from "./routes/quiz.ts";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

//config env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Protect Http Headers
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

//for handling the brute force attacks
app.use("/api/quiz", limiter);

//routes
app.use("/api/quiz", quizRouter);

//connect db
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/quiz-app")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

export default app;
