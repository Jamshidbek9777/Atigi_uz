import Wrapper from "./wrapper";

const ProductsGrid = () => {
  const products = [
    {
      id: 1,
      name: "Mashina",
      price: 199000,
      oldPrice: 229000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    {
      id: 2,
      name: "Lego",
      price: 150000,
      oldPrice: 180000,
      img: "/img/product.jpeg",
    },
    // Add more products here...
  ];

  return (
    <main>
      <h2 className="font-bold text-lg mb-4">Top mahsulotlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.name}
              className="object-cover rounded-lg mb-4 max-h-[234px]"
            />

            {/* Product Title */}
            <h3 className="text-sm font-medium">{product.name}</h3>

            {/* Price Details */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-red-500 line-through">
                {product.oldPrice} sum
              </p>
              <p className="text-green-600 font-bold">{product.price} sum</p>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
              Savatga
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductsGrid;
