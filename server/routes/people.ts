import express from 'express';
import {
  getPeopleHandler,
  postPersonHandler,
  getSinglePersonHandler,
  deletePersonHandler,
  updatePersonHandler,
} from '../handlers/peopleHandler';

const router = express.Router();

router.route('/').get(getPeopleHandler).post(postPersonHandler);
router
  .route('/:id')
  .get(getSinglePersonHandler)
  .patch(updatePersonHandler)
  .delete(deletePersonHandler);

export { router };
