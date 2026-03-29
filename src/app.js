import express from 'express';
import noteRoutes from './routes/note.route.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/notes', noteRoutes);

app.use(errorMiddleware);
