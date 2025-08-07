import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Quizlog from './models/Quizlog.js';


console.log("✅ quiz-logs-api démarré");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/quiz-logs')
  .then(() => console.log('MongoDB connecté'))
  .catch((err: any) => console.error('Connexion échouée :', err));

app.post('/logs', async (req, res) => {
  try {
    const newLog = new Quizlog(req.body);
    await newLog.save();
    res.status(201).json({ message: 'Log enregistré' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});
app.get('/logs', async (_req, res) => {
  try {
    const logs = await Quizlog.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (err: any) {
    res.status(500).json({ error: 'Erreur lors de la récupération des logs' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur prêt sur http://localhost:${PORT}`);
});
