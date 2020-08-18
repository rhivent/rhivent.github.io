import React from "react";
import { Drawer, Button, Space } from "antd";

export default (props) => {
  const [drawer,setDrawer] = React.useState(false);
  
  const onClose = () => {
    setDrawer(false);
  };

  return(
  <Drawer
    placement="bottom"
    onClose={onClose}
    visible={props.drawerup}
    closable={false}
    key="bottom"
    height="4.375em"
    style={{borderRadius:'50% 0 0 0'}}
  >
    <Space>
      asdad
    </Space>
  </Drawer>
  );
};