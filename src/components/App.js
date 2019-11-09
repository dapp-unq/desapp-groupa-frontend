import React from 'react';
//import './css/App.css';

import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
