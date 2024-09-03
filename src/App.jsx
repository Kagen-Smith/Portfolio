import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Footer from '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/components/Footer.jsx';

function App() {
  
  return (
    <>
      <Header /> 
      <Outlet /> 
      <Footer /> 
    </>
  );
}

export default App;
