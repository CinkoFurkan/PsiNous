import React from 'react';
import useFetch from '../../hooks/get';

const Events = () => {
  const { data } = useFetch('psinous_app/api/event');

  console.log(data);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  return data && data.event ? (
    <div className='flex flex-col items-center w-full p-8 mt-20 space-y-8'>
      <h1 className='mb-8 text-4xl font-bold'>Etkinlikler</h1>

      <div className='grid w-5/6 max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {data.event.map((event, index) => (
          <div
            key={index}
            className='flex flex-col items-center bg-[#f3f0e6] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105'
          >
            {event.image && (
              <img
                src={event.image}
                alt='Event Image'
                className='object-cover w-full h-48'
              />
            )}
            <div className='flex flex-col items-start w-full p-6 space-y-2'>
              <h2 className='text-lg font-semibold text-gray-800'>{event.title}</h2>
              <p className='text-gray-700'>{event.description}</p>
              <p className='text-gray-600'>
                {formatDate(event.event_date)} | {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Events;
