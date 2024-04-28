import React, { useState } from 'react';
import { withNamespaces } from 'react-i18next';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './styles/_root.scss'


function App () {

  const [isDark, setIsDark] = useState(true);
 
  
  return (
    <div className='app' data-theme={isDark ? "dark" : "light"} >
      <Header isChecked={isDark} handleChange={()=>setIsDark(!isDark)} />
      <Services />
      <Projects />
      <TechStack />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default withNamespaces()(App);