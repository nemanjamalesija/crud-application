import { Person } from '../models/person';
import { Request, Response } from 'express';

const getPeopleHandler = async (req: Request, res: Response) => {
  try {
    const allPeople = await Person.find();
    console.log(allPeople);

    return res.status(200).json({
      status: 'success',
      results: allPeople.length,
      data: { people: allPeople },
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      status: 'fail',
      message: 'Could not get people',
    });
  }
};

const postPersonHandler = async (req: Request, res: Response) => {
  try {
    const newPerson = await Person.create(req.body);

    return res.status(200).json({
      status: 'success',
      data: { person: newPerson },
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 'fail',
      message: 'Could not create the person',
    });
  }
};

export { getPeopleHandler, postPersonHandler };
