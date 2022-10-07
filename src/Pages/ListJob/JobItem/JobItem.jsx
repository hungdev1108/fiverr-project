import React from "react";
import { Card } from "react-bootstrap";
import "./JobItem.scss";

function JobItem(props) {
  const { job } = props;

  //   console.log("jobItem", job);

  return (
    <div className="px-3" id="jobItem">
      <Card>
        <Card.Img role="button" height={200} variant="top" src={job.hinhAnh} />
        <Card.Body>
          <Card.Title className="text-success">Post information</Card.Title>
          <Card.Text role="button">
            <span className="limit-line h5" style={{ height: "2.8rem", WebkitLineClamp: 2 }}>
              {job.tenCongViec}
            </span>
          </Card.Text>
          <div className="h6">
            <span className="text-warning mr-1">
              <i className="text-warning fas fa-star"></i>
            </span>
            <span className="text-muted">({job.danhGia})</span>
          </div>
        </Card.Body>
        <div className="d-flex justify-content-between align-items-center px-3 py-1 border border-top-secondary border-right-0 border-left-0 border-bottom-0">
          <span className="h4 mb-0 text-muted">
            <i className="fas fa-heart"></i>
          </span>
          <div className=" align-items-center">
            <span className="h6">STARTING AT</span>
            <span className="h4 ml-1">${job.giaTien}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default JobItem;
