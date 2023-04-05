import express, { json } from 'express';
import cors from 'cors';
import { router as peopleRouter } from './routes/people';

const app = express();
app.use(json());
app.use(cors());

app.use('/api/people', peopleRouter);

export { app };
