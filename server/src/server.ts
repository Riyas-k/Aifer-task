import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Quiz } from "./models/Quiz.ts";
import seedDatabase from "./scripts/seedDb.ts";
import quizRouter from "./routes/quiz.ts";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/quiz-app")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/quiz", quizRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
