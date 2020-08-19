import React from "react";
import { Button, Space } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import DrawerContainer from "./drawers/DrawerContainer";
import DrawerAbout from "./drawers/DrawerAbout";
import DrawerBlog from "./drawers/DrawerBlog";
import DrawerNews from "./drawers/DrawerNews";
import DrawerWork from "./drawers/DrawerWork";
import "./styles/footer.style.scss";

export default () => {
  const [menuOpt,setmenuOpt] = React.useState({
    about : false,
    blog : false,
    news : false,
    mobile: false,
    work : false,
  });

  const handleClickMenu = (type = '') => {
    switch (type) {
      case '':
        setmenuOpt({});
        break;
      default:
        setmenuOpt({...menuOpt, [type]:true});
        break;
    }
  };

  const propsDrawerMenu = {menuOpt,setmenuOpt};

  return(<>
    <div className="border-bottom-menu bottom-position">
      <div className="fadeIn-element" id="menu">
        <nav className="menu">
          <ul>
            <li>
            <Button type='text' style={{color:'#fff'}}>Home</Button>
            </li>
            <li>
            <Button type='text' onClick={() => handleClickMenu('news')} style={{color:'#fff'}}>News</Button>
            </li>
            <li>
            <Button type='text' onClick={() => handleClickMenu('about')} style={{color:'#fff'}}>About</Button>
            </li>
            <li>
            <Button type='text' onClick={() => handleClickMenu('blog')} style={{color:'#fff'}}>Blog</Button>
            </li>
            <li>
            <Button type='text' onClick={() => handleClickMenu('work')} style={{color:'#fff'}}>Work</Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <DrawerAbout {...propsDrawerMenu} type="about" />
    <DrawerBlog {...propsDrawerMenu} type="blog" />
    <DrawerNews {...propsDrawerMenu} type="news" />
    <DrawerWork {...propsDrawerMenu} type="work" />

    {/* footer for mobile */}
    <div className="border-bottom bottom-position">
      <div className="menu-mobile">
        <nav className="menu" id="menu-mobile">
          <ul>
            <li>
              {window.screen.width < 644 ?
                <Button 
                  type='text'
                  onClick={() => handleClickMenu('mobile')}
                  icon={<EllipsisOutlined />} 
                  className="menu-trigger ion-android-menu" 
                  style={{transform:'translateY(1em)'}}
                ></Button>
              : null}
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright fadeIn-element">
        <a href="https://rhivent.github.io">Customized by Riventus</a>
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
    
    <DrawerContainer
      {...propsDrawerMenu}
      type="mobile"
      others={{
        height:"4.375em",
        closable:false
      }}
      >
      <Space>
        <Button type='text'>Home</Button>
        <Button type='text' onClick={() => handleClickMenu('news')}>News</Button>
        <Button type='text' onClick={() => handleClickMenu('about')}>About</Button>
        <Button type='text' onClick={() => handleClickMenu('blog')}>Blog</Button>
        <Button type='text' onClick={() => handleClickMenu('work')}>Works</Button>
      </Space>
    </DrawerContainer>
  </>);
};