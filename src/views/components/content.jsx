import React from "react";

export default (props) => {
  return(
    <div id="containerOT">
      <div className="hero-bg hero-fullscreen">
        <div className="untitled">
          <div className="untitled__slides">
            <div className="untitled__slide">
              <div className="untitled__slideBg overlay cover-all"></div>
              <div className="untitled__slideContent">
                <p className="content-title fadeIn-element">
                  Simplicity is complex
                </p>
              </div>
            </div>
            <div className="untitled__slide">
              <div className="untitled__slideBg overlay cover-all"></div>
              <div className="untitled__slideContent">
                <p className="content-title fadeIn-element">
                  Design is a process
                </p>
              </div>
            </div>
            <div className="untitled__slide">
              <div className="untitled__slideBg overlay cover-all"></div>
              <div className="untitled__slideContent">
                <p className="content-title fadeIn-element">
                  Aesthetic is a decision
                </p>
              </div>
            </div>
            <div className="untitled__slide">
              <div className="untitled__slideBg overlay cover-all"></div>
              <div className="untitled__slideContent">
                <p className="content-title fadeIn-element">
                  Style is everything
                </p>
              </div>
            </div>
          </div>
          <div className="untitled__shutters"></div>
        </div>
      </div>
      <div className="location-modal">
        <div id="map-wrapper">
          <div id="map"></div>
        </div>
      </div>
      <div className="contact-modal">
        <div className="container">
          <div className="center-container-contact-modal">
            <div className="center-block-contact-modal">
              <div className="row center-block-contact-modal-padding-top">
                <h5>
                  Get in touch
                </h5>
                <h4>
                  Contact
                </h4>
              </div>
              <div className="row">
                <div className="contact-info-wrapper">
                  <div className="col-sm-4">
                    <div className="contact-info-description">
                      <i className="ion-ios-location-outline contact-info-description-img"></i> <span className="contact-info-text">ex Inc.<br />
                      Touchdown Dr 1176</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="contact-info-description">
                      <i className="ion-ios-email-outline contact-info-description-img"></i> <span className="contact-info-text"><a className="link-underline-contact" href=
                        "mailto:contact@domainname.com">contact@domainname.com</a></span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="contact-info-description">
                      <i className="ion-ios-telephone-outline contact-info-description-img"></i> <span className="contact-info-text">[00] 11 - 76<br />
                      [01] 11 - 76</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row contact-modal-wrapper center-block-contact-modal-padding-bottom">
                <div id="contact-form">
                  <form action="http://www.11-76.com/themes/the-one-responsive/contact.php" id="form" method="post" name="send">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <input className="requiredField name" id="name" name="name" placeholder="Name" type="text" />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <input className="requiredField email" id="email" name="email" placeholder="Email" type="text" />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <input className="requiredField subject" id="subject" name="subject" placeholder="Subject" type="text" />
                    </div>
                    <div className="make-space">
                      <textarea className="requiredField message" id="message" name="message" placeholder="Message"></textarea>
                    </div>
                    <div>
                      <button className="c-btn fullwidth" id="submit" type="submit"><span>Submit</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel-left-credits panel-left-bg-credits"></div>
      <div className="panel-right-credits">
        <div className="center-container">
          <div className="center-block">
            <div className="credits-content">
              <div className="credits-content-inner">
                <div className="height-correction">
                  <div className="text-title">
                    <h4>
                      A Very Big<br />
                      Thank You!
                    </h4>
                  </div>
                  <div className="text-txt">
                    <p>
                      Photography supplied courtesy of <a className="link-underline-credits" href="http://curtet.com/" target="_blank">Patrick Curtet</a>.<br />
                      Ken Burns version photography supplied courtesy of <a className="link-underline-credits" href="https://themeforest.net/user/ex-nihilo" target=
                        "_blank">ex-nihilo</a>.<br />
                      <span className="credits-sub">All photos on this website are copyrighted material and all rights are reserved.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel-left-instagram-feed panel-left-bg-instagram-feed"></div>
      <div className="panel-right-instagram-feed">
        <div className="center-container">
          <div className="center-block">
            <div className="instagram-feed-content">
              <div className="instagram-feed-content-inner">
                <div className="height-correction">
                  <div className="text-title">
                    <h4>
                      We're now<br />
                      on Instagram!
                    </h4>
                  </div>
                  <div className="text-txt">
                    <div id="instafeed-wrapper">
                      <div className="photos" id="instafeed"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="news-lifting">
        <div className="container-fluid" id="news">
          <div className="all-lifting-inner">
            <div className="row">
              <div className="col-md-4 post-block">
                <h1 className="post-title">
                  News
                </h1>
                <div className="post-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod in tellus in mattis. Aliquam erat volutpat.
                </div>
                <div className="owl-nav owl-nav-custom-news"></div>
              </div>
              <div className="col-md-8">
                <div className="owl-carousel" id="news-carousel">
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-inner">
                        <div className="post-content post-content-correction-news">
                          <div className="date">
                            Tuesday, October 10, 2017
                          </div>
                          <h2>
                            Simplicity is complex
                          </h2>
                          <h3>
                            Beauty / Fashion
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in dui nec erat pulvinar fringilla nec vel nisi. Proin lobortis nisi eu viverra
                            <a className="link-underline" href="#">convallis</a>.
                          </p>
                          <div className="post-more">
                            <a className="c-btn fullwidth c-btn-dark c-btn-post" data-toggle="modal" href="#newsModal-1"><span>Read more</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-news post-box-photo-news-1 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-image popup-photo-news" href="img/news/large/news-1.jpg"></a> <a className="iw-slide-right ion-share" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-inner">
                        <div className="post-content post-content-correction-news">
                          <div className="date">
                            Wednesday, October 11, 2017
                          </div>
                          <h2>
                            Design is a process
                          </h2>
                          <h3>
                            People / Life
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in dui nec erat pulvinar fringilla nec vel nisi. Proin lobortis nisi eu viverra
                            <a className="link-underline" href="#">convallis</a>.
                          </p>
                          <div className="post-more">
                            <a className="c-btn fullwidth c-btn-dark c-btn-post" data-toggle="modal" href="#newsModal-2"><span>Read more</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-news post-box-photo-news-2 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-image popup-photo-news" href="img/news/large/news-2.jpg"></a> <a className="iw-slide-right ion-share" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-inner">
                        <div className="post-content post-content-correction-news">
                          <div className="date">
                            Thursday, October 12, 2017
                          </div>
                          <h2>
                            Aesthetic is a decision
                          </h2>
                          <h3>
                            Royalty / Stock
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in dui nec erat pulvinar fringilla nec vel nisi. Proin lobortis nisi eu viverra
                            <a className="link-underline" href="#">convallis</a>.
                          </p>
                          <div className="post-more">
                            <a className="c-btn fullwidth c-btn-dark c-btn-post" data-toggle="modal" href="#newsModal-3"><span>Read more</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-news post-box-photo-news-3 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-ios-videocam popup-youtube" href="https://www.youtube.com/watch?v=r8j-MWq4HZc"></a> <a className=
                              "iw-slide-right ion-share" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-inner">
                        <div className="post-content post-content-correction-news">
                          <div className="date">
                            Friday, October 13, 2017
                          </div>
                          <h2>
                            Style is everything
                          </h2>
                          <h3>
                            Culture / Travel
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in dui nec erat pulvinar fringilla nec vel nisi. Proin lobortis nisi eu viverra
                            <a className="link-underline" href="#">convallis</a>.
                          </p>
                          <div className="post-more">
                            <a className="c-btn fullwidth c-btn-dark c-btn-post" data-toggle="modal" href="#newsModal-4"><span>Read more</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-news post-box-photo-news-4 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-image popup-photo-news" href="img/news/large/news-4.jpg"></a> <a className="iw-slide-right ion-share" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about-lifting">
        <div className="container-fluid" id="about">
          <div className="all-lifting-inner">
            <div className="row">
              <div className="col-md-4 post-block">
                <h1 className="post-title">
                  About
                </h1>
                <div className="post-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod in tellus in mattis. Aliquam erat volutpat.
                </div>
                <div className="owl-nav owl-nav-custom-about"></div>
              </div>
              <div className="col-md-8">
                <div className="owl-carousel" id="about-carousel">
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-4 post-block-correction">
                      <div className="post-inner">
                        <div className="post-content post-content-correction-about">
                          <div className="intro-years">
                            <h2 className="facts-counter-desc">
                              Years of Service
                            </h2>
                            <div className="borders-berlin"></div>
                            <h3 className="facts-counter-number">
                              12
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-8 post-block-correction">
                      <div className="post-content-correction-all"></div>
                      <div className="post-inner">
                        <div className="post-content post-content-correction-about">
                          <h2>
                            Consectetur adipiscing elit
                          </h2>
                          <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et vehicula nulla.
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et vehicula nulla. Integer tristique magna non nisl hendrerit vulputate. In
                            eleifend auctor feugiat. Nulla ligula nunc, aliquet efficitur viverra sed, fringilla sit amet sapien. Morbi luctus neque ac sapien tempor
                            blandit feugiat sed libero. Cras ut felis congue, eleifend leo ac, aliquet augue. Donec maximus sit amet tellus ut fermentum. Praesent id
                            rhoncus lorem, et pharetra enim. Mauris ut ullamcorper quam, ullamcorper auctor dui. Pellentesque tristique mauris sit amet felis ultrices
                            congue. In hac habitasse platea dictumst.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-content-correction-all"></div>
                      <div className="post-box">
                        <div className="post-box-photo-about post-box-photo-about-1 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-social-twitter" href="#"></a> <a className="ion-social-facebook" href="#"></a> <a className=
                              "iw-slide-right ion-social-instagram" href="#"></a>
                          </div>
                        </div>
                        <h2 className="post-box-photo-about-heading">
                          C. Eastwood
                        </h2>
                        <h3 className="post-box-photo-about-heading">
                          Chief Photographer
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-about post-box-photo-about-2 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-social-twitter" href="#"></a> <a className="ion-social-facebook" href="#"></a> <a className=
                              "iw-slide-right ion-social-instagram" href="#"></a>
                          </div>
                        </div>
                        <h2 className="post-box-photo-about-heading">
                          R. Redford
                        </h2>
                        <h3 className="post-box-photo-about-heading">
                          Assistant Photographer
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-content-correction-all"></div>
                      <div className="post-box">
                        <div className="post-box-photo-about post-box-photo-about-3 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-social-twitter" href="#"></a> <a className="ion-social-facebook" href="#"></a> <a className=
                              "iw-slide-right ion-social-instagram" href="#"></a>
                          </div>
                        </div>
                        <h2 className="post-box-photo-about-heading">
                          M. Scorsese
                        </h2>
                        <h3 className="post-box-photo-about-heading">
                          Advertising Photographer
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-about post-box-photo-about-4 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-social-twitter" href="#"></a> <a className="ion-social-facebook" href="#"></a> <a className=
                              "iw-slide-right ion-social-instagram" href="#"></a>
                          </div>
                        </div>
                        <h2 className="post-box-photo-about-heading">
                          W. Kar-wai
                        </h2>
                        <h3 className="post-box-photo-about-heading">
                          Editorial Photographer
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="services-lifting">
        <div className="container-fluid" id="services">
          <div className="all-lifting-inner">
            <div className="row">
              <div className="col-md-4 post-block">
                <h1 className="post-title">
                  Services
                </h1>
                <div className="post-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod in tellus in mattis. Aliquam erat volutpat.
                </div>
                <div className="owl-nav owl-nav-custom-services"></div>
              </div>
              <div className="col-md-8">
                <div className="owl-carousel" id="services-carousel">
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-inner">
                        <div className="post-content post-content-correction-services">
                          <div className="post-block-services">
                            <h4 className="post-heading">
                              Design
                            </h4>
                            <div className="post-number">
                              <span className="post-number-span">#</span>1
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod in tellus in mattis. Aliquam erat volutpat. Praesent ultricies aliquet
                              erat a <a className="link-underline" href="#">semper</a>.
                            </p>
                            <p>
                              Nullam et vehicula nulla. Integer tristique magna non nisl hendrerit vulputate. In eleifend auctor feugiat. Nulla ligula nunc, aliquet
                              efficitur <a className="link-underline" href="#">viverra sed</a>.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-inner">
                        <div className="post-content post-content-correction-services">
                          <div className="post-block-services">
                            <h4 className="post-heading">
                              Branding
                            </h4>
                            <div className="post-number">
                              <span className="post-number-span">#</span>2
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod in tellus in mattis. Aliquam erat volutpat. Praesent ultricies aliquet
                              erat a <a className="link-underline" href="#">semper</a>.
                            </p>
                            <p>
                              Nullam et vehicula nulla. Integer tristique magna non nisl hendrerit vulputate. In eleifend auctor feugiat. Nulla ligula nunc, aliquet
                              efficitur <a className="link-underline" href="#">viverra sed</a>.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-inner">
                        <div className="post-content post-content-correction-services">
                          <div className="post-block-services">
                            <h4 className="post-heading">
                              Photography
                            </h4>
                            <div className="post-number">
                              <span className="post-number-span">#</span>3
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod in tellus in mattis. Aliquam erat volutpat. Praesent ultricies aliquet
                              erat a <a className="link-underline" href="#">semper</a>.
                            </p>
                            <p>
                              Nullam et vehicula nulla. Integer tristique magna non nisl hendrerit vulputate. In eleifend auctor feugiat. Nulla ligula nunc, aliquet
                              efficitur <a className="link-underline" href="#">viverra sed</a>.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-inner">
                        <div className="post-content post-content-correction-services">
                          <div className="post-block-services">
                            <h4 className="post-heading">
                              Brand Identity
                            </h4>
                            <div className="post-number">
                              <span className="post-number-span">#</span>4
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod in tellus in mattis. Aliquam erat volutpat. Praesent ultricies aliquet
                              erat a <a className="link-underline" href="#">semper</a>.
                            </p>
                            <p>
                              Nullam et vehicula nulla. Integer tristique magna non nisl hendrerit vulputate. In eleifend auctor feugiat. Nulla ligula nunc, aliquet
                              efficitur <a className="link-underline" href="#">viverra sed</a>.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="works-lifting">
        <div className="container-fluid" id="works">
          <div className="all-lifting-inner">
            <div className="row">
              <div className="col-md-4 post-block">
                <h1 className="post-title">
                  Works
                </h1>
                <div className="post-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod in tellus in mattis. Aliquam erat volutpat.
                </div>
                <div className="owl-nav owl-nav-custom-works"></div>
              </div>
              <div className="post-content-correction-all"></div>
              <div className="col-md-8">
                <div className="owl-carousel" id="works-carousel">
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-works post-box-photo-works-1 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-image popup-photo" href="img/works/large/works-1.jpg"></a> <a className="iw-slide-right ion-share" href="#"></a>
                          </div>
                        </div>
                        <h2 className="post-box-photo-works-heading">
                          Simplicity is complex
                        </h2>
                        <h3 className="post-box-photo-works-heading">
                          Beauty / Fashion
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-works post-box-photo-works-2 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-ios-videocam popup-youtube" href="https://www.youtube.com/watch?v=r8j-MWq4HZc"></a> <a className=
                              "iw-slide-right ion-share" href="#"></a>
                          </div>
                        </div>
                        <h2 className="post-box-photo-works-heading">
                          Design is a process
                        </h2>
                        <h3 className="post-box-photo-works-heading">
                          People / Life
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-works post-box-photo-works-3 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-image popup-photo" href="img/works/large/works-3.jpg"></a> <a className="iw-slide-right ion-share" href="#"></a>
                          </div>
                        </div>
                        <h2 className="post-box-photo-works-heading">
                          Aesthetic is a decision
                        </h2>
                        <h3 className="post-box-photo-works-heading">
                          Royalty / Stock
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-works post-box-photo-works-4 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-ios-videocam popup-vimeo" href="https://vimeo.com/95515307"></a> <a className="iw-slide-right ion-share" href="#"></a>
                          </div>
                        </div>
                        <h2 className="post-box-photo-works-heading">
                          Style is everything
                        </h2>
                        <h3 className="post-box-photo-works-heading">
                          Culture / Travel
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="post-block-second">
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-works post-box-photo-works-5 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-image popup-photo" href="img/works/large/works-5.jpg"></a> <a className="iw-slide-right ion-share" href="#"></a>
                          </div>
                        </div>
                        <h2 className="post-box-photo-works-heading">
                          Simplicity is key
                        </h2>
                        <h3 className="post-box-photo-works-heading">
                          Beauty / Fashion
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 post-block-correction">
                      <div className="post-box">
                        <div className="post-box-photo-works post-box-photo-works-6 image-works">
                          <div className="hover-effect"></div>
                          <div className="icon-works">
                            <a className="iw-slide-left ion-image popup-photo" href="img/works/large/works-6.jpg"></a> <a className="iw-slide-right ion-share" href="#"></a>
                          </div>
                        </div>
                        <h2 className="post-box-photo-works-heading">
                          Less is more
                        </h2>
                        <h3 className="post-box-photo-works-heading">
                          People / Life
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};