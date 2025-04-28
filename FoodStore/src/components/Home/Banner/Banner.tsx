import React from "react";
import Slider from "./Slider";
import Img1 from "../../../assets/img/home-banner/other/img1.jpeg";
import Img2 from "../../../assets/img/home-banner/other/img2.jpeg";
import { Link } from "react-router-dom";
import { IBannerRightDataTypes } from "../../../types/types";

const Banner: React.FC = () => {
  const BannerRightData: IBannerRightDataTypes[] = [
    { id: 1, img: "https://www.bigc.vn/files/c/2024-10-01-2024-21-43-06/c425-25-11-2024-10-57-59/c425-banner-web-1486x692.jpg" },
    {
      id: 2,
      img: "https://www.bigc.vn/files/omni-banner-31-07-2023-14-47-58/omni-november-2024-13-11-2024-14-02-52/29-11-06-12-mega-year-end-sale-website-asset-1486x692-banner-web.png",
    },
  ];

  return (
    <section id="home-banner">
      <div className="container">
        <div className="home-banner-content">
          <div className="banner-slider-wrapper banner-left">
            <Slider />
          </div>
          <div className="banner-right-imgs">
            {BannerRightData.map((item) => (
              <div key={item.id} className="banner-img-wrapper">
                <Link to="/shop">
                  <img
                    src={item.img}
                    alt="banner-img"
                    style={{
                      width: "390px",
                      height: "193px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
