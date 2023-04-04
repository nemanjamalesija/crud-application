import http from 'http';
import { app } from './app';
import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config({ path: './config.env' });
const server = http.createServer(app);

const db = process?.env?.DATABASE?.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD || ''
) as string;

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

mongoose
  .connect(db, connectOptions)
  .then(() => console.log('Database connection is successful'))
  .catch((error) => {
    'There was an error when connecting to the database';
    console.log(error);
  });

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
