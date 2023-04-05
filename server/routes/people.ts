import express from 'express';
import {
  getPeopleHandler,
  postPersonHandler,
  getSinglePersonHandler,
} from '../handlers/peopleHandler';

const router = express.Router();

router.route('/').get(getPeopleHandler).post(postPersonHandler);
router.route('/:id').get(getSinglePersonHandler);

export { router };
