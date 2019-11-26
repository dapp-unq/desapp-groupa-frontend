import React from 'react';
import { translate } from "react-translate";
import logo from './images/viandaya-logo.png';
import './css/Header.css';

const Header = props => {
  const {t} = props
  return (
    <div className="Header">
      <div className="Language">
        <p> Español </p>
      </div> 
      <header className="Logo">
        <img src={logo} alt="logo" />
        <h2> {t(props.welcome)}
        </h2>
      </header>
    </div>
  );
}

export default translate('header')(Header);
//export default Header;
