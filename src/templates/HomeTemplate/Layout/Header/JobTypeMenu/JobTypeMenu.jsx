import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getJobTypeMenuAction } from "store/actions/ManagerJobAction";
import "./JobTypeMenu.scss";

function JobTypeMenu() {
  const dispatch = useDispatch();

  const { lstJobTypeMenu } = useSelector((state) => state.ManagerJobReducer);
  console.log("lstJobTypeMenu:", lstJobTypeMenu);

  useEffect(() => {
    dispatch(getJobTypeMenuAction());
  }, []);

  const renderJobTypeMenu = () => {
    return lstJobTypeMenu.map((jobItem, index) => {
      return (
        <Col key={index}>
          <div>
            <NavLink to={`/jobListJobType/${jobItem.id}`}>
              {jobItem.tenLoaiCongViec}
            </NavLink>
          </div>
        </Col>
      );
    });
  };

  return (
    <section className="main__job" id="mainJob">
      <Container className="main__job--container">
        <Row className="main__job--content px-2 py-2">
          {renderJobTypeMenu()}
        </Row>
      </Container>
    </section>
  );
}

export default JobTypeMenu;
