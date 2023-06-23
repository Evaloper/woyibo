import React from "react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.scss";

import birdlehotel from "./images/2birdlehotel.png";
import paulet from "./images/paulet_empire.png";
import clientlogo from "./images/clientlogo.png";
import color from "./images/color.png";
import cuisine from "./images/cuisine.png";
import cuvvy from "./images/cuvvy_empire.png";
import Design8 from "./images/Design(8).jpg";
import Design9 from "./images/Design(9).jpg";
import Design10 from "./images/Design(21).jpg";
import Design11 from "./images/Design(25).jpg";
import Design12 from "./images/welcome(2).jpg";

export const Carousel = () => {
  return (
    <div className="carousel-container brands-area">
      <div class="container m-auto">
        <div class="brand-wrap">
          <div class="flex flex-middle transition">
            <div class="col single-brand mr-30">
              <a href="#">
                <img class="mx-auto" src={birdlehotel} alt="" />
              </a>
            </div>
            <div class="col single-brand mr-30">
              <a href="#">
                <img class="mx-auto" src={paulet} alt="" />
              </a>
            </div>
            <div class="col single-brand mr-30">
              <a href="#">
                <img class="mx-auto" src={clientlogo} alt="" />
              </a>
            </div>
            <div class="col single-brand mr-30">
              <a href="#">
                <img class="mx-auto" src={color} alt="" />
              </a>
            </div>
            <div class="col single-brand mr-30">
              <a href="#">
                <img class="mx-auto" src={cuisine} alt="" />
              </a>
            </div>
            <div class="col single-brand mr-30">
              <a href="#">
                <img class="mx-auto" src={cuvvy} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};
