import React from "react";
import { Images } from "../../atoms/Images";
import { Link } from "react-router-dom";
import { Icon } from "../../atoms/Icons";
import "./index.css";

export const NavBar = () => {
  return (
    <header>
      <div className="mobile-view">
        <div className="logo">
          <Images name="logo" className="logo-img" />
        </div>
        <div className="hamburger">
          <Icon type="hamburger" />
        </div>
      </div>
      <div className="header">
        <div className="logo">
          <Images name="logo" className="logo-img" />
        </div>
        <div>
          <nav>
            <ul>
              <li className=" navlink home">
                {/* <Link to="/"*/}
                Home
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to="/aboutsession" className=" navlink about"> */}
                About
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to="/"> */}
                Skills
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to=""> */}
                Portfolio
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to="/ContactUs"> */}
                Contact
                {/* </Link> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
