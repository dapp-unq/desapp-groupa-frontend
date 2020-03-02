import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCities, getMenus } from './actionCreators';
// components
import './index.css';
import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';
import store from './store';


// DESCOMENTAR ESTA LINEA CUANDO QUIERA QUE AL INICIAR LA PAGINA YA ME CARGUE LOS PROVEEDORES

store.dispatch(getMenus());
store.dispatch(getCities());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
