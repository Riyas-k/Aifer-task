import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { QuizQuestion } from "./components/QuizQuestion";
import { QuestionNav } from "./components/QuestionNav";
import type { Quiz, QuizState } from "./types/quiz";
import React from "react";
import "./index.css";

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswers: {},
    showExplanation: false,
  });
  const { data: quiz, isLoading } = useQuery<Quiz>("quiz", async () => {
    const response = await axios.get((import.meta as any).env.VITE_API_URL as string || "http://localhost:3000/api/quiz/current");
    return response.data || [];
  });

  if (isLoading || !quiz) {
    return (
      <div className="min-h-screen bg-blue-500 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[quizState.currentQuestionIndex];

  const handleSelectAnswer = (answerIndex: number) => {
    setQuizState((prev) => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [prev.currentQuestionIndex]: answerIndex,
      },
    }));
  };

  const handleToggleExplanation = () => {
    setQuizState((prev) => ({
      ...prev,
      showExplanation: !prev.showExplanation,
    }));
  };

  const handleNavigate = (index: number) => {
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: index,
      showExplanation: false,
    }));
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4  ">
      <div className="w-full mx-auto bg-blue-500 rounded-lg shadow-xl p-6">
        <div className="flex bg-white p-5   text-center text-red-500 m-5 rounded-lg justify-center place-self-center">
          <h1 className="text-xl  lg:text-4xl font-bold text-center mb-5">{quiz.title}</h1>
        </div>

        <div className="flex flex-col rounded-lg lg:flex-row bg-white w-full">
            
          <div className="bg-white p-5 flex flex-col w-full lg:w-3/4">
          <h1 className="text-lg font-semibold lg:ml-52 text-center mb-5">
                Quiz Title
              </h1>
            <div className="mb-8">
              
              <QuizQuestion
                question={currentQuestion}
                selectedAnswer={
                  quizState.selectedAnswers[quizState.currentQuestionIndex]
                }
                onSelectAnswer={handleSelectAnswer}
                showExplanation={quizState.showExplanation}
                onToggleExplanation={handleToggleExplanation}
              />
            </div>

            <div className="flex justify-center items-center">
              <div className="flex space-x-4 lg:mb-2 ">
                <button
                  onClick={() =>
                    handleNavigate(quizState.currentQuestionIndex - 1)
                  }
                  disabled={quizState.currentQuestionIndex === 0}
                  className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  onClick={() =>
                    handleNavigate(quizState.currentQuestionIndex + 1)
                  }
                  disabled={
                    quizState.currentQuestionIndex === quiz.questions.length - 1
                  }
                  className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className=" items-center space-x-4 p-5 shadow-lg  m-5">
            <div className="lg:mt-5 p-2 flex flex-row justify-between">
              <span>
                Question {quizState.currentQuestionIndex + 1}/
                {quiz.questions.length}
              </span>
              <button className="text-blue-600">Need Help?</button>
            </div>
            <QuestionNav
              totalQuestions={quiz.questions.length}
              currentQuestion={quizState.currentQuestionIndex}
              onNavigate={handleNavigate}
              answeredQuestions={quizState.selectedAnswers}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
