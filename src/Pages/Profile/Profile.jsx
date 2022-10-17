import React from "react";
import { useSelector } from "react-redux";
import './Profile.scss'
import SellerCard from "./SellerCard/SellerCard";
import SellerGigs from "./SellerGigs/SellerGigs";
import UserSegmentation from "./UserSegmentation/UserSegmentation";

function Profile() {
  const userID = useSelector(
    (state) => state.UserManagerReducer.userSignin.user.id
  );
  return <div className="Profile">
      <main className="container main">
        <div className="row">
          <section className="info-column">
            <SellerCard userID={userID}/>

            <UserSegmentation userID={userID}/>
          </section>
          <section className="gigs-column">
            <SellerGigs/>
          </section>
        </div>
      </main>
  </div>;
}

export default Profile;
