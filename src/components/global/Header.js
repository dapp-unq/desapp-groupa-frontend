import React from 'react';
import { translate } from "react-translate";
import logo from './images/viandaya-logo.png';
import './css/Header.css';

const ChangeLanguage = () => {

}

const Header = props => {
  const {t} = props
  return (
    <div className="Header">
      <div className="Language">
        <p> Idioma: </p>
        <button onClick={() => ChangeLanguage('/en')}> English </button>
        <button onClick={() => ChangeLanguage('/es')}> Español </button>
      </div> 
      <header className="Logo">
        <div className="LogoImg">
          <img src={logo} alt="logo" />
        </div>
        <h2> {t(props.welcome)}
        </h2>
      </header>
    </div>
  );
}

export default translate('header')(Header);
//export default Header;
