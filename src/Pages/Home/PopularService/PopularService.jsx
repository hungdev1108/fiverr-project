import React from "react";
import Slider from "react-slick";
import "./PopularService.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function PopularService() {
  return (
    <div className="PopularService container-fluid">
      <h2 className="title container">Popular professional services</h2>
      <div className="slider-package container">
        <Slider {...settings}>
          <div className="item">
            <h4>
              <small>Build your brand</small>Logo Design
            </h4>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
              alt="..."
            />
          </div>
          <div className="item">
            <h4>
              <small>Customize your site</small>WordPress
            </h4>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
              alt="..."
            />
          </div>
          <div className="item">
            <h4>
              <small>Share your message</small>Voice Over
            </h4>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
              alt="..."
            />
          </div>
          <div className="item">
            <h4>
              <small>Engage your audience</small>Video Explainer
            </h4>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
              alt="..."
            />
          </div>
          <div className="item">
            <h4>
              <small>Reach more customers</small>Social Media
            </h4>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
              alt="..."
            />
          </div>
          <div className="item">
            <h4>
              <small>Unlock growth online</small>SEO
            </h4>
            <img
              alt="SEO"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
            />
          </div>
          <div className="item">
            <h4>
              <small>Color your dreams</small>Illustration
            </h4>
            <img
              alt="Illustration"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
            />
          </div>
          <div className="item">
            <h4>
              <small>Go global</small>Translation
            </h4>
            <img
              alt="Translation"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
            />
          </div>
          <div className="item">
            <h4>
              <small>Learn your business</small>Data Entry
            </h4>
            <img
              alt="Data Entry"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
            />
          </div>
          <div className="item">
            <h4>
              <small>Showcase your story</small>Book Covers
            </h4>
            <img
              alt="Book Covers"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
