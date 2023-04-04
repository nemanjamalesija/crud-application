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

const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'A person must have a name'],
  },
  lastName: {
    type: String,
    required: [true, 'A person must have a last name'],
  },
  age: {
    type: Number,
    requred: [true, 'The age must be defined'],
  },
  city: String,
  adress: String,
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const Person = mongoose.model('Person', personSchema);

const testPerson = new Person({
  firstName: 'Drazen',
  lastName: 'Stosic',
  age: 25,
});

const savePerson = async () => {
  try {
    const newPerson = await testPerson.save();
    console.log(newPerson);
  } catch (error) {
    console.log(error);
  }
};

savePerson();

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
