import React, { useState } from 'react';
import { withNamespaces } from 'react-i18next';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import './styles/_root.scss'


function App () {

  const [isDark, setIsDark] = useState(false);
 

  return (
    <div className='app' data-theme={isDark ? "dark" : "light"} >
      <Header isChecked={isDark} handleChange={()=>setIsDark(!isDark)} />
      <AboutMe />
      <Services />
      <Footer />
    </div>
  )
}

export default withNamespaces()(App);