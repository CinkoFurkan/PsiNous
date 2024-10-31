import React from 'react';
import useFetch from '../../hooks/get';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Announcement = () => {
  const { data } = useFetch('psinous_app/api/announcement');

  return data && data.announcement ? (
    <div className='flex flex-col items-center w-full p-6 mt-16 space-y-6'>
      <div className='grid items-center w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='flex flex-col items-start md:items-start'>
          <h1 className='text-4xl font-bold text-gray-900'>Psious Duyurular</h1>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 4000 }}
          className='relative w-full'
          style={{ maxWidth: '600px' }}
        >
          {data.announcement.map((announcement, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center bg-[#f3f0e6] rounded-md shadow-md p-4 h-96 w-72 transition-transform duration-300 hover:scale-105'>
                {announcement.image && (
                  <img
                    src={announcement.image}
                    alt='Announcement'
                    className='object-cover w-full h-48 mb-4 rounded-md shadow-sm'
                  />
                )}
                <div className='flex flex-col w-full space-y-2'>
                  <h2 className='text-lg font-medium text-gray-800 line-clamp-1'>
                    {announcement.title}
                  </h2>
                  <p className='text-sm text-gray-700 line-clamp-2'>
                    {announcement.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  ) : null;
};

export default Announcement;
