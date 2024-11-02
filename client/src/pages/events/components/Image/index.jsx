import React from 'react';

const Image = ({ event }) => {
  return (
    <img src={event.image} alt='Event' className='object-cover w-full h-52' />
  );
};

export default Image;