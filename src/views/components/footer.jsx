import React from "react";
import { Drawer, Button, Space } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import "./styles/footer.style.scss";

export default () => {
  const [drawer,setDrawer] = React.useState(false);

  const onClose = () => {
    setDrawer(false);
  }

  return(<>
    <div className="border-bottom-menu bottom-position">
      <div className="fadeIn-element" id="menu">
        <nav className="menu">
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
    </div>

    {/* footer for mobile */}
    <div className="border-bottom bottom-position">
      <div className="menu-mobile">
        <nav className="menu" id="menu-mobile">
          <ul>
            <li>
              {window.screen.width < 644 ?
                <Button icon={<EllipsisOutlined />} className="menu-trigger ion-android-menu" type="text" onClick={() => setDrawer(true)} style={{transform:'translateY(1em)'}}></Button>
              : null}
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright fadeIn-element">
        <a href="https://rhivent.github.io">Customize by Riventus</a>
      </div>
      <div id="subscribe-wrapper">
        <div id="newsletter">
          <div className="newsletter fadeIn-element">
            <form action="https://riventus.vercel.app" id="subscribe" method="post" name="subscribe">
              <input className="subscribe-requiredField subscribe-email" id="subscribe-email" name="subscribe-email" placeholder="Email" type="text" />
              <button className="btn btn-padding btn-pc c-btn c-btn-inverse"><span className="btn-label">Subscribe</span></button> 
              <button className="btn btn-padding btn-mobile c-btn c-btn-inverse"><span className="btn-label"><i className="ion-android-send"></i></span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Drawer
      placement="bottom"
      onClose={onClose}
      visible={drawer}
      closable={false}
      key="bottom"
      height="4.375em"
      style={{borderRadius:'50% 0 0 0'}}
    >
      <Space>
        <Button type="text" onClick={e => e.preventDefault()}>Home</Button>
        <Button type="text" onClick={e => e.preventDefault()}>News</Button>
        <Button type="text" onClick={e => e.preventDefault()}>About</Button>
        <Button type="text" onClick={e => e.preventDefault()}>Services</Button>
        <Button type="text" onClick={e => e.preventDefault()}>Works</Button>
      </Space>
    </Drawer>
  </>);
};