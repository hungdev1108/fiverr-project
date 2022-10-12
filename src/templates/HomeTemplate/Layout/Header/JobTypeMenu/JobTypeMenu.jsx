import { useEffect, useState } from "react";
import { Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { getJobTypeMenuAction } from "store/actions/ManagerJobAction";
import "./JobTypeMenu.scss";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block" }} onClick={onClick} />;
}

const settingsJobListJobType = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        initialSlide: 0,
      },
    },
  ],
};

function JobTypeMenu(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { menuLoaiCongViec } = useSelector((state) => state.ManagerJobReducer);

  const [showSubMenu, setShowSubMenu] = useState(false);

  const renderTooltip = (props, jobItem) => {
    return (
      <Tooltip id={jobItem.id} {...props}>
        <div
          onMouseLeave={() => setShowSubMenu(false)}
          onMouseMove={() => setShowSubMenu(jobItem.id)}
          className="list-group"
        >
          {jobItem.dsNhomChiTietLoai.map((item, index) => {
            return (
              <div key={index}>
                {item.dsChiTietLoai.map((item, index) => {
                  return (
                    // Xử dụng thẻ Link không render giao diện khi url thay đổi
                    /* <Link
                      key={index}
                      className="list-group-item list-group-item-action h6"
                      to={`/listJob/?maChiTietLoai=${item.id}`}
                    >
                      {item.tenChiTiet}
                    </Link> */
                    <div
                      role="button"
                      key={index}
                      onClick={() => {
                        history.push(`/listJob/?maChiTietLoai=${item.id}`);
                        window.location.reload();
                      }}
                      className="list-group-item list-group-item-action h6"
                    >
                      {item.tenChiTiet}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Tooltip>
    );
  };

  useEffect(() => {
    dispatch(getJobTypeMenuAction());
  }, []);

  //   <Slider {...settings}>
  const renderJobTypeMenu = () => {
    return (
      <Slider {...settingsJobListJobType}>
        {menuLoaiCongViec.map((jobItem, index) => {
          return (
            <div className="jobItem col-sm-6 col-lg" key={index}>
              <OverlayTrigger
                placement="bottom"
                show={showSubMenu === jobItem.id ? true : false}
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip(props, jobItem)}
              >
                <div
                  role="button"
                  style={{ color: showSubMenu === jobItem.id && "#1dbf73" }}
                  onMouseLeave={() => setShowSubMenu(false)}
                  onMouseMove={() => setShowSubMenu(jobItem.id)}
                  className="main__job--menu h6 m-0"
                  onClick={() => {
                    history.push(`/jobListJobType/${jobItem.id}`);
                  }}
                >
                  <span className="">{jobItem.tenLoaiCongViec}</span>
                  <i className="ml-2 fa fa-chevron-down icon-dropdown"></i>
                </div>
              </OverlayTrigger>
            </div>
          );
        })}
      </Slider>
    );
    // return menuLoaiCongViec.map((jobItem, index) => {
    //   return (
    //     <div className="jobItem col-sm-6 col-lg" key={index}>
    //       <OverlayTrigger
    //         placement="bottom"
    //         show={showSubMenu === jobItem.id ? true : false}
    //         delay={{ show: 250, hide: 400 }}
    //         overlay={(props) => renderTooltip(props, jobItem)}
    //       >
    //         <div
    //           role="button"
    //           style={{ color: showSubMenu === jobItem.id && "#1dbf73" }}
    //           onMouseLeave={() => setShowSubMenu(false)}
    //           onMouseMove={() => setShowSubMenu(jobItem.id)}
    //           className="main__job--menu h6 m-0"
    //           onClick={() => {
    //             history.push(`/jobListJobType/${jobItem.id}`);
    //           }}
    //         >
    //           <span className="">{jobItem.tenLoaiCongViec}</span>
    //           <i className="ml-2 fa fa-chevron-down icon-dropdown"></i>
    //         </div>
    //       </OverlayTrigger>
    //     </div>
    //   );
    // });
  };

  return (
    <section className="main__job" id="mainJob">
      <div className="main__job--container">
        <div className="main__job--content px-2 py-4">{renderJobTypeMenu()}</div>
      </div>
    </section>
  );
}

export default JobTypeMenu;
