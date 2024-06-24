import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en/translation.json';
import translationFR from './translations/fr/translation.json';
import translationNL from './translations/nl/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  nl: {
    translation: translationNL
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;