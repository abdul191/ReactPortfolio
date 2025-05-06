import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './languages/en.json';
import urTranslation from './languages/ur.json';
import arTranslation from './languages/ar.json';

const resources = {
    en: { translation: enTranslation },
    ur: { translation: urTranslation },
    ar: { translation: arTranslation },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
