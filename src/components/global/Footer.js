import React from 'react'
import { Link, NavLink, Redirect } from 'react-router-i18n';
import { generate } from 'shortid'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps} from '../../mapMethods'

import './css/Footer.css'
import I18n from '../I18n.js'

const Footer = props => 
{
  return (
    <div className="Footer">
      Viandas Ya - 2019-2020
      <div className= "Language">
        <p><I18n t="footerLanguage"/></p>
        <ul>
          <li key= {generate()}> <NavLink ignoreLocale to="/es/"> <I18n t="footerLanguageSpanish" /> </NavLink> </li>
          <li>-</li> 
          <li key= {generate()}> <NavLink ignoreLocale to="/en/"> <I18n t="footerLanguageEnglish" /> </NavLink> </li>
        </ul>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (Footer);