import React from 'react';

const Button = ({ name }) => {
  return (
    <button
      className='px-4 py-2 rounded-xl text-center w-full bg-green-600 text-white hover:bg-green-800'
      type='button'
    >
      {name}
    </button>
  );
};

export default Button;
