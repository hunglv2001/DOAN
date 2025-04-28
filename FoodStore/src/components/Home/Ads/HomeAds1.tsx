import React from "react";
import ChairsImg from "../../../assets/img/home-ads/chairs.jpeg";
import ChargerImg from "../../../assets/img/home-ads/charger.jpeg";
import SpeakerImg from "../../../assets/img/home-ads/speaker.jpeg";
import { Link } from "react-router-dom";
import { IAdsData1 } from "../../../types/types";

const HomeAds1: React.FC = () => {
  const AdsData1: IAdsData1[] = [
    { id: 1, img: "https://cooponline.vn/wp-content/uploads/ads/topleft/1732874362-dau-an-2000-x-670.jpg" },
    { id: 2, img: "https://cooponline.vn/wp-content/uploads/ads/topleft/1732875042-moi-2000-x-670.jpg" },
    { id: 3, img: "https://www.bigc.vn/files/omni-banner-31-07-2023-14-47-58/omni-november-2024-13-11-2024-14-02-52/29-11-06-12-mega-year-end-sale-website-asset-1486x692-banner-web.png" },
  ];

  return (
    <section id="ads-1">
      <div className="container">
        <div className="row">
          {AdsData1.map((item) => (
            <div key={item.id} className="col-lg-4">
              <div className="ads-img">
                <Link to="/shop">
                  <img
                    src={item.img}
                    alt="ads-img"
                    style={{
                      width: "416px",
                      height: "224px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAds1;
