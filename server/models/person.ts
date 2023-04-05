import mongoose from 'mongoose';

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
    default: new Date().toISOString(),
  },
});

export const Person = mongoose.model('Person', personSchema);
