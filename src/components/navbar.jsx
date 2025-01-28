import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircle, IoSearch } from "react-icons/io5";
import { PiGlobeSimpleBold } from "react-icons/pi";
import { IoMdCart } from "react-icons/io";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { TiThListOutline } from "react-icons/ti";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
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
  const menuItems = [
    {
      key: "navbar1",
      label: (
        <div className="flex gap-4 items-center">
          <TiThListOutline size={20} />
          Katalog
        </div>
      ),
      children: [
        {
          key: "navbar5",
          label: <Link to="/eduModels">Chegirmadagi mahsulotlar</Link>,
        },
        {
          key: "navbar7",
          label: <Link to="/education-design">Chegirmadagi mahsulotlar</Link>,
        },
        {
          key: "navbar8",
          label: <Link to="/education-design">Chegirmadagi mahsulotlar</Link>,
        },
        {
          key: "navbar9",
          label: <Link to="/education-design">Chegirmadagi mahsulotlar</Link>,
        },
      ],
    },
    {
      key: "navbar2",
      label: "ss",
      children: [
        {
          key: "",
          label: <Link to="/eduModels">salom</Link>,
        },
      ],
    },
    {
      key: "navbar3",
      label: <Link className="flex gap-2 items-center">Cart</Link>,
    },
  ];

  return (
    <div className="bg-[#E6F9FF] h-[97px] flex items-center select-none">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div
            className={`burger ${isMenuOpen ? "open" : ""} block md:hidden`}
            onClick={toggleMenu}
          >
            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41]"></div>
            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41]"></div>
            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41]"></div>
          </div>

          {/* Logo and Title */}
          <div className="flex gap-[40px] justify-center items-center">
            <a href="/">
              <div className="flex items-center gap-2">
                <img
                  className="w-[70px]"
                  src="/img/logo2.png"
                  alt="ATIGI logo"
                />
                <h1
                  className="text-[24px] text-[#3F2997] "
                  style={{ fontFamily: "'Seymour One', serif" }}
                >
                  Atigi uz
                </h1>
              </div>
            </a>

            <div
              className="md:flex px-4 h-[44px] bg-white  hover:bg-[#B0ECFE] transition-all ease-in-out  rounded-[10px] cursor-pointer hidden items-center gap-2 select-none"
              style={{
                boxShadow: "0 0px 4px 0px rgba(61, 42, 153, 0.3)",
              }}
            >
              <Dropdown
                placement="bottom"
                trigger={["click"]}
                menu={{
                  items,
                }}
              >
                <div className="flex items-center gap-4">
                  <GiHamburgerMenu color="#3D2A99" size={22} />
                  <h1 className="text-[20px] text-[#3D2A99] hidden lg:flex">
                    Katalog
                  </h1>
                </div>
              </Dropdown>
            </div>
          </div>

          <div className=" hidden md:flex-grow mx-4 justify-center  md:flex">
            <div className="relative w-full max-w-[650px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 h-[44px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500  "
                style={{
                  boxShadow: "0 0px 4px 0px rgba(61, 42, 153, 0.3)",
                }}
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <IoSearch />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-[2px] cursor-pointer hover:bg-[#B0ECFE] p-2 rounded-[10px] transition-all ease-in-out">
              <PiGlobeSimpleBold size={30} color="#3D2A99" />
              <h1 className="text-[#3D2A99] text-xl hidden xl:flex">Uzbek</h1>
            </div>
            <a href="/cart">
              <div className=" hidden md:flex items-center gap-[2px] cursor-pointer hover:bg-[#B0ECFE] p-2 rounded-[10px] transition-all ease-in-out">
                <IoMdCart size={30} color="#3D2A99" />
                <h1 className="text-[#3D2A99] text-xl hidden xl:flex">Cart</h1>
              </div>
            </a>
            <div className="flex items-center gap-[2px] cursor-pointer hover:bg-[#B0ECFE] p-2 rounded-[10px] transition-all ease-in-out">
              <IoPersonCircle size={30} color="#3D2A99" />
              <h1 className="text-[#3D2A99] text-xl hidden xl:flex">Login</h1>
            </div>
          </div>
        </div>

        {/* Hamburger */}
        <div
          className={`menu duration-300 h-full bg-white fixed inset-0 z-[999] pt-8 px-5 pb-6 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile drawer */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img className="w-[70px]" src="/img/logo2.png" alt="ATIGI logo" />
              <h1
                className="text-[24px] text-[#3F2997] "
                style={{ fontFamily: "'Seymour One', serif" }}
              >
                Atigi uz
              </h1>
            </div>
            <div
              onClick={toggleMenu}
              className="cursor-pointer text-lg font-bold"
            >
              ✖
            </div>
          </div>
          <Menu
            mode="inline"
            items={menuItems}
            className="text-base"
            onClick={toggleMenu}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
