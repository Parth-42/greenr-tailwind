import React from 'react';

const Image = (props) => {
  const { src } = props;
  return (
    <div className='h-36 w-44'>
      <img className='object-contain scale-150' src={src} />
    </div>
  );
};

export default Image;
