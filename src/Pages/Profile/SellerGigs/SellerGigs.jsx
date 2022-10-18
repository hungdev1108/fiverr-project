import { Card } from "antd";
import { ConfirmDeleteHiredJob } from "components/Notifications/Notifications";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHireJobListAction } from "store/actions/UserManagerAction";
import "./SellerGigs.scss";

export default function SellerGigs(props) {
  const dispatch = useDispatch();
  const bookingJob = useSelector(
    (state) => state.UserManagerReducer.bookingJob
  );

  const renderBookingJob = () => {
    return bookingJob?.map((job) => {
      return (
        <Card
          className="job-card position-relative"
          key={job.id}
          title={job.congViec.tenCongViec}
        >
          <div
            className="content d-flex flex-row text-secondary"
            style={{ fontSize: 14 }}
          >
            <img
              className="image-job-card mr-3"
              src={job.congViec.hinhAnh}
              alt={job.congViec.tenCongViec}
            />
            <p>{job.congViec.moTa}</p>
          </div>
          <button
            onClick={() => ConfirmDeleteHiredJob(job.id, dispatch)}
            className="delete-job-card"
          >
            X
          </button>
        </Card>
      );
    });
  };

  useEffect(() => {
    dispatch(getHireJobListAction());
  }, []);

  return (
    <div className="SellerGigs">
      <ul className="status-filter-bar">
        <li>ACTIVE GIGS</li>
      </ul>

      <main className="main">{renderBookingJob()}</main>
    </div>
  );
}
