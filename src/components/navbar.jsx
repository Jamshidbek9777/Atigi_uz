import React from "react";
import Wrapper from "./wrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircle, IoSearch } from "react-icons/io5";
import { PiGlobeSimpleBold } from "react-icons/pi";
import { IoMdCart } from "react-icons/io";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = [
    {
      key: 1,
      label: (
        <Link className="text-red-500" to={"/"}>
          Chegirmadagi mahsulotlar
        </Link>
      ),
    },
    { key: 2, label: <Link to={"/"}>Chegirmadagi mahsulotlar</Link> },
    { key: 3, label: <Link to={"/"}>Chegirmadagi mahsulotlar</Link> },
    { key: 4, label: <Link to={"/"}>Chegirmadagi mahsulotlar</Link> },
    { key: 5, label: <Link to={"/"}>Chegirmadagi mahsulotlar</Link> },
    { key: 6, label: <Link to={"/"}>Chegirmadagi mahsulotlar</Link> },
    { key: 7, label: <Link to={"/"}>Chegirmadagi mahsulotlar</Link> },
    { key: 8, label: <Link to={"/"}>Chegirmadagi mahsulotlar</Link> },
  ];
  return (
    <div className="bg-[#E6F9FF] h-[97px] flex items-center select-none">
      <Wrapper>
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex gap-[40px] justify-center items-center">
            <div className="flex items-center gap-2">
              <img className="w-[70px]" src="/img/logo2.png" alt="ATIGI logo" />
              <h1
                className="text-[24px] text-[#3F2997]"
                style={{ fontFamily: "'Seymour One', serif" }}
              >
                Atigi uz
              </h1>
            </div>

            <div
              className="px-4 h-[44px] bg-white  hover:bg-[#B0ECFE] transition-all ease-in-out  rounded-[10px] cursor-pointer flex items-center gap-2 select-none"
              style={{
                boxShadow: "0 0px 4px 0px rgba(61, 42, 153, 0.3)",
              }}
            >
              <Dropdown
                placement="bottomCenter"
                trigger={["hover"]}
                menu={{
                  items,
                }}
              >
                <div className="flex items-center gap-4">
                  <GiHamburgerMenu color="#3D2A99" size={22} />
                  <h1 className="text-[20px] text-[#3D2A99]">Katalog</h1>
                </div>
              </Dropdown>
            </div>
          </div>

          <div className="flex-grow mx-4 justify-center flex">
            <div className="relative w-[690px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 h-[44px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 "
                style={{
                  boxShadow: "0 0px 4px 0px rgba(61, 42, 153, 0.3)",
                }}
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <IoSearch />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[38px]">
            <div className="flex items-center gap-[2px] cursor-pointer hover:bg-[#B0ECFE] p-2 rounded-[10px] transition-all ease-in-out">
              <PiGlobeSimpleBold size={25} color="#3D2A99" />
              <h1 className="text-[#3D2A99] text-xl">Uzbek</h1>
            </div>
            <div className="flex items-center gap-[2px] cursor-pointer hover:bg-[#B0ECFE] p-2 rounded-[10px] transition-all ease-in-out">
              <IoMdCart size={25} color="#3D2A99" />
              <h1 className="text-[#3D2A99] text-xl">Cart</h1>
            </div>
            <div className="flex items-center gap-[2px] cursor-pointer hover:bg-[#B0ECFE] p-2 rounded-[10px] transition-all ease-in-out">
              <IoPersonCircle size={25} color="#3D2A99" />
              <h1 className="text-[#3D2A99] text-xl">Login</h1>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
