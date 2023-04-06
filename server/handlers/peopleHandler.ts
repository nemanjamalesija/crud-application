import { Person } from '../models/person';
import { Request, Response } from 'express';

const getPeopleHandler = async (req: Request, res: Response) => {
  try {
    const allPeople = await Person.find();
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

const getSinglePersonHandler = async (req: Request, res: Response) => {
  try {
    const currentPersonId = req.params.id;
    const currentPerson = await Person.findById(currentPersonId);
    return res.status(201).json({
      status: 'sucess',
      data: { person: currentPerson },
    });
  } catch (error) {
    console.log(error);
    return res.json(404).json({
      status: 'fail',
      message: 'Could not get the person',
    });
  }
};

const postPersonHandler = async (req: Request, res: Response) => {
  try {
    const newPerson = await Person.create(req.body);
    console.log(newPerson);
    return res.status(200).json({
      status: 'success',
      data: { newPerson },
    });
  } catch (error) {
    return res.json({
      status: 'fail',
      message: 'Could not create the person',
      data: { ...req.body },
    });
  }
};

const updatePersonHandler = async (req: Request, res: Response) => {
  try {
    const contentToUpdate = { ...req.body };
    const idToUpdate = req.params.id;

    const updatedPerson = await Person.findByIdAndUpdate(idToUpdate, contentToUpdate, {
      overwrite: true,
    });

    res.status(201).json({
      status: 'sucess',
      data: { updatedPerson },
    });
  } catch (error) {}
};

const deletePersonHandler = async (req: Request, res: Response) => {
  try {
    const currentPersonId = req.params.id;
    await Person.findByIdAndDelete(currentPersonId);
    res.status(200).json({
      status: 'sucess',
      message: 'Person has been deleted',
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      status: 'fail',
      message: "Couldn't delete the person",
    });
  }
};

export { getPeopleHandler, postPersonHandler, getSinglePersonHandler, deletePersonHandler, updatePersonHandler };
