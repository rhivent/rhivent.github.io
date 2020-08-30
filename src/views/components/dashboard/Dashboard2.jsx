import React from "react";
import { Layout } from "antd";
import Particles from 'react-particles-js';

export default () => {
  return (
  <Layout style={{backgroundColor:'peru'}}>
    <Particles
      params={{
        "particles": {
          "number": {
            "value": 50
          },
          "size": {
            "value": 3
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          }
        }
      }}
    />
  </Layout>
  )
};