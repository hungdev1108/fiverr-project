import React from "react";
import { useRouteMatch } from "react-router-dom";
import Herobanner from "./HeroBanner/HeroBanner";
import Popular from "./Popular/Popular";
import RelatedLink from "./RelatedLink/RelatedLink";
import "./JobListJobType.scss";
import Explore from "./Explore/Explore";

function JobListJobType(props) {
  const match = useRouteMatch();
  return (
    <div className="JobListJobType">
      <Herobanner title={match.params.detailMainJobId} />

      <Popular title={match.params.detailMainJobId} />

      <Explore title={match.params.detailMainJobId} />

      <RelatedLink title={match.params.detailMainJobId} />
    </div>
  );
}

export default JobListJobType;
