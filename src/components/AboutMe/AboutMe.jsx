import React from 'react'
import i18n from '../../i18n';


export default function AboutMe() {
  return (
    <div>
        <p>{i18n.t('about.p1')}</p>
        <p>{i18n.t('about.p2')}</p>
        <p>{i18n.t('about.p3')}</p>
        <p>{i18n.t('about.p4')}</p>
    </div>
  )
}
