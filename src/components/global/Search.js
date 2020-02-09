import React, {useState, useContext } from 'react' // <-- updated

import I18n from '../I18n'
import './css/Search.css'
import { Form } from 'react-bootstrap';

const Search = () => {
    
    return (
        <div className= 'Search'>
            <h1> 
                <I18n t="searchTitle" /> 
            </h1>
        </div>
    );
}

export default Search;