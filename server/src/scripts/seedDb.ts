import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Quiz } from '../models/Quiz.js';
import { sampleQuiz } from '../data/sampleQuiz.ts';

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/quiz-app');
    console.log('Connected to MongoDB');
    // Insert sample quiz
    const quiz = await Quiz.create(sampleQuiz);
    console.log('Added sample quiz with ID:', quiz._id);

    console.log('Database seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

export default seedDatabase;