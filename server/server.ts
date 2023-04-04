import http from 'http';
import { app } from './app';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
