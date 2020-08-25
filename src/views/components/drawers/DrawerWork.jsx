import React from "react";
import DrawerContainer from "./DrawerContainer";

// const url = 'https://www.jagoanhosting.com/blog/cara-berpikir-kreatif/';
const url = 'https://riventus-smart-app.vercel.app/';

export default (props) => {
  return(<DrawerContainer {...props}>
    <div>
    <iframe 
      style={{height:'90vh'}}
      width="100%" 
      src={url} frameBorder="0">
    </iframe>
    </div>
  </DrawerContainer>)
};