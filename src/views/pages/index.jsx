import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Content from "../components/content";
import Preloader from "../components/preloader";
import NewsModal1 from "../components/newsModal1";
import NewsModal2 from "../components/newsModal2";
import NewsModal3 from "../components/newsModal3";
import NewsModal4 from "../components/newsModal4";
import Page1 from "./Page1";
import './styles/index.scss';

const App = () => {
  return(<>
    {/* <Preloader /> */}
    <Header />
    <Page1 />
    <Footer />
    {/* <Content />
    <NewsModal1 />
    <NewsModal2 />
    <NewsModal3 />
    <NewsModal4 /> */}
  </>);
};

export default App;