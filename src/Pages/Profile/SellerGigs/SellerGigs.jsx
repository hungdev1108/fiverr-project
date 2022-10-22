import { Card } from "antd";
import { ConfirmDeleteHiredJob } from "components/Notifications/Notifications";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHireJobListAction } from "store/actions/UserManagerAction";
import "./SellerGigs.scss";

export default function SellerGigs(props) {
  const dispatch = useDispatch();
  const bookingJob = useSelector(
    (state) => state.UserManagerReducer.bookingJob
  );

  const renderDescription = (description) => {
    return description.length > 200 ? (
      <p>
        {description.substr(0, 200)}<span> ...</span>
      </p>
    ) : (
      <p>{description}</p>
    );
  };

  const renderBookingJob = () => {
    return bookingJob?.map((job) => {
      return (
        <Card
          className="job-card position-relative"
          key={job.id}
          title={job.congViec.tenCongViec}
        >
          <div className="content text-secondary">
            <Link
              className="image-job-card"
              to={`/jobDetail/${job.congViec.id}`}
            >
              <img src={job.congViec.hinhAnh} alt={job.congViec.tenCongViec} />
            </Link>

            {renderDescription(job.congViec.moTa)}
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
