import React from "react";

import "./RelatedLink.scss";

export default function RelatedLink(props) {
  return <div className="RelatedLink container">
    <h4 className="title">Services Related To {props.title}</h4>
    <ul>
        <li><span>Minimalist logo design</span></li>
        <li><span>Signature logo design</span></li>
        <li><span>Mascot logo design</span></li>
        <li><span>3d logo design</span></li>
        <li><span>Hand drawn logo design</span></li>
        <li><span>Vintage logo design</span></li>
        <li><span>Remove background</span></li>
        <li><span>Photo restoration</span></li>
        <li><span>Photo retouching</span></li>
        <li><span>Image resize</span></li>
        <li><span>Product label design</span></li>
        <li><span>Custom twitch overlay</span></li>
        <li><span>Custom twitch emotes</span></li>
        <li><span>Gaming logo</span></li>
        <li><span>Children book illustration</span></li>
        <li><span>Instagram design</span></li>
        <li><span>Movie poster design</span></li>
        <li><span>Box design</span></li>
        <li><span>Logo maker</span></li>
        <li><span>Logo ideas</span></li>
    </ul>
  </div>;
}
