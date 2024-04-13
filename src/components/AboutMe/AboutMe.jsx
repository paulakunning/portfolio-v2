import React from 'react'
import i18n from '../../i18n';
import './About.scss'


export default function AboutMe() {
  return (
    <div className='about-wrapper'>
      <div>
        <h3 className='section-title'>{i18n.t('about.title')}</h3>
      </div>
      <div className='about-content'>
        <div>
          <img src="src\assets\paulakunning-profilepic.png" alt="" />
          </div>
        <div className='text-container'>
          <p>{i18n.t('about.p1')}</p>
          <p>{i18n.t('about.p2')}</p>
          <p>{i18n.t('about.p3')}</p>
          <p>{i18n.t('about.p4')}</p>
        </div>
      </div>
    </div>
  )
}
