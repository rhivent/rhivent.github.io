import React from "react";

export default (props) => {
  return(<>
    <div class="preloader-bg"></div>
    <div id="preloader">
      <div id="preloader-status">
        <div class="preloader-position loader">
          <span></span>
        </div>
      </div>
    </div>
  </>);
};