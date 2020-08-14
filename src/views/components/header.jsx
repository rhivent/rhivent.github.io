import React from "react";
import { Button } from "antd";
import MyLogo from "../../vendor/media/image/mylogo.svg";
import Modal from "antd/lib/modal/Modal";

export default (props) => {
  const [loc,setLoc] = React.useState(false);
  const [contact,setcontact] = React.useState(false);

  return(<>
    <div className="border-top top-position">
      <div className="social-icons-wrapper fadeIn-element">
        <ul className="social-icons">
          <li className="social-icon">
            <a href="https://twitter.com/riventusaha" target="_blank" rel="noopener noreferrer"><span className="ion-social-twitter"></span></a>
          </li>
          <li className="social-icon">
            <a href="https://www.facebook.com/riventus.aritonang" target="_blank" rel="noopener noreferrer"><span className="ion-social-facebook"></span></a>
          </li>
          <li className="social-icon">
            <a href="mailto:ventusmn@gmail.com" target="_blank" rel="noopener noreferrer"><span className="ion-email-unread"></span></a>
          </li>
          <li className="social-icon">
            <a href="https://youtube.com/channel/UCBsSxrVeP_FgLIUTuRKS-tA" target="_blank" rel="noopener noreferrer"><span className="ion-social-youtube"></span></a>
          </li>
          <li className="social-icon">
            <a href="https://linkedin.com/in/riventusaritonang" target="_blank" rel="noopener noreferrer"><span className="ion-social-linkedin"></span></a>
          </li>
          <li className="social-icon">
            <a className="ion-social-github" href="https://github.com/rhivent" target="_blank" rel="noopener noreferrer"></a>
          </li>
        </ul>
      </div>
      <div className="instagram-feed-mobile-launcher toggle-instagram-feed-content fadeIn-element">
        <a className="ion-social-instagram" href="https://instagram.com/rhivent" target="_blank" rel="noopener noreferrer"></a>
      </div>
      <div className="template-title fadeIn-element">
        <img src={MyLogo} alt="Riventus" width="15%" />
      </div>
      <div className="location-launcher fadeIn-element">
        <a className="location-modal-launcher"><Button type="text" onClick={() => setLoc(true)} style={{color:'whitesmoke'}}>Location</Button></a>
      </div>
      <div className="contact-launcher fadeIn-element">
        <a class="contact-modal-launcher"><Button type="text" onClick={() => setcontact(true)} style={{color:'whitesmoke'}}>Contact</Button></a>
      </div>
    </div>
    <Modal 
      visible={loc}
      onCancel={() => setLoc(false)}
      footer={null}
      centered
    >
      Location
    </Modal>
    <Modal 
      visible={contact}
      onCancel={() => setcontact(false)}
      footer={null}
      centered
    >
      Contact
    </Modal>
  </>);
};