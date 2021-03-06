import { createI18n } from 'react-router-i18n';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['es', 'en'];

// Dictionary of translations
const translations = {
  es: {
    userRegiter: 'Registro de usuario',
    headerTitle: 'Bienvenidos a Vianda Ya!',
    headerRegister: 'Registrarse',
    headerLogIn: 'Iniciar sesión',
    mainTitle: '¡Pedi YA tu delivery online!',
    mainSubtitle: 'Los proveedores de viandas mejor calificados por nuestros clientes.',
    mainMenuTitle: 'Nuestras viandas más pedidas',
    searchTitle: 'Resultado de búsqueda:',
    searchFilter: 'FILTROS',
    searchCategory: 'Categoría',
    searchName: 'Nombre',
    searchCity: 'Localidad',
    searchPrice: 'Precio',
    searchRank: 'Puntuación',
    searchMin: 'Mínimo',
    searchMax: 'Máximo',
    userName: 'Nombre',
    userSurname: 'Apellido',
    userNameUsurname: 'Nombre y apellido',
    userNamePlaceholder: 'Ingrese su nombre...',
    userSurnamePlaceholder: 'Ingrese su apellido...',
    userEmailPlaceholder: 'Ingrese su email...',
    userEmailNotification: 'Nunca compartiremos su correo electrónico con nadie.',
    userPhone: 'Teléfono:',
    userDirection: 'Dirección',
    userCity: 'Localidad:',
    userChooseCity: 'Elegir localidad...',
    logInHello: '¡Hola!',
    logInOrderHistory: 'Tu historial de compras',
    logInOrderMenu: 'Menú',
    logInOrderDateAndHour: 'Fecha y hora',
    logInOrderStatus: 'Estado del pedido',
    logIn: 'Ingresar',
    footerLanguage: 'Idioma:',
    footerLanguageSpanish: 'Español',
    footerLanguageEnglish: 'Inglés',
    menuCantMin: 'Cantidad mínima',
    provider: 'Proveedor',
    menuMissingAmount: 'Cantidad de ventas faltantes para llegar al próximo precio mínimo',
    purchase: 'Comprar',
    orderAmount: 'Cantidad',
    typeDelivery: 'Forma de entrega',
    dateDelivery: 'Fecha de entrega',
    hourDelivery: 'Horario de entrega',
    dateOrder: 'Fecha del pedido',
    timeOrder: 'Horario del pedido',
    orderNow: 'Pedir ya!',
    orderDeliveryHome: 'Entrega a domicilio',
    orderDeliverySucursale: 'Retirar en sucursal',
    filter: 'Filtrar',
    providerTitle: 'Registro de proveedores',
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miercoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    schedule: 'Horarios',
    openingHours: 'Horario de apertura',
    closingHours: 'Horario de cierre',
    day:'Día',
    addProvider: 'Registrarse como proveedor',
    MONDAY: 'Lunes',
    TUESDAY: 'Martes',
    WEDNESDAY: 'Miercoles',
    THURSDAY: 'Jueves',
    FRIDAY: 'Viernes',
    SATURDAY: 'Sábado',
    SUNDAY: 'Domingo',
    deliveryCities: 'Entrega a domicilio en las zonas de:',
    balance:'Saldo',
    webSite:'Página web',
    provHello:'Hola ',
    unsubscribe:'Quiero darme de baja',
    removeProviderAlert:'Si elimina su cuenta de proveedor, todos su historial en ViandaYa será borrada sin posibilidad de recuperar su información. ViandaYa no se hace responzable si el usuario no retiró todo el saldo disponible en su cuenta antes de su eliminación.',
    removeProviderAlertTitle:'¿Está seguro de eliminar su cuenta?',
    removeProvider:'Sí, quiero borrar mi cuenta',
    edit:'Editar ',
    editProviderTitle:'Editar proveedor',

  },
  en: {
    userRegiter: 'User register',
    headerTitle: 'Welcome to Vianda Ya!',
    headerRegister: 'Register',
    headerLogIn: 'Log In',
    mainTitle: 'Order your delivery online NOW!',
    mainSubtitle: 'The best rated restaurants by our clients.',
    mainMenuTitle: 'Our most requested food',
    searchTitle: 'Search result',
    searchFilter: 'FILTERS',
    searchCategory: 'Category',
    searchName: 'Name',
    searchCity: 'City',
    searchPrice: 'Price',
    searchRank: 'Ranking',
    searchMin: 'Minimum',
    searchMax: 'Maximum',
    userName: 'Name',
    userSurname: 'Surname',
    userNameUsurname: 'Fullname',
    userNamePlaceholder: 'Imput first name...',
    userSurnamePlaceholder: 'Imput last name...',
    userEmailPlaceholder: 'Enter email...',
    userEmailNotification: "We'll never share your email with anyone else.",
    userPhone: 'Phone:',
    userDirection: 'Location',
    userCity: 'City:',
    userChooseCity: 'Choose..',
    logInHello: 'Hello!',
    logInOrderHistory: 'Order history',
    logInOrderMenu: 'Menu',
    logInOrderDateAndHour: 'Date and hour',
    logInOrderStatus: 'Order status',
    logIn: 'Log in',
    footerLanguage: 'Language:',
    footerLanguageSpanish: 'Spanish',
    footerLanguageEnglish: 'English',
    menuCantMin: 'Minimum amount',
    provider: 'Provider',
    menuMissingAmount: 'Missing amount to reach the minimum',
    purchase: 'Purchase',
    orderAmount: 'Amount',
    typeDelivery: 'Delivery method',
    dateDelivery: 'Delivery date',
    timeDelivery: 'Delivery time',
    dateOrder: 'Order date',
    timeOrder: 'Order time',
    orderNow: 'Order now!',
    orderDeliveryHome: 'Home delivery',
    orderDeliverySucursale: 'Branch office',
    filter: 'Filter',
    providerTitle: 'Provider register',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    schedule: 'Schedule',
    openingHours: 'Opening hours',
    closingHours: 'Closing hours',
    day:'Day',
    addProvider: 'Register',
    MONDAY: 'Monday',
    TUESDAY: 'Tuesday',
    WEDNESDAY: 'Wednesday',
    THURSDAY: 'Thursday',
    FRIDAY: 'Friday',
    SATURDAY: 'Saturday',
    SUNDAY: 'Sunday',
    deliveryCities: 'Home delivery in the areas of:',
    balance:'Balance',
    webSite:'Web site',
    provHello:'Hello ',
    unsubscribe:'I want to unsubscribe',
    removeProviderAlert:'If you delete your provider account, all your history in ViandaYa will be deleted without the possibility of recovering your information. ViandaYa is not liable if the user did not withdraw all the available balance in his account before its elimination',
    removeProviderAlertTitle:'Are you sure you want to delete your account?',
    removeProviderAgree:'Yes, I want to delete my account',
    edit:'Edit ',
    editProviderTitle:'Edit provider',
  }
}

const I18n = createI18n(
  locales,
  translations,
);

export default I18n;