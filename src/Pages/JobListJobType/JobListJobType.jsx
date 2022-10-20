import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import Herobanner from "./HeroBanner/HeroBanner";
import Popular from "./Popular/Popular";
import RelatedLink from "./RelatedLink/RelatedLink";
import "./JobListJobType.scss";
import Explore from "./Explore/Explore";
import { useDispatch, useSelector } from "react-redux";
import { getChiTietLoaiCongViecAction } from "store/actions/ManagerJobAction";

function JobListJobType(props) {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const id = match.params.jobTypeId;
  const categoryJob = useSelector(
    (state) => state.ManagerJobReducer.chiTietLoaiCongViec[0]
  );
  const title = categoryJob?.tenLoaiCongViec;

  useEffect(() => {
    dispatch(getChiTietLoaiCongViecAction(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="JobListJobType">
      <Herobanner title={title} />

      <Popular title={title} />

      <Explore title={title} data={categoryJob?.dsNhomChiTietLoai} />

      <RelatedLink title={title} />
    </div>
  );
}

export default JobListJobType;
