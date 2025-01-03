import { useState } from "react";
import { cn } from "../utils/cn";
import type { Question } from "../types/quiz";
import React from "react";

interface QuizQuestionProps {
  question: Question;
  selectedAnswer?: number;
  onSelectAnswer: (index: number) => void;
  showExplanation: boolean;
  onToggleExplanation: () => void;
}

export function QuizQuestion({
  question,
  selectedAnswer,
  onSelectAnswer,
  showExplanation,
  onToggleExplanation,
}: QuizQuestionProps) {
  const getOptionStyle = (index: number) => {
    if (!showExplanation && selectedAnswer === index) {
      return "bg-blue-500 text-white";
    }
    if (showExplanation) {
      if (index === question.correctAnswer) {
        return "bg-green-500 text-white";
      }
      if (selectedAnswer === index && index !== question.correctAnswer) {
        return "bg-red-500 text-white";
      }
    }
    return "bg-white hover:bg-gray-50";
  };

  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">{question.text}</p>

      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={cn(
              "w-full p-4 text-left rounded-lg shadow transition-colors",
              getOptionStyle(index)
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-4 shadow-md p-3">
        <button
          onClick={onToggleExplanation}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Explanation
        </button>
        {showExplanation && (
          <p className="mt-2 text-gray-600">{question.explanation}</p>
        )}
      </div>
    </div>
  );
}
