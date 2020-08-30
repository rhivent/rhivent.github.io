import React from "react";
import { Modal,Carousel } from "antd";

const dataImg = [
  'https://i.ibb.co/fqdQ6hm/Screenshot-2020-08-18-Asosiasi-Wisata-Medis-Indonesia.jpg',
  'https://i.ibb.co/7pRmLZV/Screenshot-2020-08-18-Hayuning-Technology-Blockchain-Enterprise-Solutions-and-Consultancy.png',
  'https://i.ibb.co/fN74cvX/Screenshot-2020-08-18-TVAPP.png',
  'https://i.ibb.co/7Rpgykv/Screenshot-2020-08-18-Weather-PWA.png'
];

export default (props) => {
  const { menuOpt,setmenuOpt } = props;

  return(
  <Modal
    width="80vw"
    centered
    visible={menuOpt.blog}
    onCancel={() => setmenuOpt( menuOpt => ({...menuOpt, blog : false}) )}
    footer={null}
    style={{overflow:'scroll',height:'90vh'}}
  >
    <Carousel autoplay className="carousel-container">
    {dataImg.map((x,indx) => (
      <div key={indx}>
        <img src={x} alt={x.split('/').pop()} width="100%" />
      </div>))}
    </Carousel>
  </Modal>)
};