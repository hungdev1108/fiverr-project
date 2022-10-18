import React from "react";
import { useSelector } from "react-redux";
import "./UserSegmentation.scss";

export default function UserSegmentation(props) {
  const userID = props.userID;
  const userInfo = useSelector((state) => state.UserManagerReducer.infoUser);
  console.log("id", userID);
  console.log("info", userInfo);

  const addData = (e) => {
    console.log(e);
  };

  const showSkill = () => {
    return userInfo.skill?.length !== 0 ? (
      <ul className="item-list">
        {userInfo?.skill?.map((item, index) => {
          return (
            <li key={index} className="skill-bubble">
              <h4>{item}</h4>
            </li>
          );
        })}
      </ul>
    ) : (
      <></>
    );
  };

  const showCertication = () => {
    return userInfo.certification?.length !== 0 ? (
      <ul className="item-list">
        {userInfo.certification?.map((item, index) => {
          return (
            <li key={index} className="skill-bubble">
              <h4>{item}</h4>
            </li>
          );
        })}
      </ul>
    ) : (
      <></>
    );
  };

  return (
    <div className="UserSegmentation">
      <article>
        <form>
          <div className="inner-row">
            <h3>Description</h3>
            <p>I am a final student of CyberSoft</p>
          </div>
        </form>

        <form>
          <div className="inner-row">
            <h3>Languages</h3>
            <p>
              English - <span>Basic</span>
            </p>
          </div>
        </form>

        <form>
          <div className="inner-row">
            <h3>Linked Accounts</h3>
            <ul className="social">
              <li>
                <span>Facebook</span>
              </li>
              <li>
                <span>Google</span>
              </li>
              <li>
                <span>Dribbble</span>
              </li>
              <li>
                <span>Stack Overflow</span>
              </li>
              <li>
                <span>Github</span>
              </li>
              <li>
                <span>Vimeo</span>
              </li>
              <li>
                <span>Twitter</span>
              </li>
            </ul>
          </div>
        </form>

        <form className="skill">
          <div className="inner-row">
            <h3>
              <span>Skills</span>
              <button type="button" onClick={addData} className="add">
                Addnew
              </button>
            </h3>

            <section>
              <input
                type="text"
                className="empty-list"
                placeholder="Add your Skills."
              />
              {showSkill()}
            </section>
          </div>
        </form>

        <form
          className="certication"
          style={{ border: "none", padding: 0, margin: 0 }}
        >
          <div className="inner-row">
            <h3>
              <span>Certification</span>
              <button type="button" onClick={addData} className="add">
                Addnew
              </button>
            </h3>

            <section>
              <input
                type="text"
                className="empty-list"
                placeholder="Add your Certifications."
              />
              {showCertication()}
            </section>
          </div>
        </form>
      </article>
    </div>
  );
}
