import React, { useState } from 'react';
import { withNamespaces } from 'react-i18next';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import './styles/root.css'


function App () {

  const [isDark, setIsDark] = useState(false);
 

  return (
    <div className='app' data-theme={isDark ? "dark" : "light"} >
      <Nav isChecked={isDark} handleChange={()=>setIsDark(!isDark)} />
      <Home />
      <AboutMe />
      <Services />
      <Footer />
    </div>
  )
}

export default withNamespaces()(App);