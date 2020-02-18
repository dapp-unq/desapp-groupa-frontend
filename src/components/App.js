import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import PropTypes from 'prop-types';
import React from 'react';
import { TranslatorProvider } from "react-translate";
import Content2 from './global/Content2';
// Components
import './global/css/App.css';
import Footer from './global/Footer';
import Header from './global/Header';


let url  = window.location.href;

function getLayout(lang, child){

  return (<MuiPickersUtilsProvider utils={DateFnsUtils}> <TranslatorProvider translations={require('../i18n/'+lang+'.json')}>
      <div>          
        <div className="App">
          <Header welcome="main-title"/>
          <Content2 body = {child} />
          {/*
          <Content header= "body-title" description= "descrip-text" provTitle = "prov-title" menuTitle = "menuC-title"/>
          */}
          <hr/>
          <Footer />
        </div>
      </div>
  </TranslatorProvider> </MuiPickersUtilsProvider>)
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
