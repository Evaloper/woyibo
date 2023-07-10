import React from "react";
import "./index.css";
import Welcome from "./Images/design(2).jpg";
import Flyer from "./Images/design1.jpg";
import Card from "./Images/flyer(18).jpg";
import Flyer2 from "./Images/flyer(40).jpg";
import Flyer3 from "./Images/flyer(61).jpg";

const Porfolio = () => {
  return (
    <section class="container tab_sec">
		<div className="section-title">
			<h2>Portfolio</h2>
			<span className="circle-span"></span>
            <span className="dash-span"></span>
		</div>
      <div class="card_row">
        <div class="collection">
          <a href="#">
            <img src={Flyer} alt="Collection" className="portfolio-img" />
            <span class="discount"></span>
          </a>
        </div>
        <div class="collection">
          <a href="#">
            <img src={Flyer2} alt="Collection"  className="portfolio-img"/>
            <span class="discount"></span>
          </a>
        </div>
        <div class="collection">
          <a href="#">
            <img src={Flyer3} alt="Collection"  className="portfolio-img" />
            <span class="discount"></span>
          </a>
        </div>
        <div class="collection">
          <a href="#">
            <img src={Card} alt="Collection"  className="portfolio-img"/>
            <span class="discount"></span>
          </a>
        </div>
        <div class="collection">
          <a href="#">
            <img src={Flyer2} alt="Collection"  className="portfolio-img"/>
            <span class="discount"></span>
          </a>
        </div>
		<div class="collection">
          <a href="#">
            <img src={Card} alt="Collection"  className="portfolio-img"/>
            <span class="discount"></span>
          </a>
        </div>
        <div class="collection">
          <a href="#">
            <img src={Flyer} alt="Collection"  className="portfolio-img"/>
            <span class="discount"></span>
          </a>
        </div>
        <div class="collection">
          <a href="#">
            <img src={Flyer2} alt="Collection"  className="portfolio-img"/>
            <span class="discount"></span>
          </a>
        </div>
        <div class="collection">
          <a href="#">
            <img src={Flyer3} alt="Collection"  className="portfolio-img"/>
            <span class="discount"></span>
          </a>
        </div>
        <div class="collection">
          <a href="#">
            <img src={Card} alt="Collection"  className="portfolio-img"/>
            <span class="discount"></span>
          </a>
        </div>
        <div class="collection">
          <a href="#">
            <img src={Flyer} alt="Collection"  className="portfolio-img"/>
            <span class="discount"></span>
          </a>
        </div>
		<div class="collection">
          <a href="#">
            <img src={Flyer} alt="Collection"  className="portfolio-img"/>
            <span class="discount"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Porfolio;
