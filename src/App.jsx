import React from 'react';
import { withNamespaces } from 'react-i18next';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';


function App () {
 

  return (
    <>
      <Nav />
      <Home />
      <AboutMe />
      <Services />
      <Footer />
    </>
  )
}

export default withNamespaces()(App);