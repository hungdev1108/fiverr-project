import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putUserInfoAction } from "store/actions/UserManagerAction";
import "./UserSegmentation.scss";

export default function UserSegmentation(props) {
  const userID = props.userID;
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.UserManagerReducer.infoUser);
  const [isHiddenSkill, setIsHiddenSkill] = useState(true);
  const [isHiddenCertication, setIsHiddenCertication] = useState(true);

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

  const handleSubmitSkill = (event) => {
    event.preventDefault();
    const skill = event.target.elements.skill.value;
    // dispatch(putUserInfoAction(userID))
  };
  const handleSubmitCertication = (event) => {
    event.preventDefault();
    const certication = event.target.elements.certication.value;
  };

  return (
    <div className="UserSegmentation">
      <article>
        <section className="box">
          <div className="inner-row">
            <h3>Description</h3>
            <p>I am a final student of CyberSoft</p>
          </div>
        </section>

        <section className="box">
          <div className="inner-row">
            <h3>Languages</h3>
            <p>
              English - <span>Basic</span>
            </p>
          </div>
        </section>

        <section className="box">
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
        </section>

        <section className="skill box">
          <div className="inner-row">
            <h3>
              <span>Skills</span>
              <button
                type="button"
                onClick={() => setIsHiddenSkill(false)}
                className="add"
              >
                Addnew
              </button>
            </h3>

            <form
              onSubmit={handleSubmitSkill}
              style={{ border: "none", padding: 0, margin: 0 }}
            >
              <input
                name="skill"
                type="text"
                hidden={isHiddenSkill}
                className="empty-list"
                placeholder="Add your Skills."
                required
              />
              {showSkill()}
              <button type="submit" hidden></button>
            </form>
          </div>
        </section>

        <section
          className="certication box"
          style={{ border: "none", padding: 0, margin: 0 }}
        >
          <div className="inner-row">
            <h3>
              <span>Certification</span>
              <button
                type="button"
                onClick={() => setIsHiddenCertication(false)}
                className="add"
              >
                Addnew
              </button>
            </h3>

            <form
              onSubmit={handleSubmitCertication}
              style={{ border: "none", padding: 0, margin: 0 }}
            >
              <input
                name="certication"
                type="text"
                hidden={isHiddenCertication}
                className="empty-list"
                placeholder="Add your Certifications."
                required
              />
              {showCertication()}
              <button type="submit" hidden></button>
            </form>
          </div>
        </section>
      </article>
    </div>
  );
}
