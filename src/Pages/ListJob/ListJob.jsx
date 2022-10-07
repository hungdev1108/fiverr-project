import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListJobAction } from "store/actions/ManagerJobAction";
import JobItem from "./JobItem/JobItem";
import "./ListJob.scss";

function ListJob() {
  const dispatch = useDispatch();
  const { lstJob } = useSelector((state) => state.ManagerJobReducer);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

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
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 30,
            paddingBottom: 30,
          }}
          total={20}
          pageSize={5}
          // onChange={handleChangePage}
          // current={currentPage}
          // pageSize={config.pageSize}
          // total={config.totalCount}
        />
      </div>
    </section>
  );
}

export default ListJob;
