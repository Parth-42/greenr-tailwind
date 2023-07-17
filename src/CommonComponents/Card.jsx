import React from 'react';
import Text from './Text';
import ReviewStars from '../Components/ReviewStars';
import Button from './Button';
import Image from './Image';
import { AiOutlineHeart } from 'react-icons/ai';

const Card = ({ name, price, imageUrl }) => {
  return (
    <div className='bg-white rounded-3xl border-2 border-gray-100 w-max px-4 py-6'>
      <div className='relative w-full flex justify-center items-center px-5 pt-6 pb-10'>
        <Image src={imageUrl} />
        <div className='flex items-center justify-center absolute top-0 right-0 rounded-md w-6 h-6 outline outline-offset-2 outline-2 outline-red-200'>
          <AiOutlineHeart className='w-5 h-5 text-red-400' />
        </div>
      </div>
      <div>
        <div className='pb-2'>
          <Text className='font-bold text-gray-600'>{name}</Text>
        </div>

        <div className='flex gap-2 items-center pb-4'>
          <ReviewStars />
          <Text className='flex items-center text-sm text-gray-400'>(85)</Text>
        </div>

        <div className='flex gap-5 justify-between'>
          <div>
            <Text className='text-xs  text-gray-400'>Price</Text>
            <Text className='font-bold text-sm'>$ {price}</Text>
          </div>

          <div>
            <Button name='Add to cart' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
