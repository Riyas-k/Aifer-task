import express from "express";
import { Quiz } from "../models/Quiz";
import seedDatabase from "../scripts/seedDb";

export const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne().sort({ createdAt: -1 });
    if (!quiz) {
      seedDatabase();
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
