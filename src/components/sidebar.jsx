import React from "react";
import { Checkbox, Radio } from "antd";

const Sidebar = () => {
  return (
    <>
      <div className="hidden flex-col w-64 select-none md:flex">
        <h1 className="text-2xl">Filters</h1>
        <aside className="">
          <div className="bg-white p-4 rounded-xl mb-2">
            <h1 className="text-xl font-bold">Oyinchoq va oyinlar</h1>
            <ul className="">
              <li className="text-lg p-[4px]">Yumshoq o’yinchoqlar</li>
              <li className="text-lg p-[4px]">Moshina o’yinchoqlar</li>
              <li className="text-lg p-[4px]">Boshqotirma o’yinchoqlar</li>
              <li className="text-lg p-[4px]">lego o’yinchoqlar</li>
              <li className="text-lg p-[4px]">Yumshoq aksessuarlar</li>
            </ul>
          </div>
          <div className="flex flex-col bg-white p-4 rounded-xl mb-2">
            <h1 className="text-xl font-bold">Narx sum</h1>
            <div className="flex justify-between gap-2 mb-2 rounded-md">
              <input
                className="flex-1 w-full border border-[#00B1E5] p-[4px] outline-none rounded-lg"
                type="text"
                placeholder="123"
              />
              <input
                className="flex-1 w-full border border-[#00B1E5] p-[4px] outline-none rounded-lg"
                type="text"
                placeholder="123"
              />
            </div>
            <hr />
            <div className="mb-4 mt-2">
              <h2 className="text-lg font-bold flex justify-between items-center">
                Brends
              </h2>
              <ul className="mt-2 space-y-1">
                <li>
                  <Checkbox>Abtoys</Checkbox>
                </li>
                <li>
                  <Checkbox>All About Nature</Checkbox>
                </li>
                <li>
                  <Checkbox>Auby</Checkbox>
                </li>
                <li>
                  <Checkbox>Angel Collection</Checkbox>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold flex justify-between items-center">
                Rang
              </h2>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div> Blue
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div> Red
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>{" "}
                  Green
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>{" "}
                  Yellow
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold flex justify-between items-center">
                Jins
              </h2>
              <ul className="mt-2 space-y-1">
                <li>
                  <Radio.Group>
                    <Radio value="boy">O'g'il</Radio>
                    <Radio value="girl">Qiz</Radio>
                  </Radio.Group>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold flex justify-between items-center">
                O'yinchoq turi
              </h2>
              <ul className="mt-2 space-y-1">
                <li>
                  <Checkbox>Taxta o’yinchoqlar</Checkbox>
                </li>
                <li>
                  <Checkbox>Ro’zg’or buyumlari</Checkbox>
                </li>
                <li>
                  <Checkbox>Erkat kitoblar</Checkbox>
                </li>
                <li>
                  <Checkbox>Pultli mashinalar</Checkbox>
                </li>
                <li>
                  <Checkbox>Rivojlantiruvchi o’yinlar</Checkbox>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
