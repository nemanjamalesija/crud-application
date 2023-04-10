import React from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useGetPeopleData } from '../hooks/useGetPeople';
import { storePersonInfo } from '../reducers/personReducer';
import EditForm from './EditForm';
import Person from './Person';

const People = () => {
  const { peopleSTATE, currentPersonID } = useGetPeopleData();

  return (
    <div className='people-container'>
      {peopleSTATE.map((person) => {
        return currentPersonID === person._id ? (
          <EditForm key={person._id} {...person} />
        ) : (
          <Person key={person._id} {...person} />
        );
      })}
    </div>
  );
};

export default People;
