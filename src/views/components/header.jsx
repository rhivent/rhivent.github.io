import React from "react";

export default (props) => {
  return(<>
    <div class="border-top top-position">
      <div class="social-icons-wrapper fadeIn-element">
        <ul class="social-icons">
          <li class="social-icon">
            <a class="ion-social-twitter" href="#"></a>
          </li>
          <li class="social-icon">
            <a class="ion-social-facebook" href="#"></a>
          </li>
          <li class="social-icon">
            <a class="ion-social-googleplus" href="#"></a>
          </li>
          <li class="social-icon">
            <a class="ion-social-youtube" href="#"></a>
          </li>
          <li class="social-icon">
            <a class="ion-social-linkedin" href="#"></a>
          </li>
          <li class="social-icon">
            <a class="ion-social-pinterest" href="#"></a>
          </li>
        </ul>
      </div>
      <div class="instagram-feed-mobile-launcher toggle-instagram-feed-content fadeIn-element">
        <a class="ion-social-instagram" href="#"></a>
      </div>
      <div class="languages fadeIn-element">
        <ul>
          <li class="active">
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
      <div class="template-title fadeIn-element">
        The One
      </div>
      <div class="location-launcher fadeIn-element">
        <a class="location-modal-launcher">Location</a>
      </div>
      <div class="contact-launcher fadeIn-element">
        <a class="contact-modal-launcher">Contact</a>
      </div>
    </div>
  </>);
};