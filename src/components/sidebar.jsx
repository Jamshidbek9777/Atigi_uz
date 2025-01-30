import React, { useState } from "react";
import { Checkbox, Collapse, Radio, Button, Input } from "antd";
import { api } from "../services/api/api";
import { useQuery } from "@tanstack/react-query";

const { Panel } = Collapse;

const fetchData = async (endpoint) => {
  const response = await api.get(endpoint);
  console.log(response.data);

  return response.data;
};

const Sidebar = () => {
  // State for filters
  const [selectedTypes, setselectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  // Fetch
  const {
    data: brands,
    isLoading: brandsLoading,
    // error: brandsError,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: () => fetchData("/products/brands/"),
  });

  const [activePanel, setActivePanel] = useState("1");

  // Handlers for filters
  const handleTypeChange = (chekedType) => setselectedTypes(chekedType);
  const handleBrandChange = (checkedValues) => setSelectedBrands(checkedValues);
  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };
  const handleGenderChange = (e) => setSelectedGender(e.target.value);
  const handlePriceChange = (e, key) => {
    setPriceRange({ ...priceRange, [key]: e.target.value });
  };

  const applyFilters = () => {
    const filters = {
      brands: selectedBrands,
      colors: selectedColors,
      gender: selectedGender,
      price: { min: priceRange.min, max: priceRange.max },
    };
    console.log("Filters to send:", filters);
    // post api
  };

  // Function to toggle panels
  const togglePanel = (key) => {
    setActivePanel(activePanel === key ? null : key);
  };

  return (
    <div className="hidden flex-col w-64 select-none md:flex">
      <aside>
        {/* Filters Section */}
        <div className="flex flex-col bg-white p-4 rounded-xl mb-2">
          <h1 className="text-xl font-bold mb-2">Filters</h1>

          <Collapse
            defaultActiveKey={"1"}
            activeKey={activePanel}
            onChange={(key) => togglePanel(key)}
            bordered={false}
          >
            <Panel
              header={
                <div className="flex justify-between">
                  <span className="text-base">O'yinchoq turlari</span>
                </div>
              }
              key="1"
            >
              <Checkbox.Group value={selectedTypes} onChange={handleTypeChange}>
                <div className="flex flex-col gap-2 text-2xl">
                  {[
                    "Yumshoq",
                    "Moshina ",
                    "Boshqotirma ",
                    "Lego ",
                    "Aksessuarlar",
                  ].map((typeItem) => (
                    <Checkbox
                      key={typeItem}
                      value={typeItem}
                      className="mb-2 text-[16px]"
                    >
                      {typeItem}
                    </Checkbox>
                  ))}
                </div>
              </Checkbox.Group>
            </Panel>

            {/* Price Filter */}
            <Panel
              header={
                <div className="flex justify-between">
                  <span className="text-base">Narx, Sum</span>
                </div>
              }
              key="2"
            >
              <div className="flex gap-2">
                <Input
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange(e, "min")}
                />
                <Input
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange(e, "max")}
                />
              </div>
            </Panel>

            {/* Brand Filter */}
            <Panel
              header={
                <div className="flex justify-between items-center">
                  <span className="text-base">Brands</span>
                </div>
              }
              key="3"
            >
              <Checkbox.Group
                value={selectedBrands}
                onChange={handleBrandChange}
              >
                <div className="flex flex-col gap-2 text-2xl">
                  {brandsLoading ? (
                    <p>Loading brands...</p>
                  ) : brands.length > 0 ? (
                    brands.map((brand) => (
                      <Checkbox
                        key={brand.id}
                        value={brand.name}
                        className="mb-2 text-[16px]"
                      >
                        {brand.name}
                      </Checkbox>
                    ))
                  ) : (
                    <p>No brands found</p>
                  )}
                </div>
              </Checkbox.Group>
            </Panel>

            {/* Color Filter */}
            <Panel
              header={
                <div className="flex justify-between">
                  <span className="text-base">Colors</span>
                </div>
              }
              key="4"
            >
              <div className="flex flex-col gap-2">
                {["Blue", "Red", "Yellow", "Green"].map((color) => (
                  <div
                    key={color}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleColorChange(color)}
                  >
                    <div
                      className={`w-5 h-5 rounded-full`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></div>
                    {color}
                  </div>
                ))}
              </div>
            </Panel>

            {/* Gender Filter */}
            <Panel
              header={
                <div className="flex justify-between">
                  <span className="text-base">Jins</span>
                </div>
              }
              key="5"
            >
              <Radio.Group onChange={handleGenderChange} value={selectedGender}>
                <div className="flex flex-col gap-2">
                  <Radio value="boy">O'g'il</Radio>
                  <Radio value="girl">Qiz</Radio>
                </div>
              </Radio.Group>
            </Panel>
          </Collapse>

          {/* Apply Filters Button */}
          <Button type="primary" className="mt-4" onClick={applyFilters}>
            Apply Filters
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
