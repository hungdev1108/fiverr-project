import { DownOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCongViecTheoChiTietLoaiAction, getDanhSachCongViecTheoTenAction } from "store/actions/ManagerJobAction";
import JobItem from "./JobItem/JobItem";
import "./ListJob.scss";

function ListJob() {
  const location = useLocation();
  let urlParams = new URLSearchParams(location.search);
  const { danhSachCongViec } = useSelector((state) => state.ManagerJobReducer);

  console.log("danhSachCongViec:", danhSachCongViec);

  const valueSearch = urlParams.get("valueSearch");
  const maChiTietLoai = urlParams.get("maChiTietLoai");

  //   console.log(valueSearch);

  const dispatch = useDispatch();

  useEffect(() => {
    if (maChiTietLoai) dispatch(getCongViecTheoChiTietLoaiAction(maChiTietLoai));
    if (valueSearch) dispatch(getDanhSachCongViecTheoTenAction(valueSearch));
  }, []);

  // Config useParams

  const renderJob = () => {
    return danhSachCongViec?.map((job, index) => {
      return (
        <div key={index} className="col-12 col-md-6 col-lg-3 mb-5">
          <JobItem job={job} />
        </div>
      );
    });
  };

  const resultSearch = () => {
    if (maChiTietLoai) {
      return <></>;
    }
    if (valueSearch) {
      return <h1>Results for "{valueSearch}"</h1>;
    }
  };

  return (
    <section id="listJob" className="mt-4">
      <div className="container">
        <div className="resultSearch">{resultSearch()}</div>
        <div className="listJob__filter--nav mt-4 mb-5 d-flex justify-content-between align-items-center">
          <div className="filter__nav-left">
            <button className="btn btn-secondary bg-white border text-secondary mr-3 mb-3" type="button">
              Category
              <DownOutlined style={{ fontSize: "14px", marginLeft: "0.5rem", verticalAlign: "inherit" }} />
            </button>
            <button className="btn btn-secondary bg-white border text-secondary mr-3 mb-3" type="button">
              Service Options
              <DownOutlined style={{ fontSize: "14px", marginLeft: "0.5rem", verticalAlign: "inherit" }} />
            </button>
            <button className="btn btn-secondary bg-white border text-secondary mr-3 mb-3" type="button">
              Seller Details
              <DownOutlined style={{ fontSize: "14px", marginLeft: "0.5rem", verticalAlign: "inherit" }} />
            </button>
            <button className="btn btn-secondary bg-white border text-secondary mr-3 mb-3" type="button">
              Budget
              <DownOutlined style={{ fontSize: "14px", marginLeft: "0.5rem", verticalAlign: "inherit" }} />
            </button>
            <button className="btn btn-secondary bg-white border text-secondary mr-3 mb-3" type="button">
              Delivery Time
              <DownOutlined style={{ fontSize: "14px", marginLeft: "0.5rem", verticalAlign: "inherit" }} />
            </button>
          </div>
          <div className="filter__nav-right d-flex justify-content-end mb-3">
            <div className="custom-control custom-switch mr-4">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label" htmlFor="customSwitch1">
                Pro Services
              </label>
            </div>
            <div className="custom-control custom-switch mr-4">
              <input type="checkbox" className="custom-control-input" id="customSwitch2" />
              <label className="custom-control-label" htmlFor="customSwitch2">
                Local Sellers
              </label>
            </div>
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch3" />
              <label className="custom-control-label" htmlFor="customSwitch3">
                Online Sellers
              </label>
            </div>
          </div>
        </div>
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
