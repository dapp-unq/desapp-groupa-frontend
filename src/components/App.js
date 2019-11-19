import React from 'react';
import { TranslatorProvider } from "react-translate";

//import './css/App.css';

import ButtonTs from './global/ButtonTs'
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

function getLayout(lang){
  return (<TranslatorProvider translations={require('../i18n/'+lang+'.json')}>
      <div>          
        <div className="App">
          <Header welcome="main-title"/>
          <Content header= "title"/>
          <hr/>
          <div>
            <ButtonTs name="login"/>
            <ButtonTs name="create_account"/>
          </div>
          <Footer />
        </div>
      </div>
  </TranslatorProvider>)
}


const App = () => 
  {
    let url  = window.location.href;
    if(url.search('/en') !== -1)
    {
      return getLayout('en')
    }
    else
    {
      return getLayout('es');
  }
}

export default App;
