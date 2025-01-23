import React from "react";
import Wrapper from "./wrapper";

const Topbar = () => {
  return (
    <div className="bg-[#394B59]  select-none">
      <Wrapper>
        <div className="flex justify-between items-center h-8">
          <div className="flex items-center">
            <h1 className="text-white cursor-pointer">info@atigi.uz</h1>
          </div>
          <div>
            <h1 className="text-white">40% off dutch sweets only today!</h1>
          </div>
          <div className="flex gap-3">
            <div className="text-white">Contact</div>
            <div className="text-white">About us</div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Topbar;
