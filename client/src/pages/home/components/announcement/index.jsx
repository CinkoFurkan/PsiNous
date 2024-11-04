import React from "react";
import useFetch from "../../../../hooks/get";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Announcement = () => {
  const { data } = useFetch("/announcement");

  return data && data.announcement ? (
    <div className="w-full relative p-6 my-32">
      <div className="relative rounded-3xl overflow-hidden p-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="swiper-wrapper"
        >
          {data.announcement.map((announcement, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="flex flex-col md:flex-row items-center h-72 gap-6 relative">
                {/* Image Section */}
                {announcement.image && (
                  <div className="flex justify-center items-center md:w-1/2 h-full rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={announcement.image}
                      alt="Announcement"
                      className="object-cover h-full w-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}

                {/* Content Section */}
                <div className="flex flex-col justify-center md:w-1/2 text-white space-y-4 p-6 bg-gradient-to-tr from-gray-900/80 via-gray-800/70 to-transparent rounded-lg shadow-lg backdrop-blur-md">
                  <h2 className="text-4xl font-semibold text-indigo-100 drop-shadow-md">
                    {announcement.title}
                  </h2>
                  <p className="text-lg font-light leading-relaxed text-gray-300">
                    {announcement.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination mt-4 flex justify-center gap-2">
          {/* Custom pagination dots */}
          <div className="swiper-pagination-bullet bg-gray-500 opacity-70 hover:opacity-100 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Announcement;
