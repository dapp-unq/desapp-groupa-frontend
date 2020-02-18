import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-i18n';
import { generate } from 'shortid';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import './css/Header.css';
import logo from './images/viandaya-logo.png';
import ResponsiveDialog from './LogInModal2';


const Header = props => {
  return (
    <div className="Header">
      <div className="Register">
        <ul>
          <li key= {generate()}> <Link to='users'> <I18n t="headerRegister"/></Link></li> 
          <li> | </li> 
          <li key= {generate()}> <ResponsiveDialog/> </li>
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
            <li key= {generate()}> <Link to='main'> ViandaYa </Link></li>
            <li key= {generate()}> <Link to='searchMenus'> Busqueda </Link></li>
          </ul>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);
