import React from "react";

interface QuestionNavProps {
    totalQuestions: number;
    currentQuestion: number;
    onNavigate: (index: number) => void;
    answeredQuestions: Record<number, number>;
  }
  
  export function QuestionNav({
    totalQuestions,
    currentQuestion,
    onNavigate,
    answeredQuestions,
  }: QuestionNavProps) {
    return (
      <div className="grid grid-cols-5 gap-2 mt-5">
        {Array.from({ length: totalQuestions })?.map((_, index) => {
          const isAnswered = index in answeredQuestions;
          const isCurrent = currentQuestion === index;
          
          return (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${isCurrent ? 'bg-blue-600 text-white' : 'bg-gray-200'}
                ${isAnswered && !isCurrent ? 'bg-gray-200 ' : ''}
                hover:bg-blue-100 transition-colors text-black
              `}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    );
  }