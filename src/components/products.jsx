import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { HiShoppingCart } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TbFilter } from "react-icons/tb";
import { api } from "../services/api/api";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (endpoint) => {
  const response = await api.get(endpoint);
  console.log(response.data);

  return response.data;
};

const ProductsGrid = () => {
  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchData("/products/products/"),
  });

  return (
    <main>
      <div className="flex justify-between pb-4">
        <h2 className="font-bold text-xl mb-2">Top mahsulotlar</h2>
        <div>
          <TbFilter size={30} />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-2 flex flex-col justify-between"
          >
            <div className="overflow-hidden rounded-lg relative group card-container">
              <a href="/detail">
                <Swiper
                  modules={[Navigation, Pagination]}
                  loop={true}
                  slidesPerView={1}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  navigation={{
                    prevEl: `.custom-prev-${product.id}`,
                    nextEl: `.custom-next-${product.id}`,
                  }}
                  pagination={{
                    el: `.swiper-pagination-${product.id}`,
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `
                      <span class="${className} custom-pagination-line"></span>
                    `;
                    },
                  }}
                  className="product-carousel card-container"
                >
                  {product.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img.image}
                        alt={`${product.name} - ${index}`}
                        className="object-cover w-full h-[234px] transition-transform duration-300 hover:scale-105"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </a>

              <div className="absolute z-50 top-1/2 left-0 right-0 flex justify-between px-1 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className={`custom-prev-${product.id} text-white bg-white p-2 rounded-full opacity-70 hover:opacity-100`}
                >
                  <FaArrowLeft color="black" />
                </button>
                <button
                  className={`custom-next-${product.id} text-white bg-white p-2 rounded-full opacity-709 hover:opacity-100`}
                >
                  <FaArrowRight color="black" />
                </button>
              </div>

              <div
                className={`swiper-pagination-${product.id} swiper-pagination-custom`}
              ></div>
            </div>

            <h3 className="text-base line-clamp-2 mt-4">{product.name}</h3>

            <div className="flex items-center justify-between mt-4">
              <p className="text-red-500 line-through">
                {product.oldPrice} sum
              </p>
              <p className="text-green-600 font-bold">{product.price} sum</p>
            </div>

            <div className="flex bg-blue-500 justify-center gap-4 items-center  px-4 py-2 cursor-pointer rounded-xl hover:bg-blue-600 transition">
              <HiShoppingCart color="white" />
              <button className="text-white ">Savatga</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: black;
          width: 100%;
          height: 3px;
          border-radius: 0;
          opacity: 0;
          margin: 0 5px;
          transition: opacity 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: #0556ff;
          height: 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-container:hover .swiper-pagination-bullet {
          opacity: 0.5;
        }

        .card-container:hover .swiper-pagination-bullet-active {
          opacity: 1;
        }

        .swiper-pagination-custom {
          display: flex;
          justify-content: center;
          margin-top: 2px;
        }
      `}</style>
    </main>
  );
};

export default ProductsGrid;
