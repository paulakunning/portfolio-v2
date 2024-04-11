import React from 'react'
import i18n from '../../i18n';


export default function Nav({handleChange, isChecked}) {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <nav>
      <div>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('es')}>ES</button>
      </div>
      <div>
        <p>{i18n.t('nav.link1')}</p>
        <p>{i18n.t('nav.link2')}</p>
        <p>{i18n.t('nav.link3')}</p>
        <p>{i18n.t('nav.link4')}</p>
      </div>
      <div>
        <button onClick={handleChange} checked={isChecked} >dark/light mode</button>
       {/* <input type="checkbox" id="check" onChange={handleChange} checked={isChecked} />
       <label htmlFor="check">Dark mode</label> */}
      </div>
    </nav>
  )
}
