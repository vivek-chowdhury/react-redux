import React from "react";
import male from "../../../assets/placeholders/male.png";
import female from "../../../assets/placeholders/female.jpg";
import "./DisplayPicture.css";

function DisplayPicture(props) {
  return (
    <div className="pictureContainer">
      <img
        src={props.gender === "male" ? male : female}
        className="displayPicture"
        alt="Logo"
      ></img>
      {props.name && <div className="nameHolder">{props.name}</div>}
    </div>
  );
}
export default DisplayPicture;
