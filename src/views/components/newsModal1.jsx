import React from "react";

export default (props) => {
  return(<>
    <div aria-hidden="true" className="news-modal modal fade" id="newsModal-1" role="dialog" tabIndex="-1">
      <div className="modal-content">
        <div className="close-modal" data-dismiss="modal">
          <div className="lr">
            <div className="rl"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="modal-body">
                <div className="modal-content-date">
                  Tuesday, October 10, 2017
                </div>
                <h2>
                  Simplicity is complex
                </h2>
                <p className="item-intro">
                  Beauty / Fashion
                </p>
                <img alt="News Modal" className="img-responsive" src="img/news/news-1.jpg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod in tellus in mattis. Aliquam erat volutpat. Praesent ultricies aliquet erat a semper. Maecenas
                  risus ex, suscipit cursus felis vitae, iaculis tempor dolor. In dignissim accumsan ullamcorper. Aliquam nec augue id mauris <a className="link-underline" href=
                  "#">convallis venenatis</a>.
                </p><button className="c-btn fullwidth c-btn-dark c-btn-post" data-dismiss="modal" type="button"><span>Close</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};