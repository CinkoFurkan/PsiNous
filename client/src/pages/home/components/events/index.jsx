import React from 'react';
import useFetch from '../../../../hooks/get';
import Button from '../../../../components/button';
import Image from './components/image';
import Info from './components/info';

const Events = () => {
  const { data } = useFetch('/event');

  return data && data.event ? (
    <div className='flex flex-col items-center w-full p-8 mt-20 space-y-12'>
      <h1 className='mb-8 text-4xl font-bold text-black'>Etkinlikler</h1>

      <div className='grid w-full max-w-6xl grid-cols-3 gap-10 px-4'>
        {data.event.map((event, index) => {
          return (
            <div
              key={index}
              className='flex flex-col items-center bg-[#e8e4d8] border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-all duration-300'
            >
              {event.image && <Image event={event} />}
              <div className='flex flex-col items-center w-full p-6 space-y-3'>
                <Info event={event} />

                <Button
                  as='a'
                  href={event.registration_form_link || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  variant='primary'
                  size='normal'
                >
                  {event.registration_form_link ? 'Register' : 'Kayıt Ol'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <p className='text-center text-gray-600'>Loading events...</p>
  );
};

export default Events;
