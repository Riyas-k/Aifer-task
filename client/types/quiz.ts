export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }
  
  export interface Quiz {
    id: string;
    title: string;
    questions: Question[];
  }
  
  export interface QuizState {
    currentQuestionIndex: number;
    selectedAnswers: Record<number, number>;
    showExplanation: boolean;
  }