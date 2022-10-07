import { Carousel } from "react-bootstrap";

import { imageBanner } from "assets/images/svgImage";
import "./HomeSlider.scss";
import SearchCarousel from "./SearchCarousel";

function HomeSlider() {
  return (
    <div className="HomeSlider">
      <div className="position-relative container-fuild">
        <div className="position-relative cpn-carousel">
          <div className="position-absolute search_input">
            <SearchCarousel />
          </div>
          <div className=" banner d-lg-block">
            <Carousel fade controls={false} indicators={false}>
              {imageBanner?.map((img) => (
                <Carousel.Item key={img.id}>
                  <div
                    className="d-block w-100 background-carousel"
                    style={{ backgroundImage: `url(${img.url})` }}
                  />
                  <Carousel.Caption bsPrefix="carousel-caption d-none d-md-block name">
                    <div className="float-right d-flex">
                      <h5 className="mx-1 font-weight-normal">{img.name},</h5>
                      <h5>{img.job}</h5>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
