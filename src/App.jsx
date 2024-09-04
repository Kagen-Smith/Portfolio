

import { Outlet } from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import React from 'react';

class App {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 800px)").matches };
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 800px)").addEventListener('change', handler);
  }



  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default App;
