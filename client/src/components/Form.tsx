import React from 'react';

const Form = () => {
  return (
    <form>
      <div className='form-control'>
        <label>Name</label>
        <input type='text' required />
      </div>
      <div className='form-control'>
        <label>Last Name</label>
        <input type='text' required />
      </div>
      <div className='form-control'>
        <label>Age</label>
        <input type='number' required />
      </div>
      <div className='form-control'>
        <label>City</label>
        <input type='text' />
      </div>
      <div className='form-control'>
        <label>Adress</label>
        <input type='text' />
      </div>
    </form>
  );
};

export default Form;
