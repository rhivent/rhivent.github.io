import React from "react";
import DrawerContainer from "./DrawerContainer";

export default (props) => {
  return(<DrawerContainer {...props}>
    <div>
    <iframe 
      style={{height:'90vh'}}
      width="100%" 
      src="https://dev.to/g33konaut/understanding-cors-aaf" frameBorder="0">
    </iframe>

    </div>
  </DrawerContainer>)
};