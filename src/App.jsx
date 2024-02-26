import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Section from './Components/Section';
import RelatedDeal from './Components/RelatedDeal';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';

const App = () => {

  return (
    <>
      <Navbar />
      <Header />
      <Section />
      <RelatedDeal />
      <SignUp />
      <Footer />
    </>
  );
};

export default App;
