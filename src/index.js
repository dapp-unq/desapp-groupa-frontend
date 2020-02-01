import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

// components
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {getProvider, getUser} from './actionCreators';
import AppRoutes from './routes'

// DESCOMENTAR ESTA LINEA CUANDO QUIERA QUE AL INICIAR LA PAGINA YA ME CARGUE LOS PROVEEDORES
//store.dispatch (getProvider());
store.dispatch (getUser());

ReactDOM.render(
<Provider store={store}>
    <Router>
        <AppRoutes/>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
