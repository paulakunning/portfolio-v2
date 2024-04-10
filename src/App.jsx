import React from 'react';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

function App ({t}) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('es')}>ES</button>
      <h1>{t("home.title")}</h1>
    </div>
  )
}

export default withNamespaces()(App);