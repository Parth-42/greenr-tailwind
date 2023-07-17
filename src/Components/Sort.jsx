import React from 'react';
import Text from '../CommonComponents/Text';
import Tag from '../CommonComponents/Tag';

const Sort = () => {
  return (
    <div className='flex pt-8 justify-left items-center gap-5'>
      <Text className='text-gray-400 font-bold'>Sort</Text>
      <Tag name='Relevance' active />
      <Tag name='Popular' />
      <Tag name='New Items' />
      <Tag name='Price' />
    </div>
  );
};

export default Sort;
