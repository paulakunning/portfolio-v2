import React from 'react'
import i18n from '../../i18n'

export default function Home() {
  return (
    <div>
        <h1>{i18n.t('home.title')} Paula </h1>
        <h2>{i18n.t('home.text1')}</h2>
        <h2>{i18n.t('home.text2')}</h2>
        <button>{i18n.t('home.button-cta')}</button>
    </div>
  )
}
