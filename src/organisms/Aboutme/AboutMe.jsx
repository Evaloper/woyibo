import React from "react";
import "./About.css";
import profile from "./Images/pic.png";
import { Button } from "../../atoms/Button";

export const AboutMe = () => {
  return (
    <section className="about-sect">
      <div className="about-sect-div">
        <div className="col-lg-6 about-left">
          <img class="img-fluid" src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="section-title">
            <h2>About Myself</h2>
			<span className="circle-span"></span>
			<span className="dash-span"></span>
          </div>
          <div className="mb-50 wow fadeIn about-para" data-wow-duration=".8s">
            <p>
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why it’s crucial that, as women, our behavior on
              the job is beyond reproach. inappropriate behavior is often
              laughed. inappropriate behavior is often laughed off as “boys will
              be boys,” women face higher.
            </p>
            <p>
              That’s why it’s crucial that, as women, our behavior on the job is
              beyond reproach. inappropriate behavior is often laughed.
            </p>
          </div>
          <div  className="btn-sect">
            <a href="#" data-text="More Info">
              <Button title="MORE INFO" className="primary-btn white" />
            </a>
            <a href="#" data-text="Resume">
              <Button title="RESUME" className="primary-btn lilac" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
