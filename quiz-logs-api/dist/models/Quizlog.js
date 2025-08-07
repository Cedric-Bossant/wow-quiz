import mongoose, { Schema } from 'mongoose';
const QuizLogSchema = new Schema({
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
export default mongoose.model('QuizLog', QuizLogSchema);
//# sourceMappingURL=Quizlog.js.map