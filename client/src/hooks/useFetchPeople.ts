import axios from 'axios';
import { apiURL } from '../constants/apiURL';
import { peopleType } from '../types/peopleTypes';

const useFetchPeople = async () => {
  try {
    const response = await axios(apiURL);
    const {
      data: {
        status,
        data: { people },
      },
    } = response;

    console.log(response);
    return people as peopleType;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default useFetchPeople;
