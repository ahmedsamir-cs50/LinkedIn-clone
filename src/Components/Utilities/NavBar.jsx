import React from "react";
import linked from "../../../public/images/linkedin.png";
import article from "../../../public/images/nav-home.svg";
import people from "../../../public/images/nav-network.svg";
import learning from "../../../public/images/nav-messaging.svg";
import jobs from "../../../public/images/nav-jobs.svg";

import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="nav">
      <Container>
        <div className="logo">
          <span>Linked</span>
          <img src={linked}></img>
        </div>
        <div className="wrapper">
        <div className="collapsed-nav">
          <a>
            <img src={article}></img>
            <span>Articles</span>
          </a>

          <a>
            <img src={people}></img>
            <span>People</span>
          </a>
          <a>
            <img src={learning}></img>
            <span>Learning</span>
          </a>
          <a>
            <img src={jobs}></img>
            <span>Jobs</span>
          </a>
        </div>
       
        <div className="auth-nav">
          <button>Join now</button>
          <button>Sign in</button>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
