import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import background from "../../../public/images/ahmed-backg.jpg"
import profile from "../../../public/images/1696868161667.jpg"

export const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="images-wrapper">
        <img className="background-image" src={background}></img>
        <img className="profile-pic" src={profile}></img>
      </div>
      <div className="name-position">
        <h5>Ahmed Samir</h5>
        <p>Front End Developer || React JS || Next.JS @Codesoft</p>
      </div>
      <hr></hr>
      <div className="analysis">
        <div>
          <div>Who's viewed your profile</div>
          <div>48</div>
        </div>
        <div>
          <div>Impressions of your post</div>
          <div>75</div>
        </div>
      </div>
      <hr></hr>
      <div className="items">My items</div>
    </div>
  );
};
