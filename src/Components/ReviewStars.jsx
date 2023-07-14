import React from 'react';
import { CiStar } from 'react-icons/ci';

const ReviewStars = () => {
  return (
    <div className='flex gap-1'>
      <CiStar className='text-yellow-500' />
      <CiStar className='text-yellow-500' />
      <CiStar className='text-yellow-500' />
      <CiStar />
      <CiStar />
    </div>
  );
};

export default ReviewStars;
