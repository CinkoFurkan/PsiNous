import React from 'react';
import useFetch from '../../hooks/get';
import Button from '../button'; // Adjust the path as necessary

const Events = () => {
  const { data } = useFetch('psinous_app/api/event');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  return data && data.event ? (
    <div className='flex flex-col items-center w-full p-8 mt-20 space-y-12'>
      <h1 className='mb-8 text-4xl font-bold text-gray-900'>Etkinlikler</h1>

      <div className='grid w-full max-w-6xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-0'>
        {data.event.map((event, index) => {
          const { date, time } = formatDate(event.event_date);
          return (
            <div
              key={index}
              className='flex flex-col items-center bg-[#e8e4d8] border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-all duration-300'
            >
              {event.image && (
                <img
                  src={event.image}
                  alt='Event'
                  className='object-cover w-full h-52'
                />
              )}
              <div className='flex flex-col items-center w-full p-6 space-y-3'>
                <h2 className='text-2xl font-semibold text-gray-900 line-clamp-1'>
                  {event.title}
                </h2>

                <p className='flex-grow h-16 overflow-hidden text-sm text-gray-700 line-clamp-3'>
                  {event.description}
                </p>

                <div className='flex flex-col items-center space-y-1 text-sm text-gray-500'>
                  <p>📍 {event.location}</p>
                  <p>📅 {date}</p>
                  <p>⏰ {time}</p>
                </div>

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
