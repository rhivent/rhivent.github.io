import React from "react";

export default (props) => {
  return(<>
  <div aria-hidden="true" class="news-modal modal fade" id="newsModal-2" role="dialog" tabindex="-1">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <div class="modal-content-date">
                Wednesday, October 11, 2017
              </div>
              <h2>
                Design is a process
              </h2>
              <p class="item-intro">
                People / Life
              </p>
              <img alt="News Modal" class="img-responsive" src="img/news/news-2.jpg" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod in tellus in mattis. Aliquam erat volutpat. Praesent ultricies aliquet erat a semper. Maecenas
                risus ex, suscipit cursus felis vitae, iaculis tempor dolor. In dignissim accumsan ullamcorper. Aliquam nec augue id mauris <a class="link-underline" href=
                "#">convallis venenatis</a>.
              </p><button class="c-btn fullwidth c-btn-dark c-btn-post" data-dismiss="modal" type="button"><span>Close</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>);
};