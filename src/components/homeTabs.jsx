import React from "react";
import Wrapper from "./wrapper";
import { Button } from "antd";

const HomeTabs = () => {
  return (
    <Wrapper>
      <div className="flex justify-between gap-3 pt-[40px] select-none">
        <div className="flex items-center justify-center p-2 border border-gray-300 rounded-2xl h-[102px] w-full gap-4 cursor-pointer">
          <div className="p-2 rounded-[10px] bg-[#00C2FC]">
            <img src="/img/tabic1.png" alt="" />
          </div>
          <h1 className="text-[24px]">Yumshoq o'yinchoqlar</h1>
        </div>
        <div className="flex items-center justify-center p-2 border border-gray-300 rounded-2xl h-[102px] w-full gap-4 cursor-pointer">
          <div className="p-2 rounded-[10px] bg-[#00C2FC]">
            <img src="/img/tabic1.png" alt="" />
          </div>
          <h1 className="text-[24px]">Yumshoq o'yinchoqlar</h1>
        </div>
        <div className="flex items-center justify-center p-2 border border-gray-300 rounded-2xl h-[102px] w-full gap-4 cursor-pointer">
          <div className="p-2 rounded-[10px] bg-[#00C2FC]">
            <img src="/img/tabic1.png" alt="" />
          </div>
          <h1 className="text-[24px]">Yumshoq o'yinchoqlar</h1>
        </div>
        <div className="flex items-center justify-center p-2 border border-gray-300 rounded-2xl h-[102px] w-full gap-4 cursor-pointer">
          <div className="p-2 rounded-[10px] bg-[#00C2FC]">
            <img src="/img/tabic1.png" alt="" />
          </div>
          <h1 className="text-[24px]">Yumshoq o'yinchoqlar</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeTabs;
