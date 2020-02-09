import React from 'react'
import { TranslatorProvider } from "react-translate"
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

// Components
import './global/css/App.css'
import ButtonTs from './global/ButtonTs'
import Header from './global/Header'
import Content from './global/Content'
import Content2 from './global/Content2'
import Footer from './global/Footer'

let url  = window.location.href;

function getLayout(lang, child){

  return (<TranslatorProvider translations={require('../i18n/'+lang+'.json')}>
      <div>          
        <div className="App">
          <Header welcome="main-title"/>
          <Content2 body = {child} />
          {/*
          <Content header= "body-title" description= "descrip-text" provTitle = "prov-title" menuTitle = "menuC-title"/>
          */}
          <hr/>
          <div>
            <ButtonTs name="login"/>
            <ButtonTs name="create_account"/>
          </div>
          <hr/>
          <Footer />
        </div>
      </div>
  </TranslatorProvider>)
}


const App = props => 
  {

    const propTypes = {
      children : PropTypes.object.isRequired
    }
    const child = props.children
    let url  = window.location.href;
    if(url.search('/en') !== -1)
    {
      return getLayout('en', child)
    }
    else
    {
      return getLayout('es', child);
  }
}

export default App;
