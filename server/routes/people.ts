import express from 'express';
import {
  getPeopleHandler,
  postPersonHandler,
  getSinglePersonHandler,
  deletePersonHandler,
} from '../handlers/peopleHandler';

const router = express.Router();

router.route('/').get(getPeopleHandler).post(postPersonHandler);
router.route('/:id').get(getSinglePersonHandler).delete(deletePersonHandler);

export { router };
