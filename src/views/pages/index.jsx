import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
// import Content from "../components/content";
// import Preloader from "../components/preloader";
// import NewsModal1 from "../components/newsModal1";
// import NewsModal2 from "../components/newsModal2";
// import NewsModal3 from "../components/newsModal3";
// import NewsModal4 from "../components/newsModal4";
import SliderContainer from "./SliderContainer";
import './styles/index.scss';

const App = () => {
  return(<>
    {/* <Preloader /> */}
    <Header />
    <SliderContainer />
    <Footer />
    {/* <Content />
    <NewsModal1 />
    <NewsModal2 />
    <NewsModal3 />
    <NewsModal4 /> */}
  </>);
};

export default App;