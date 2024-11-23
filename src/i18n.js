import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

const messages = {
    en,
    es,
};

const i18n = createI18n({
    locale: 'es', // Idioma por defecto
    fallbackLocale: 'en', // Idioma de respaldo
    messages,
});

export default i18n;
