import express from 'express';
import { getPeopleHandler } from '../handlers/peopleHandler';

const router = express.Router();

router.route('/').get(getPeopleHandler);

export { router };
