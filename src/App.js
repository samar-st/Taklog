import React from 'react';
import NavbarTop from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Our-services/Services';
import Extraservices from './components/Extra-uslugi/Extraservices';
import Partners from './components/Partners/Partners';
import Advantages from './components/Advantages/Advantages';
import Portfolio from './components/Portfolio/Portfolio';
import Offices from './components/Offices/Offices';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Main />
      <About />
      <Services />
      <Extraservices />
      <Partners />
      <Advantages />
      <Portfolio />
      <Offices />
      <Footer />
    </div>
  );
}

export default App;
