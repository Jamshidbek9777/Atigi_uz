import React, { useState } from "react";
import Wrapper from "../components/wrapper";
import { Checkbox } from "antd";
import { GoTrash } from "react-icons/go";
import { RiDiscountPercentFill } from "react-icons/ri";

const products = [
  {
    id: 1,
    name: "Radio boshqariladigan Gentra avtomobili",
    img: "/img/product.jpeg",
    color: "Oq",
    oldPrice: 229000,
    newPrice: 199000,
  },
  {
    id: 2,
    name: "Nmadir",
    img: "/img/detail2.jpeg",
    color: "white",
    oldPrice: 229000,
    newPrice: 199000,
  },
  {
    id: 3,
    name: "Lego",
    img: "/img/product.jpeg",
    color: "Ko'k",
    oldPrice: 259000,
    newPrice: 219000,
  },
  {
    id: 4,
    name: "Konstruktor",
    img: "/img/detail2.jpeg",
    color: "Sariq",
    oldPrice: 189000,
    newPrice: 159000,
  },
  {
    id: 5,
    name: "Konstruktor",
    img: "/img/detail2.jpeg",
    color: "Sariq",
    oldPrice: 189000,
    newPrice: 159000,
  },
  {
    id: 6,
    name: "Konstruktor",
    img: "/img/detail2.jpeg",
    color: "Sariq",
    oldPrice: 189000,
    newPrice: 159000,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    products.map((product) => ({ ...product, quantity: 1 }))
  );

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isDelivery, setIsDelivery] = useState(false);

  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const updateQuantity = (productId, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const totalPrice = selectedProducts.reduce((total, id) => {
    const item = cartItems.find((p) => p.id === id);
    return item ? total + item.newPrice * item.quantity : total;
  }, 0);

  const deliveryFee = 30000;
  const finalPrice = isDelivery ? totalPrice + deliveryFee : totalPrice;

  const handleSubmitOrder = () => {
    const orderData = cartItems.filter((product) =>
      selectedProducts.includes(product.id)
    );
    console.log("Sending Order:", orderData);
  };

  return (
    <Wrapper>
      <div className="mb-40 md:mb-0">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 mt-10">
          Savatingiz ({cartItems.length} ta mahsulot)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8  pb-32 lg:pb-4">
          {/* Left Side - Product List */}
          <div className="w-full lg:w-2/3 overflow-auto pr-4">
            <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col gap-6 md:p-6">
              {cartItems.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-start justify-between gap-5 p-4 border-b border-gray-200 md:flex-row md:items-center"
                >
                  <div className="flex items-center gap-5 ">
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleCheckboxChange(product.id)}
                    />
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-28 h-28 object-cover rounded-lg"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {product.name}
                      </h2>
                      <p className="text-gray-600">
                        Rangi:
                        <span className="font-medium ml-1 text-gray-800">
                          {product.color}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-5 w-full md:w-auto">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="px-3 py-2 bg-gray-200 hover:bg-gray-300 transition rounded-l-lg"
                      >
                        -
                      </button>
                      <span className="px-4">{product.quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="px-3 py-2 bg-gray-200 hover:bg-gray-300 transition rounded-r-lg"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex flex-col items-end md:items-center  gap-3">
                      <div className="flex items-center gap-2 cursor-pointer select-none text-gray-600 hover:text-gray-900 transition">
                        <button className=" text-lg ">
                          <GoTrash />
                        </button>
                        <p className="text-sm">Yo'q qilish</p>
                      </div>

                      <div className=" p-2 rounded-lg text-center flex flex-col gap- md:gap-0 items-center">
                        <p className="line-through text-red-500 text-sm">
                          {product.oldPrice} sum
                        </p>
                        <p className="text-green-600 text-lg font-semibold">
                          {product.newPrice * product.quantity} sum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Order Summary (Desktop) */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg h-[300px] sticky top-20">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Buyurtmangiz
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex justify-between">
                  <span>Tanlangan mahsulot:</span>
                  <span className="font-medium">
                    {selectedProducts.length} ta
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <span>Yetkazib berish:</span>
                    <Checkbox
                      onChange={(e) => setIsDelivery(e.target.checked)}
                      checked={isDelivery}
                    />
                  </div>
                  <span className="font-medium">
                    {isDelivery ? deliveryFee.toLocaleString() : "Yo'q"}
                  </span>
                </p>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex flex-col justify-between">
                <p className="flex justify-between text-green-600 text-lg font-semibold mb-8">
                  <span>Jami:</span>
                  <span>{finalPrice.toLocaleString()} sum</span>
                </p>
                <button
                  onClick={handleSubmitOrder}
                  className={`w-full p-3 rounded-lg text-lg transition ${
                    selectedProducts.length > 0
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={selectedProducts.length === 0}
                >
                  Rasmiylashtirishga o'tish
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Order Summary */}
          <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 border-t">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700">
                  Tanlangan: {selectedProducts.length} ta
                </p>
                <p className="text-green-600 font-bold text-lg">
                  Jami: {finalPrice.toLocaleString()} sum
                </p>
              </div>
              <button
                onClick={handleSubmitOrder}
                className="bg-blue-500 text-white px-5 py-2 rounded-lg"
              >
                Rasmiylashtirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
