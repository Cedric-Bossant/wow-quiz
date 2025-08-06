import mongoose, { Schema, Document } from 'mongoose';

interface Answer {
  question: string;
  answer: string;
}

export interface IQuizLog extends Document {
  username: string;
  answers: Answer[];
  result: string;
  createdAt: Date;
}

const QuizLogSchema = new Schema<IQuizLog>({
  username: { type: String, required: true },
  answers: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true }
    }
  ],
  result: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IQuizLog>('QuizLog', QuizLogSchema);
