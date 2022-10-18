import React from "react";
import { useSelector } from "react-redux";
import "./UserSegmentation.scss";

export default function UserSegmentation(props) {
  const userID = props.userID;
  const userInfo = useSelector((state) => state.UserManagerReducer.infoUser);
  console.log("id", userID);
  console.log("info", userInfo);
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
            <ul>
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
              <button className="add">Addnew</button>
            </h3>

            <section>
              <div className="empty-list">
                Add your Skills.
                <input type="hidden" />
              </div>
              <input type='hidden' value="0" />
            </section>
          </div>
        </form>
      </article>
    </div>
  );
}
