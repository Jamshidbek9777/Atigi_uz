import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper";

const HomeTabs = () => {
  const [inView, setInView] = useState([false, false, false, false]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 640px)").matches);
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 md:pt-8 select-none">
        {[
          "/img/homeTabsBg1.jpeg",
          "/img/homeTabsBg2.jpeg",
          "/img/homeTabsBg3.jpeg",
          "/img/homeTabsBg4.jpeg",
        ].map((bg, index) => (
          <div
            key={index}
            className="tab flex items-center justify-center   rounded-lg md:rounded-xl h-[50px] sm:h-[150px] md:h-[300px] cursor-pointer"
            style={{
              backgroundImage:
                !isSmallScreen && inView[index] ? `url(${bg})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {isSmallScreen ? (
              <div className="flex items-center gap-2">
                <span className="text-[24px] sm:text-[32px] md:text-[40px]">
                  🎁
                </span>{" "}
                {/* Replace with your icon */}
                <h1 className="text-[14px] sm:text-[16px] text-gray-800 text-center">
                  Yumshoq o'yinchoqlar
                </h1>
              </div>
            ) : (
              <h1 className="text-[18px] sm:text-[20px] md:text-[24px] text-white text-center">
                Yumshoq o'yinchoqlar
              </h1>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default HomeTabs;
