import React from "react";
import "./Marketplace.scss";

export default function Marketplace() {
  return (
    <div className="Marketplace container">
      <h2>Explore the marketplace</h2>

      <ul className="categories-list d-flex flex-wrap">
        <li>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
              alt="Graphics & Design"
              loading="lazy"
            />
            Graphics &amp; Design
          </div>
        </li>
        <li>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt="Digital Marketing"
              loading="lazy"
            />
            Digital Marketing
          </div>
        </li>
        <li>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
              alt="Writing & Translation"
              loading="lazy"
            />
            Writing &amp; Translation
          </div>
        </li>
        <li>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
              alt="Video & Animation"
              loading="lazy"
            />
            Video &amp; Animation
          </div>
        </li>
        <li>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
              alt="Music & Audio"
              loading="lazy"
            />
            Music &amp; Audio
          </div>
        </li>
        <li>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt="Programming & Tech"
              loading="lazy"
            />
            Programming &amp; Tech
          </div>
        </li>
        <li>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
              alt="Business"
              loading="lazy"
            />
            Business
          </div>
        </li>
        <li>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
              alt="Lifestyle"
              loading="lazy"
            />
            Lifestyle
          </div>
        </li>
        <li>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
              alt="Data"
              loading="lazy"
            />
            Data
          </div>
        </li>
      </ul>
    </div>
  );
}
