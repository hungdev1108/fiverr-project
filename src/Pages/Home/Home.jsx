import PopularService from "Pages/Home/PopularService/PopularService";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Home.scss";
import HomeSlider from "./HomeSlider/HomeSlider";
import Marketplace from "./Marketplace/Marketplace";
import Selling from "./Selling/Selling";
import Testimonial from "./Testimonial/Testimonial";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getChiTietLoaiCongViecAction(1));
  }, []);

  return (
    <div className="Home">
      <HomeSlider />

      <div className="trusted-by container-fluid">
        <div className="container d-flex justify-content-center align-items-center">
          <span>Trusted by:</span>
          <ul className="d-flex align-items-center">
            <li>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
                alt="facebook"
              />
            </li>
            <li>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
                alt="Google"
              />
            </li>
            <li>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
                alt="NETFLIX"
              />
            </li>
            <li>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
                alt="P&G"
              />
            </li>
            <li>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
                alt="PayPal"
              />
            </li>
          </ul>
        </div>
      </div>

      <PopularService />

      <Selling />

      <Marketplace />

      <Testimonial />
    </div>
  );
}

export default Home;
