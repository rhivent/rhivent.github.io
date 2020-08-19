import React from "react";
import { Carousel,Row,Col,Card } from "antd";
import DrawerContainer from "./DrawerContainer";
import { DataFooter } from '../footer';
import '../styles/drwnews.scss';
import styled, {css} from "styled-components";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const ContainerNews = styled.div`
  display:grid;
  grid-template-areas: "main tr tr tr tr"
                       "main tr tr tr tr";
  grid-gap:1em;
  justify-content:start; 
`;
const MainNews = styled.div`
  grid-area : main;
  align-self:center;
`;
const TrendNTopNews = styled.div`
  grid-area : tr;
`;
const TrendNews = styled.div`
  display:flex;
`;
const TopNews = styled.div`
  display:flex;
`;
const ContentWrap = styled.div`
  display:flex;
  width:83em;
  overflowX:scroll,
`;
const ImageCard = styled.div`
  width:100%;

  ${props => 
    css`
      background-image:url(${props.image});
      background-repeat: no-repeat;
      background-position: center;
    `
  }
`;

const CardCustom = () => (
  <Card
    style={{width:400}}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    >
    <Card.Meta
      title="Card title"
      description="This is the description"
    />
  </Card>);

export default (props) => {
  const dataAPI = React.useContext(DataFooter);

  React.useEffect(() => {
    if(Object.keys(dataAPI).length){
      console.log(dataAPI);
    }
  },[dataAPI]);

  return(<DrawerContainer {...props}>
    <ContainerNews>
      <MainNews>
        <CardCustom />
      </MainNews>
      <TrendNTopNews>
        <TrendNews>
          <ContentWrap>
            <CardCustom />
            <CardCustom />
            <CardCustom />
            <CardCustom />
            <CardCustom />
            <CardCustom />
          </ContentWrap>
        </TrendNews>
        <TopNews>
          <ContentWrap>
            <CardCustom />
            <CardCustom />
            <CardCustom />
          </ContentWrap>
        </TopNews>
      </TrendNTopNews>
    </ContainerNews>
  </DrawerContainer>)
};