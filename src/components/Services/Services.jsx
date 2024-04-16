import React from 'react'
import i18n from '../../i18n'
import './Services.scss'


export default function Services() {
  return (
    <div>
      <div className='service-cards-container'>
        <div className='service-card'>
          <img src="src\assets\custom-web-development.png" alt="" />
          <p>{i18n.t('services.s1')}</p>
        </div>
        <div className='service-card'>
          <img src="src\assets\full-stack-development.png" alt="" />
          <p>{i18n.t('services.s2')}</p>
        </div>
        <div className='service-card'>
          <img src="src\assets\wordpress-development.png" alt="" />
          <p>{i18n.t('services.s3')}</p>
        </div>
      </div>

      <div  className='service-cards-container'>
        <div className='service-card'>
          <img src="src\assets\seo.png" alt="" />
          <p>{i18n.t('services.s4')}</p>
        </div>
        <div className='service-card'>
          <img src="src\assets\responsive-design.png" alt="" />
          <p>{i18n.t('services.s5')}</p>
        </div>
        <div className='service-card'>
          <img src="src\assets\mantenimiento.png" alt="" />
          <p>{i18n.t('services.s6')}</p>
        </div>
      </div>


    </div>
  )
}
