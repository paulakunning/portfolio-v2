import React, { useState } from 'react'
import i18n from '../../i18n';
import './Nav.scss'
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function Nav({handleChange, isChecked, isOpen}) {

  const [ active, setActive ] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActive(current => !current);
  }

  return (
    <nav className={isOpen ? 'show' : 'close'} >
      <div className='lang-btns-container'>
        <button className={active === true ? "active" : ""} onClick={() => changeLanguage('en')}>EN</button>
        <button className={active === false ? "active" : ""} onClick={() => changeLanguage('es')}>ES</button>
      </div>
      <div className='links-container'>
        <a href='#services'>{i18n.t('nav.link2')}</a>
        <a>{i18n.t('nav.link3')}</a>
        <a href='#about'>{i18n.t('nav.link1')}</a>
        <a>{i18n.t('nav.link4')}</a>
      </div>
      <div className='dark-mode-btn-container'>
        <button  className='dark-mode-btn' onClick={handleChange} checked={isChecked} > {isChecked ? <BsFillSunFill color='#1B1522' size={25} /> : <FaMoon color='#543F5E' size={25} /> } 
        </button>
      </div>
    </nav>
  )
}
