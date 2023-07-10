import React from "react";
import { Images } from "../../atoms/Images";
import { Link } from "react-router-dom";
import { Icon } from "../../atoms/Icons";
import "./index.css";

export const NavBar = () => {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  return (
    <header>
      <div className="mobile-view">
        <div className="logo">
          <Images name="logo" className="logo-img" />
        </div>
        <div className="hamburger">
          <div onClick={openNav}>
            <Icon type="hamburger" />
          </div>
          <div id="myNav" className="overlay">
            <div onClick={closeNav}>
              <a href="javascript:void(0)" class="closebtn">
                &times;
              </a>
            </div>
            <div className="overlay-content">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Portfolio</a>
              <a href="#">Contact</a>
            </div>
          </div>
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
