import React, {useState, useContext } from 'react' // <-- updated
import { Auth0Context } from '../../contexts/auth0-context'; // <-- new

import MenuCards from './ListMenus';
import I18n from '../I18n'
import './css/Main.css'

const Main = () => {
    return (
    <div>
        <div className= 'Main'>
            <h1><i> <I18n t="mainTitle" /> </i></h1>
            <h3> <I18n t="mainSubtitle"/> </h3>
        </div>
        <div className= "TitlesBackground">
			<h2> <I18n t="mainMenuTitle" /> </h2>
		</div>
        <div className= 'Main'>
            <MenuCards/>
        </div>
    </div>
    )
}

export default Main;