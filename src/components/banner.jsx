import React, { useRef } from "react";
import Wrapper from "./wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api/api";
import { Skeleton } from "antd";

const fetchData = async (endpoint) => {
  const response = await api.get(endpoint);
  console.log(response.data);

  return response.data;
};

const Banner = () => {
  const { data: carouseles, isFetching: carouselesLoading } = useQuery({
    queryKey: ["carouseles"],
    queryFn: () => fetchData("/products/carouseles/"),
  });

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
        {carouselesLoading ? (
          <>
            <div className="">
              <Skeleton.Image
                active
                className="h-[520px] w-full"
                style={{ border: "1px solid red", height: "520px !important" }}
              />
            </div>
          </>
        ) : (
          <>
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
              {carouseles?.map((src, index) => (
                <SwiperSlide key={src.id}>
                  <div className="w-full  relative overflow-hidden">
                    <img
                      src={src.image}
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
            <div className="swiper-pagination"></div>
          </>
        )}
      </div>
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
