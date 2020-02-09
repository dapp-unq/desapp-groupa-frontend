import { createI18n } from 'react-router-i18n';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['es', 'en'];

// Dictionary of translations
const translations = {
  es: {
    userRegiter: 'Registro de usuario',
    headerTitle: 'Bienvenidos a Vianda Ya!',
    mainSubtitle: 'Los restaurantes mejor calificados para tu deleite'
  },
  en: {
    userRegiter: 'User register',
    headerTitle : 'Welcome to Vianda Ya!',
    mainTitle : '',
    mainSubtitle: 'The best rated restaurants for your delight'
  }
}

const I18n = createI18n(
  locales,
  translations,
);

export default I18n;