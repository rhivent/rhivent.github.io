import React from 'react';
import { Carousel } from 'antd';
import Dashboard from "../components/Dashboard";

const SliderContainer = (props) => {
  const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: 'calc(50vh)',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
  <Carousel autoplay style={{height:'67vh',top:'5.3em'}}>
    <Dashboard />
    <div>
      <h3 style={contentStyle}>Slide 2</h3>
    </div>
  </Carousel>
  );
}

export default SliderContainer;