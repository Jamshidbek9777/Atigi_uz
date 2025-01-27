import React, { useState } from "react";
import Wrapper from "../components/wrapper";

const Cart = () => {
  const [selectedImage, setSelectedImage] = useState("/img/cart1.png");
  const [quantity, setQuantity] = useState(1);

  const images = [
    "/img/cart1.png",
    "/img/product.jpeg",
    "/img/cart1.png",
    "/img/product.jpeg",
  ];

  const colors = ["purple", "yellow", "green", "blue", "red"];

  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        {/* Product Images */}
        <div className="md:w-1/2">
          {/* Main Product Image */}
          <div className="bg-[#E5F1FF] rounded-md p-4 mb-4 flex justify-center">
            <img
              src={selectedImage}
              alt="Product"
              className=" max-h-[430px] rounded-md"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto max-w-full md:max-w-[600px]">
            {images.map((img, index) => (
              <div key={index} className="flex-shrink-0 bg-red-500 p-2">
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-[120px] h-[120px] md:w-[180px] md:h-[140px] rounded-md cursor-pointer ${
                    selectedImage === img
                      ? "border-2 border-blue-500"
                      : "border"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Description */}
        <div className="md:w-1/2">
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
                  className={`w-8 h-8 rounded-full cursor-pointer border bg-${color}-500`}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              className="px-4 py-2 bg-gray-200 rounded-md"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Savatga
            </button>
            <button className="px-6 py-3 bg-gray-200 rounded-md hover:bg-gray-300">
              Ulashish
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
