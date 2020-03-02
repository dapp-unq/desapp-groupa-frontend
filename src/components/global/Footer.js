import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-i18n';
import { generate } from 'shortid';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n.js';
import './css/Footer.css';


const Footer = props => {
  return (
    <div className="Footer">
      Viandas Ya - 2019-2020
      <div className="Language">
        <p><I18n t="footerLanguage" /></p>
        <ul>
          <li key={generate()}> <NavLink ignoreLocale to="/es/"> <I18n t="footerLanguageSpanish" /> </NavLink> </li>
          <li>-</li>
          <li key={generate()}> <NavLink ignoreLocale to="/en/"> <I18n t="footerLanguageEnglish" /> </NavLink> </li>
        </ul>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);