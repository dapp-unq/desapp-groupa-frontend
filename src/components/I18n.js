import { createI18n } from 'react-router-i18n';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['en', 'es'];

// Dictionary of translations
const translations = {
  en: {
    userRegiter: 'User register',
    mainTitle : 'Welcome to Vianda Ya!',
  },
  es: {
    userRegiter: 'Registro de usuario',
    mainTitle: 'Bienvenidos a Vianda Ya!',
  }
}

const I18n = createI18n(
  locales,
  translations,
);

export default I18n;