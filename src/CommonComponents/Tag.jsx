import React from 'react';
import Text from '../CommonComponents/Text';

const Tag = ({ name, active = false }) => {
  return (
    <button
      className={`flex items-center justify-center h-8 w-max px-4 py-2 rounded-xl  ${
        active
          ? 'bg-green-600 text-white'
          : 'bg-green outline outline-2 outline-gray-100 text-gray-600'
      }`}
      type='button'
    >
      <Text className='text-sm'>{name}</Text>
    </button>
  );
};

export default Tag;
