import React, {useState, useContext } from 'react' // <-- updated
import {Route,Switch} from 'react-router-dom'
import { Auth0Context } from '../../contexts/auth0-context'; // <-- new

import I18n from '../I18n'
import './css/Users.css'

const Users = () => {
    const auth0 = useContext(Auth0Context); // <-- new
    
    return (
        <div className= 'Users'>
            <h1> 
                <I18n t="userRegiter" /> 
            </h1>
            <button onClick={auth0.loginWithRedirect} className="button is-danger">
                Login
            </button>
        </div>
    );
}

export default Users