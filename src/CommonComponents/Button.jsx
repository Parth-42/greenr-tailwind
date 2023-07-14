import React from 'react';

const Button = ({ name }) => {
  return (
    <input
      className='px-4 py-2 rounded-xl text-center w-full bg-green-600 text-white'
      type='button'
      value={name}
    />
  );
};

export default Button;
