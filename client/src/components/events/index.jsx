import React from 'react';
import useFetch from '../../hooks/get';
import Button from '../button';  // Adjust the path as necessary

const Events = () => {
  const { data } = useFetch('psinous_app/api/event');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  return data && data.event ? (
    <div className="flex flex-col items-center w-full p-8 mt-20 space-y-12">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Etkinlikler</h1>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
        {data.event.map((event, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#e8e4d8] border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {event.image && (
              <img
                src={event.image}
                alt="Event"
                className="object-cover w-full h-52"
              />
            )}
            <div className="flex flex-col items-start w-full p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900 line-clamp-2">{event.title}</h2>
              <p className="text-gray-700 text-sm line-clamp-3 flex-grow">{event.description}</p>
              
              {/* Date and Location Centered on Separate Rows */}
              <div className="flex flex-col items-center text-gray-500 text-sm space-y-1">
                <p>📅 {formatDate(event.event_date)}</p>
                <p>📍 {event.location}</p>
              </div>

              <Button
                as="a"
                href={event.registration_form_link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="normal"
                className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center transition-colors duration-300"
              >
                {event.registration_form_link ? 'Register' : 'View Details'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-600">Loading events...</p>
  );
};

export default Events;
