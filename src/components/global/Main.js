import React, {useState, useContext } from 'react' // <-- updated
import { Auth0Context } from '../../contexts/auth0-context'; // <-- new

import MenuCards from './ListMenus';
import I18n from '../I18n'
import './css/Users.css'

const Main = () => {
    const auth0 = useContext(Auth0Context); // <-- new
    
    return (
        <div className= 'Main'>
            <h1> <I18n t="mainTitle" /> </h1>
            <p> <I18n t="mainSubtitle"/> </p>
            <MenuCards/>

            <button onClick={auth0.loginWithRedirect} className="button is-danger">
                Login
            </button>
        </div>
    );
}

export default Main;