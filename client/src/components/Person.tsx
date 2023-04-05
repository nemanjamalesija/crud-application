import React from 'react';
import { personType } from '../types/peopleTypes';

const Person = ({ firstName, lastName, age, city, adress, date, _id }: personType) => {
  return (
    <article className='person-article'>
      <header className='person-header'>
        <h3 className='heading-tertiary'>
          {firstName} {lastName}
        </h3>
      </header>
      <div className='person-bottom'>
        <p className='person-age'>{age}</p>
        <address>
          <p className='person-adress'>{city}</p>
          <p className='person-adress'>{adress}</p>
        </address>
        <p className='person-date'>{date}</p>
      </div>
    </article>
  );
};

export default Person;
