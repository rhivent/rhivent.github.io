import React from "react";
import { Layout } from "antd";
import Particles from 'react-particles-js';
import reactlogo from '../../../vendor/media/image/react.png';
import html from '../../../vendor/media/image/html.png';
import npm from '../../../vendor/media/image/npm.svg';
import css from '../../../vendor/media/image/css.png';
import js from '../../../vendor/media/image/js.png';

const Dashboard = () => {
  return(<Layout style={{backgroundColor:'black'}}>
    <Particles 
      params={{
	    "particles": {
        "number": {
          "value": 20,
          "density": {
            "enable": true,
            "value_area": 500
          }
        },
        "line_linked": {
            "enable": true
        },
        "move": {
            "speed": 1,
            "out_mode": "out"
        },
        "shape": {
          "type": [
            "image",
          ],
          "image": [
            {
              "src": js,
              "height": 30,
              "width": 20
            },
            {
              "src": npm,
              "height": 20,
              "width": 20
            },
            {
              "src": html,
              "height": 30,
              "width": 20
            },
            {
              "src": css,
              "height": 30,
              "width": 20
            },
            {
              "src": reactlogo,
              "height": 20,
              "width": 20
            }
          ]
        },
        "color": {
          "value": "#CCC"
        },
        "size": {
          "value": 30,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 4,
            "size_min": 10,
            "sync": false
          }
        }
	    },
      "retina_detect": false
	    }}
    />
  </Layout>);
};

export default Dashboard;