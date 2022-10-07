import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListJobAction } from "store/actions/ManagerJobAction";
import JobItem from "./JobItem/JobItem";
import "./ListJob.scss";

function ListJob() {
  const dispatch = useDispatch();
  const { lstJob } = useSelector((state) => state.ManagerJobReducer);

  console.log(lstJob);

  useEffect(() => {
    dispatch(getListJobAction());
  }, []);

  const renderJob = () => {
    return lstJob?.map((job, index) => {
      return (
        <div key={index} className="col-12 col-md-6 col-lg-3 mb-5">
          <JobItem job={job} />
        </div>
      );
    });
  };

  return (
    <section id="listJob">
      <div className="container">
        <div className="listJob__filter--nav"></div>
        <div className="listJob__content">
          <div className="row">{renderJob()}</div>
        </div>
      </div>
    </section>
  );
}

export default ListJob;
