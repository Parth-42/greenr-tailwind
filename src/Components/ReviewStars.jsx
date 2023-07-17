import React from 'react';
import { CiStar } from 'react-icons/ci';
import { AiFillStar } from 'react-icons/ai';

const ReviewStars = () => {
  return (
    <div className='flex gap-1'>
      <AiFillStar className='text-yellow-500' />
      <AiFillStar className='text-yellow-500' />
      <AiFillStar className='text-yellow-500' />
      <CiStar />
      <CiStar />
    </div>
  );
};

export default ReviewStars;
