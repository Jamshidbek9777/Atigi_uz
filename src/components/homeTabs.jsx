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

  const tabsData = [
    {
      bg: "/img/homeTabsBg1.jpeg",
      icon: "/img/bearTab.png",
      title: "Yumshoq o'yinchoqlar",
      color: "#00C2FC",
    },
    {
      bg: "/img/homeTabsBg2.jpeg",
      icon: "/img/bearTab.png",
      title: "Mashinalar",
      color: "#33B969",
    },
    {
      bg: "/img/homeTabsBg3.jpeg",
      icon: "/img/bearTab.png",
      title: "Pazllar",
      color: "#F72A16",
    },
    {
      bg: "/img/homeTabsBg4.jpeg",
      icon: "/img/bearTab.png",
      title: "Sport jihozlari",
      color: "#FADF12",
    },
  ];

  return (
    <Wrapper>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 md:pt-8 select-none">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className="tab group flex items-center justify-center rounded-lg md:rounded-xl h-[50px] sm:h-[150px] md:h-[300px] cursor-pointer transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage:
                !isSmallScreen && inView[index] ? `url(${tab.bg})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {isSmallScreen ? (
              <div className="flex items-center gap-2 border p-2 w-full">
                <img
                  src={tab.icon}
                  alt={tab.title}
                  className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
                />
                <h1 className="text-[14px] sm:text-[16px] text-gray-800 text-center">
                  {tab.title}
                </h1>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div
                  className="w-[40px] h-[40px] p-2 mb-2 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:translate-y-14 md:group-hover:translate-y-24"
                  style={{ backgroundColor: tab.color }}
                >
                  <img
                    src={tab.icon}
                    alt={tab.title}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-[18px] sm:text-[20px] md:text-[24px] text-white text-center transition-all duration-300 group-hover:translate-y-14 md:group-hover:translate-y-24 group-hover:opacity-80">
                  {tab.title}
                </h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default HomeTabs;
