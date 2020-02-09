import { createI18n } from 'react-router-i18n';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['es', 'en'];

// Dictionary of translations
const translations = {
  es: {
    userRegiter: 'Registro de usuario',
    headerTitle: 'Bienvenidos a Vianda Ya!',
    mainTitle : '¡Pedi YA tu delivery online!',
    mainSubtitle: 'Los proveedores de viandas mejor calificados para tu deleite.',
    mainMenuTitle: 'Nuestras viandas más pedidas',
    searchTitle: 'Resultado de búsqueda:',
    userName:'Nombre y apellido:',
    userNamePlaceholder:'Ingrese un nombre...',
    userEmailPlaceholder:'Ingrese un email...',
    userPhone:'Teléfono:',
    userDirection:'Dirección y altura:',
    userCity:'Localidad:',
  },
  en: {
    userRegiter: 'User register',
    headerTitle : 'Welcome to Vianda Ya!',
    mainTitle : 'Order your delivery online NOW!',
    mainSubtitle: 'The best rated restaurants for your delight',
    mainMenuTitle: 'Our most requested food',
    searchTitle: 'Search result',
    userName:'Name and surname:',
    userNamePlaceholder:'Imput a name...',
    userEmailPlaceholder:'Enter email...',
    userPhone:'Phone:',
    userDirection:'Location:',
    userCity:'City:',
  }
}

const I18n = createI18n(
  locales,
  translations,
);

export default I18n;