import React from 'react';
import { Carousel } from 'antd';
import Dashboard from "../components/dashboard/Dashboard";
import Dashboard2 from "../components/dashboard/Dashboard2";

const SliderContainer = (props) => {

  return (
  <Carousel autoplay style={{height:'67vh',top:'5.3em'}}>
    <div>
      <Dashboard />
    </div>
    <div>
      <Dashboard2 />
    </div>
  </Carousel>
  );
}

export default SliderContainer;