import React from "react";
import "./index.css";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import { Images } from "../../atoms/Images";

export const Footer = () => {
  return (
    <footer>
      <div className="main-fter">
        <div class="sm-div">
          <h3>GET IN TOUCH</h3>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" id="linkedin" />
        </div>
        <div className="lg-ft_div">
          <div className="ft-logo">
            <Images name="ft-logo" className="ft-logo-img" />
          </div>
          <div className="fter-div">
            {/* <div className="">
              <ul>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div> */}
            {/* <div>
              <ul>
                <li>Graphic Design</li>
                <li>Visual Content</li>
                <li>Product Branding</li>
                <li>Digital Printing</li>
              </ul>
            </div>
            <div>
                <p>Clients</p>
              <ul>
                <li>Concetti Spaziali</li>
                <li>Glowen Solicitors</li>
                <li>Chinovo Clothing</li>
                <li>Paulette Fitness Empire</li>
              </ul>
            </div> */}
            {/* <div className="footer-btn">
              <button>Direct Message</button>
            </div> */}
          </div>
        </div>
        <div className="copyright">
          <p className="first-para">© 2022 Owoyibo Collections</p>
          {/* <img src={whatsapp} alt="" id="whatsapp-icon" /> */}
        </div>
      </div>
    </footer>
  );
};
