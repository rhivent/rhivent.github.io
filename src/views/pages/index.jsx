import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import SliderContainer from "./SliderContainer";
import './styles/index.scss';

const App = () => {
  return(<>
    <Header />
    <SliderContainer />
    <Footer />
  </>);
};

export default App;