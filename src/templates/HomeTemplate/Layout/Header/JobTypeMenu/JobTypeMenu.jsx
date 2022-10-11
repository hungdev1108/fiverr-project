import { useEffect, useState } from "react";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { getJobTypeMenuAction } from "store/actions/ManagerJobAction";
import "./JobTypeMenu.scss";

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
                    <Link
                      key={index}
                      to={`/listJob/?maChiTietLoai=${item.id}`}
                      className="list-group-item list-group-item-action h6"
                    >
                      {item.tenChiTiet}
                    </Link>
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

  const renderJobTypeMenu = () => {
    return menuLoaiCongViec.map((jobItem, index) => {
      return (
        <div className="jobItem col-sm-6 col-lg" key={index}>
          <div>
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
        </div>
      );
    });
  };

  return (
    <section className="main__job" id="mainJob">
      <Container className="main__job--container">
        <Row className="main__job--content px-2 py-4">{renderJobTypeMenu()}</Row>
      </Container>
    </section>
  );
}

export default JobTypeMenu;
