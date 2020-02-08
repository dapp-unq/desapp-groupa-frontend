import React from 'react'
import { Link, NavLink, Redirect } from 'react-router-i18n'
import { generate } from 'shortid'

import './css/Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      Viandas Ya - 2019-2020
      <div className= "Language">
        <p>Idioma:</p>
        <ul>
          <li key= {generate()}> <Link to='/es/users'> Español </Link></li> 
          <li>-</li> 
          <li key= {generate()}> <Link to='/en/users'> Inglés </Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
