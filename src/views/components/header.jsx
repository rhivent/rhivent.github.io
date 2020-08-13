import React from "react";
import MyLogo from "../../vendor/media/image/mylogo.svg";
export default (props) => {
  return(<>
    <div className="border-top top-position">
      <div className="social-icons-wrapper fadeIn-element">
        <ul className="social-icons">
          <li className="social-icon">
            <a className="ion-social-twitter" href="#"></a>
          </li>
          <li className="social-icon">
            <a className="ion-social-facebook" href="#"></a>
          </li>
          <li className="social-icon">
            <a className="ion-social-googleplus" href="#"></a>
          </li>
          <li className="social-icon">
            <a className="ion-social-youtube" href="#"></a>
          </li>
          <li className="social-icon">
            <a className="ion-social-linkedin" href="#"></a>
          </li>
          <li className="social-icon">
            <a className="ion-social-pinterest" href="#"></a>
          </li>
        </ul>
      </div>
      <div className="instagram-feed-mobile-launcher toggle-instagram-feed-content fadeIn-element">
        <a className="ion-social-instagram" href="#"></a>
      </div>
      <div className="languages fadeIn-element">
        <ul>
          <li className="active">
            <a href="#">EN</a>
          </li>
          <li>
            <a href="#">FR</a>
          </li>
          <li>
            <a href="#">DE</a>
          </li>
        </ul>
      </div>
      <div className="template-title fadeIn-element">
        <img src={MyLogo} alt="Riventus" width="15%" />
      </div>
      <div className="location-launcher fadeIn-element">
        <a className="location-modal-launcher">Location</a>
      </div>
      <div className="contact-launcher fadeIn-element">
        <a className="contact-modal-launcher">Contact</a>
      </div>
    </div>
  </>);
};