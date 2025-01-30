import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";

const fakeProducts = [
  { id: 1, name: "Toy Car" },
  { id: 2, name: "Doll House" },
  { id: 3, name: "Lego Set" },
  { id: 4, name: "Remote Control Truck" },
  { id: 5, name: "Action Figure" },
  { id: 6, name: "Puzzle Game" },
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const results = fakeProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
    setShowSuggestions(results.length > 0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex w-full justify-center relative" ref={inputRef}>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for toys..."
          className="w-full px-4 h-[44px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            boxShadow: "0 0px 4px 0px rgba(61, 42, 153, 0.3)",
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(filteredProducts.length > 0)}
        />
        <div className="absolute inset-y-0 right-3 flex items-center">
          <IoSearch />
        </div>

        {showSuggestions && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-md z-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setQuery(product.name)}
              >
                {product.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
