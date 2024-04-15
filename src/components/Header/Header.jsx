import React, { useState } from 'react'
import i18n from '../../i18n'
import Nav from '../Nav/Nav'
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import './Header.scss'

export default function Header( {isChecked, handleChange}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    
  }

  return (
    <div className={ isOpen? 'header-wrapper wrapper-mobile-menu' : 'header-wrapper'}>
      <div className='header-container'>
        <div className='mobile-menu-container'>
          <button className='mobile-menu' onClick={() => handleIsOpen()}  >{isOpen ? <IoCloseOutline size={25} /> : <IoMenuOutline size={25} />}</button>
        </div>
        <Nav isChecked={isChecked} handleChange={handleChange} isOpen={isOpen} />
        <div className={isOpen ? 'hidden' : 'header-content'}>
          <div>  <h1>{i18n.t('home.title')} Paula </h1>
            <h2>{i18n.t('home.text1')}</h2>
            <h2>{i18n.t('home.text2')}</h2>
            <button className='contact-btn'>{i18n.t('home.button-cta')}</button>
          </div>
          <div className='avatar'>     
            <img src='src\assets\paulakunning-avatar.png' alt="" /></div>
        </div>

      </ div>
    </div>
  )
}