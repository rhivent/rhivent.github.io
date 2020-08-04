import React from 'react';
import Video from './vendor/media/mp4/bg.mp4';

const FrontPage = () => {
  return(<>
    <div className="overlay"></div>
    <video playsInline="playsinline" autoPlay muted="muted" loop="loop">
      <source src={Video} type="video/mp4" />
    </video>

  <div className="masthead">
    <div className="masthead-bg"></div>
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-12 my-auto" style={{height:'100vh'}}>
          <div className="masthead-content text-white py-5 py-md-0">
            <h1 className="mb-3">Coming Soon!</h1>
            <p className="mb-5">We're working hard to finish the development of this site. Our target launch date is
              <strong>January 2019</strong>! Sign up for updates using the form below!</p>
            <div className="input-group input-group-newsletter">
              <input type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="submit-button" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button" id="submit-button">Notify Me!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="social-icons">
    <ul className="list-unstyled text-center mb-0">
      <li className="list-unstyled-item">
        <a href="https://rhivent.github.io">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="list-unstyled-item">
        <a href="https://rhivent.github.io">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="list-unstyled-item">
        <a href="https://rhivent.github.io">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  </div>
  </>);
};

export default FrontPage;