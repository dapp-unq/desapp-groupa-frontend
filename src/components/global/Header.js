import React from 'react';
import { translate } from "react-translate";
import { Link, NavLink, Redirect } from 'react-router-i18n';
import logo from './images/viandaya-logo.png';
import './css/Header.css';
import { generate } from 'shortid';

import I18n from '../I18n';

const Header = props => {
  const {t} = props
  return (
    <div className="Header">
      <div className="Register">
        <ul>
          <li key= {generate()}> <Link to='/users'> Registrarse </Link></li> 
          <li> | </li> 
          <li key= {generate()}> <Link to='/en/users'> Ingresar </Link></li>
        </ul>
      </div> 
      <header className="Logo">
        <div className="LogoImg">
          <img src={logo} alt="logo" />
        </div>
        <h2> 
          <I18n t="headerTitle" />
        </h2>
      </header>
      <div className= "PrincipalMenu">
          <ul>
            <li key= {generate()}> <Link to='/main'>ViandaYa </Link></li>
          </ul>
        </div>
    </div>
  );
}

export default translate('header')(Header);
//export default Header;
