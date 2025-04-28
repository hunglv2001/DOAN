import React, { useState } from "react";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SlideImg1 from "../../../assets/img/home-banner/slider/slide1.jpeg";
import SlideImg2 from "../../../assets/img/home-banner/slider/slide2.jpeg";
import SlideImg3 from "../../../assets/img/home-banner/slider/slide3.jpeg";
import { ISliderDataTypes } from "../../../types/types";

const Slider: React.FC = () => {
  const SliderData: ISliderDataTypes[] = [
    { id: 1, img: "https://www.bigc.vn/files/omni-banner-31-07-2023-14-47-58/omni-november-2024-13-11-2024-14-02-52/web-home-banner-1486-x-692-go-web-1.png" },
    { id: 2, img: "https://www.bigc.vn/files/omni-banner-31-07-2023-14-47-58/omni-november-2024-13-11-2024-14-02-52/29-11-06-12-mega-year-end-sale-website-asset-1486x692-banner-web.png" },
    { id: 3, img: "https://www.bigc.vn/files/omni-banner-31-07-2023-14-47-58/omni-november-2024-13-11-2024-14-02-52/28-11-11-12-fresh-c-s-n-t-t-vi-t-banner-web.png" },
  ];

  const [tabIndex, setTabIndex] = useState<number>(1);

  const handleRightBtnClick = (): void => {
    setTabIndex(tabIndex + 1);
    if (tabIndex >= 3) setTabIndex(1);
  };

  const handleLeftBtnClick = (): void => {
    setTabIndex(tabIndex - 1);
    if (tabIndex <= 1) setTabIndex(3);
  };

  return (
    <div className="banner-slider">
      {/* ======= Slide item ======= */}
      {SliderData.map((item) => (
        <div
          key={item.id}
          className={item.id === tabIndex ? "slide-item" : "d-none"}
        >
          <Link to="/shop">
            <img
              src={item.img}
              alt="slide-img"
              style={{
                width: "876px",
                height: "415px",
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
      ))}
      {/* ======= Slider buttons ======= */}
      <div className="slider-btns">
        <button onClick={handleLeftBtnClick} className="left-btn">
          <VscChevronLeft />
        </button>
        <button onClick={handleRightBtnClick} className="right-btn">
          <VscChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
