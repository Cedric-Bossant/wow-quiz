import mongoose, { Document } from 'mongoose';
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
declare const _default: mongoose.Model<IQuizLog, {}, {}, {}, mongoose.Document<unknown, {}, IQuizLog, {}, {}> & IQuizLog & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Quizlog.d.ts.map