import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putUserInfoAction } from "store/actions/UserManagerAction";
import "./UserSegmentation.scss";

export default function UserSegmentation(props) {
  const userID = props.userID;
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.UserManagerReducer.infoUser);
  const [isHiddenSkill, setIsHiddenSkill] = useState(true);
  const [isHiddenCertification, setIsHiddenCertification] = useState(true);

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

  const showCertification = () => {
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
    const skills = userInfo.skill;
    skills.push(skill);
    const UserInfoUpdate = { ...userInfo, skill: skills };
    dispatch(putUserInfoAction(userID, UserInfoUpdate));
    event.target.elements.skill.value = "";
    setIsHiddenSkill(true);
  };

  const handleSubmitCertification = (event) => {
    event.preventDefault();
    const certification = event.target.elements.certification.value;
    const certifications = userInfo.certification;
    certifications.push(certification);
    const UserInfoUpdate = { ...userInfo, certification: certifications };
    dispatch(putUserInfoAction(userID, UserInfoUpdate));
    event.target.elements.certification.value = "";
    setIsHiddenCertification(true);
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
          className="certification box"
          style={{ border: "none", padding: 0, margin: 0 }}
        >
          <div className="inner-row">
            <h3>
              <span>Certification</span>
              <button
                type="button"
                onClick={() => setIsHiddenCertification(false)}
                className="add"
              >
                Addnew
              </button>
            </h3>

            <form
              onSubmit={handleSubmitCertification}
              style={{ border: "none", padding: 0, margin: 0 }}
            >
              <input
                name="certification"
                type="text"
                hidden={isHiddenCertification}
                className="empty-list"
                placeholder="Add your Certifications."
                required
              />
              {showCertification()}
              <button type="submit" hidden></button>
            </form>
          </div>
        </section>
      </article>
    </div>
  );
}
