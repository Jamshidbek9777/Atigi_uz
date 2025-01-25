import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper";

const HomeTabs = () => {
  const [inView, setInView] = useState([false, false, false, false]);

  const handleObserver = (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setInView((prevState) => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null, // relative to viewport
      threshold: 0.1, // trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver(handleObserver, options);
    const elements = document.querySelectorAll(".tab");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 pt-10 select-none">
        {[
          "/img/homeTabsBg1.jpeg",
          "/img/homeTabsBg2.jpeg",
          "/img/homeTabsBg3.jpeg",
          "/img/homeTabsBg4.jpeg",
        ].map((bg, index) => (
          <div
            key={index}
            className="tab flex items-center justify-center p-2 border border-gray-300 rounded-2xl h-[200px] sm:h-[250px] md:h-[300px] cursor-pointer"
            style={{
              backgroundImage: inView[index] ? `url(${bg})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-[18px] sm:text-[20px] md:text-[24px] text-white text-center">
              Yumshoq o'yinchoqlar
            </h1>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default HomeTabs;
