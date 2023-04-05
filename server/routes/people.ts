import express from 'express';
import { getPeopleHandler, postPersonHandler } from '../handlers/peopleHandler';

const router = express.Router();

router.route('/').get(getPeopleHandler).post(postPersonHandler);

export { router };
