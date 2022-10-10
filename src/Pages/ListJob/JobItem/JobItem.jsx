import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./JobItem.scss";

function JobItem(props) {
  const { job } = props;
  const history = useHistory();

  //   console.log("jobItem", job);

  return (
    <div className="px-3" id="jobItem">
      <Card>
        <Card.Img
          onClick={() => {
            history.push(`/jobDetail/${job?.id}`);
          }}
          role="button"
          height={200}
          variant="top"
          src={job.congViec?.hinhAnh}
        />
        <Card.Body>
          <Card.Title className="text-success">{job.tenChiTietLoai}</Card.Title>
          <div className="d-flex align-items-center userPost mb-2">
            <div className="userPost__avatar">
              <img width={35} height={35} src={job.avatar} alt="" className="rounded-circle" />
            </div>
            <div className="userPost__content ml-2">
              <h6 className="m-0">{job.tenNguoiTao}</h6>
              <span className="text-black-50">Level 2 Seller</span>
            </div>
          </div>
          <Card.Text
            role="button"
            onClick={() => {
              history.push(`/jobDetail/${job?.id}`);
            }}
          >
            <span className="limit-line h5" style={{ WebkitLineClamp: 2 }}>
              {job.congViec?.tenCongViec}
            </span>
          </Card.Text>
          <div className="h6">
            <span className="text-warning mr-1">
              {job?.congViec.saoCongViec === 1 ? (
                <i className="fa fa-star text-warning"></i>
              ) : job?.congViec.saoCongViec === 2 ? (
                <Fragment>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                </Fragment>
              ) : job?.congViec.saoCongViec === 3 ? (
                <Fragment>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                </Fragment>
              ) : job?.congViec.saoCongViec === 4 ? (
                <Fragment>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                </Fragment>
              ) : job?.congViec.saoCongViec === 5 ? (
                <Fragment>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                </Fragment>
              ) : job?.congViec.saoCongViec === 0 ? (
                <i className="ml-2">No star</i>
              ) : (
                ""
              )}
            </span>
            <span className="text-muted">({job.congViec?.danhGia})</span>
          </div>
        </Card.Body>
        <div className="d-flex justify-content-between align-items-center px-3 py-1 border border-top-secondary border-right-0 border-left-0 border-bottom-0">
          <span className="h4 mb-0 text-muted jobItem__heart">
            <i className="fas fa-heart"></i>
          </span>
          <div className="align-items-center">
            <span className="h6">STARTING AT</span>
            <span className="h4 ml-1">${job.congViec?.giaTien}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default JobItem;
