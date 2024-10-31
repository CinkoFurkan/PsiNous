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
    <div className="flex flex-col items-center w-full p-6 mt-16 space-y-6">
      <h1 className="mb-6 text-3xl font-semibold text-gray-900">Duyurular</h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="w-4/5 max-w-lg relative"
      >
        {data.announcement.map((announcement, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center bg-[#f3f0e6] rounded-md shadow-md p-4 h-56 transition-transform duration-300 hover:scale-105">
              {announcement.image && (
                <img
                  src={announcement.image}
                  alt="Announcement"
                  className="w-1/4 h-40 object-cover mr-4 rounded-md shadow-sm"
                />
              )}
              <div className="flex flex-col w-3/4 space-y-2">
                <h2 className="text-lg font-medium text-gray-800 line-clamp-1">
                  {announcement.title}
                </h2>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {announcement.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Override styles for both enabled and disabled arrow states */}
        <div className="swiper-button-prev -translate-x-10 !text-[#bc090b] swiper-button-disabled:!text-[#bc090b]"></div>
        <div className="swiper-button-next translate-x-10 !text-[#bc090b] swiper-button-disabled:!text-[#bc090b]"></div>
      </Swiper>
    </div>
  ) : null;
};

export default Announcement;
