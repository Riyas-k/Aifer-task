Aifer Machine Test Project

This project demonstrates a full-stack application built with React, Express, TypeScript, and MongoDB Atlas. The application focuses on a quiz system where users can navigate through questions, select answers, and view explanations.

Features

Frontend: React with TypeScript and Tailwind CSS for responsive UI.

Backend: Express with TypeScript for building REST APIs.

Database: MongoDB Atlas for storing quiz data.

State Management: React hooks (useState) and react-query for data fetching and caching.

Responsiveness: Fully responsive design for mobile, tablet, and desktop screens.

Tech Stack

Frontend

React

TypeScript

Tailwind CSS

React Query

Backend

Express

TypeScript

Axios

Database

MongoDB Atlas

Prerequisites

Node.js (v16 or higher)

npm or yarn

MongoDB Atlas account

A modern browser for frontend testing

Installation

1. Clone the Repository

git clone https://github.com/Riyas-k/Aifer-task.git
cd machine-test

2. Set Up Environment Variables

Create .env files in both the frontend and backend directories with the following variables:

Backend .env:

PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string

Frontend .env:

VITE_API_URL=http://localhost:5173

3. Install Dependencies

Backend:

cd server
npm install

Frontend:

cd client
npm install

Running the Application

1. Start the Backend Server

cd backend
npm run dev

2. Start the Frontend Server

cd client
npm run dev

The application should now be running at http://localhost:3000.

Folder Structure

Backend

backend/
├── src/
│   ├── app.ts
│   ├── routes/
│   │   └── quizRoutes.ts
│   ├── models/
│   │   └── Quiz.ts
│   └── controllers/
│       └── quizController.ts
├── package.json
└── tsconfig.json

Frontend

frontend/
├── src/
│   ├── components/
│   │   ├── QuizQuestion.tsx
│   │   └── QuestionNav.tsx
│   ├── types/
│   │   └── quiz.ts
│   └── App.tsx
├── public/
│   └── index.html
├── package.json
└── vite.config.ts

API Endpoints

GET /api/quiz/current

Fetch the current quiz questions and metadata.

Response Example:

{
  "title": "Sample Quiz",
  "questions": [
    {
      "question": "What is React?",
      "options": ["Library", "Framework", "Language", "Tool"],
      "correctAnswer": 0,
      "explanation": "React is a JavaScript library for building user interfaces."
    }
  ]
}
