import React from "react";
import { useRouteMatch } from "react-router-dom";
import Herobanner from "./HeroBanner/HeroBanner";
import Popular from "./Popular/Popular";
import RelatedLink from "./RelatedLink/RelatedLink";
import "./JobListJobType.scss";

function JobListJobType(props) {
  const match = useRouteMatch();
  console.log(match.params.detailMainJobId);
  return (
    <div className="JobListJobType">
      <Herobanner title={match.params.detailMainJobId} />

      <Popular title={match.params.detailMainJobId} />

      <RelatedLink title={match.params.detailMainJobId} />
    </div>
  );
}

export default JobListJobType;
