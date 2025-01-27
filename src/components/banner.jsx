import React, { useRef } from "react";
import Wrapper from "./wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  return (
    <Wrapper>
      <div className="pt-[16px] flex flex-wrap items-center justify-center lg:justify-between relative select-none">
        <Swiper
          ref={swiperRef}
          navigation={false}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full max-h-[520px]  rounded-lg md:rounded-xl"
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
        >
          {[
            "/img/slider1.png",
            "/img/slider2.png",
            "/img/slider1.png",
            "/img/slider2.png",
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full  relative overflow-hidden">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="z-[888] hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-lg"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="z-[888] hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-lg"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="swiper-pagination"></div>
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #fff;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background-color: #2e45c1;
        }
      `}</style>
    </Wrapper>
  );
};

export default Banner;
