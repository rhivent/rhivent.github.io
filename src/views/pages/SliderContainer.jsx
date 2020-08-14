import React from 'react';
import { Carousel } from 'antd';
import Dashboard from "../components/Dashboard";

const SliderContainer = (props) => {
  const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: 'calc(50vh)',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel autoplay style={{height:'100vh'}}>
    <div>
      <Dashboard />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
  );
}

export default SliderContainer;