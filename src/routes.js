import React from 'react'
import {Route,Switch} from 'react-router-dom'
import { Auth0Provider } from './contexts/auth0-context'

import App from './components/App'
import Content from './components/global/Content'
import Page404 from './components/global/Page404'
import Users from './components/global/Users'
import Main from './components/global/Main'
import Search from './components/global/Search'

const base = '/:locale(en|es)?';

const AppRoutes = () => {
    return(
    <Auth0Provider>
        <App>
            <Switch>
                <Route exact path={base} component = {Content} />
                <Route exact path={`${base}/users`} component = {Users} />
                <Route exact path={`${base}/main`} component = {Main}/>
                <Route exact path={`${base}/searchMenus`} component = {Search}/>
                <Route component = {Page404} />
            </Switch>
        </App>
    </Auth0Provider>)
}

export default AppRoutes;
