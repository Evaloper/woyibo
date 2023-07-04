import React from "react";
import './index.css'
import { Button } from "../../atoms/Button";
import profilepics from "./Images/partrick_dp.png"

export const Home = () => {
  return (
    <main>
      <section className="first-sect">
        <div className="intro">
          <p className="name-para">Patrick Igheleraro</p>
          <h3 className="title-para" data-text="Creative Designer">Creative Designer</h3>
          <p className="para">
            I help agencies and brands turn their ideas into designs. Let's
            make something beautiful.
          </p>
          <Button  title="Hire Me" className="btn" />
        </div>
        <div className="profile_img">
          <img className="image-profile" src={profilepics} />
        </div>
      </section>
    </main>
  );
};
