import React from "react";

export default (props) => {
  return(<>
    <div class="border-bottom-menu bottom-position">
      <div class="fadeIn-element" id="menu">
        <nav class="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="credits fadeIn-element">
        <a class="toggle-credits-content"><span>Photo Credit</span></a>
      </div>
      <div class="instagram-feed fadeIn-element">
        <a class="toggle-instagram-feed-content"><span>Instagram Feed</span></a>
      </div>
    </div>

    {/* footer for mobile */}
    <div class="border-bottom bottom-position">
      <div class="menu-mobile">
        <nav class="menu" id="menu-mobile">
          <ul>
            <li>
              <ul>
                <li class="lifting">
                  <a href="#home">Home</a>
                </li>
                <li class="lifting">
                  <a href="#news">News</a>
                </li>
                <li class="lifting">
                  <a href="#about">About</a>
                </li>
                <li class="lifting">
                  <a href="#services">Services</a>
                </li>
                <li class="lifting">
                  <a href="#works">Works</a>
                </li>
                <li class="lifting-first toggle-credits-content">
                  <a href="#">Photo Credit</a>
                </li>
              </ul><a class="menu-trigger ion-android-menu" href="#"></a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="copyright fadeIn-element">
        <a href="#">The One &copy;2017 All Rights Reserved.</a>
      </div>
      <div id="subscribe-wrapper">
        <div id="newsletter">
          <div class="newsletter fadeIn-element">
            <form action="http://www.11-76.com/themes/the-one-responsive/subscribe.php" id="subscribe" method="post" name="subscribe">
              <input class="subscribe-requiredField subscribe-email" id="subscribe-email" name="subscribe-email" placeholder="Email" type="text" />
              <button class="btn btn-padding btn-pc c-btn c-btn-inverse"><span class="btn-label">Subscribe</span></button> 
              <button class="btn btn-padding btn-mobile c-btn c-btn-inverse"><span class="btn-label"><i class="ion-android-send"></i></span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>);
};