import express from "express";
import { getQuiz } from "../controllers/quizController";

const router = express.Router();

// fetching the all quiz
router.get("/current", getQuiz);

export default router;
