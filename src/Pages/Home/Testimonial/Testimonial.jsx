import React from "react";
import Slider from "react-slick";
import "./Testimonial.scss";

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

const settingsTestimonial = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function Testimonial() {
  return (
    <div className="testimonials container">
      <Slider {...settingsTestimonial}>
        <div className="slider-package">
          <div className="testimonial row">
            <div className="testimonial-video">
              <div className="video-modal">
                <div className="modal-image">
                  <img
                    alt="Video teaser image"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <h5 className="content-title">
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <span className="content-logo">
                  <img
                    alt="Company logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                    loading="lazy"
                  />
                </span>
              </h5>
              <blockquote className="content-domaine">
                <i>
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
                </i>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="slider-package">
          <div className="testimonial row">
            <div className="testimonial-video">
              <div className="video-modal">
                <div className="modal-image">
                  <img
                    alt="Video teaser image"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <h5 className="content-title">
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <span className="content-logo">
                  <img
                    alt="Company logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                    loading="lazy"
                  />
                </span>
              </h5>
              <blockquote className="content-domaine">
                <i>
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
                </i>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="slider-package">
          <div className="testimonial row">
            <div className="testimonial-video">
              <div className="video-modal">
                <div className="modal-image">
                  <img
                    alt="Video teaser image"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <h5 className="content-title">
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <span className="content-logo">
                  <img
                    alt="Company logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                    loading="lazy"
                  />
                </span>
              </h5>
              <blockquote className="content-domaine">
                <i>
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
                </i>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="slider-package">
          <div className="testimonial row">
            <div className="testimonial-video">
              <div className="video-modal">
                <div className="modal-image">
                  <img
                    alt="Video teaser image"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <h5 className="content-title">
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <span className="content-logo">
                  <img
                    alt="Company logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                    loading="lazy"
                  />
                </span>
              </h5>
              <blockquote className="content-domaine">
                <i>
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
