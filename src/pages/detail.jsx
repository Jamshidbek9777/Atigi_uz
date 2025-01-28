import React, { useState } from "react";
import Wrapper from "../components/wrapper";

const DetailProduct = () => {
  const [selectedImage, setSelectedImage] = useState("/img/cart1.png");
  const [quantity, setQuantity] = useState(1);

  const images = [
    "/img/cart1.png",
    "/img/product.jpeg",
    "/img/cart1.png",
    "/img/product2.jpeg",
    "/img/detail2.jpeg",
  ];

  const colors = ["purple", "yellow", "green", "blue", "red"];

  return (
    <Wrapper>
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
          height: 1px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #c0c0c0;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: #a0a0a0;
        }

        ::-webkit-scrollbar-track {
          background-color: #f0f0f0;
        }
      `}</style>
      <div className="flex flex-col md:flex-row gap-8 mt-4 select-none">
        <div className="md:w-1/2 w-full">
          <div className="bg-[#E5F1FF] rounded-md p-4 mb-4 flex justify-center items-center">
            <img
              src={selectedImage}
              alt="Product"
              className="w-full h-[300px] md:h-[430px] object-contain rounded-md"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto max-w-full h-[100px] md:h-[140px] w-full">
            {images.map((img, index) => (
              <div
                key={index}
                className={`flex-shrink-0 p-2 rounded-md cursor-pointer transition-all duration-300 ${
                  selectedImage === img ? "border-2 border-blue-500" : "border"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-[80px] md:w-[120px] h-[80px] md:h-[120px] object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Description */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-2xl font-bold mb-2">Ford Mustang o‘yinchog‘i</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
            <span className="text-gray-500">(12 sharh)</span>
          </div>
          <p className="text-gray-600 mb-4">
            Ford Mustang o‘yinchog‘i – mashhur sport avtomobilining
            kichraytirilgan modeli bo‘lib, o‘tkir dizayni, detallarga e’tibor va
            sifatli materiallari bilan ajralib turadi.
          </p>

          {/* Price */}
          <div className="text-2xl font-bold text-green-600 mb-2">
            287 000 so‘m
          </div>
          <div className="text-gray-400 line-through mb-4">287 000 so‘m</div>

          {/* Colors */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Rangi:</h3>
            <div className="flex gap-2">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer border border-gray-300 bg-${color}-500 transition-all duration-300 hover:scale-110`}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-all"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-all"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
              Savatga
            </button>
            <button className="px-6 py-3 bg-gray-200 rounded-md hover:bg-gray-300 transition-all">
              Ulashish
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailProduct;
