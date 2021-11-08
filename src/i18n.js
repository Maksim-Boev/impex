import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './i18n/locales/en/translations';
import { ru } from './i18n/locales/ru/translations';
import { uk } from './i18n/locales/uk/translations';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: en,
    },
    ru: {
      translations: ru,
    },
    uk: {
      translations: uk,
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.languages = ['en', 'ru', 'uk'];

export default i18n;
