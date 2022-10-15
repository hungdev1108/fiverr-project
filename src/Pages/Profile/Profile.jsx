import React from "react";
import './Profile.scss'
import SellerCard from "./SellerCard/SellerCard";

function Profile() {
  return <div className="Profile">
      <main className="container main">
        <div className="row">
          <section className="info-column">
            <SellerCard/>
          </section>
          <section className="gigs-column"></section>
        </div>
      </main>
  </div>;
}

export default Profile;
