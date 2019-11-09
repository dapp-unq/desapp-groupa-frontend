import React from 'react';
import logo from './images/viandaya-logo.png';
import './css/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <header className="Logo">
        <img src={logo} alt="logo" />
        <h2>
          Bienvenidos a Vianda Ya!
        </h2>
      </header>
    </div>
  );
}

export default Header;
