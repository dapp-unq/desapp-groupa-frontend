import React from 'react'
import {Route,Switch} from 'react-router-dom'
import { Auth0Provider } from './contexts/auth0-context'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps} from './mapMethods'

import App from './components/App'
import Page404 from './components/global/Page404'
import Users from './components/global/Users'
import Main from './components/global/Main'
import Search from './components/global/Search'
import Menu from './components/global/Menu'
import Order from './components/global/Order'
import LogIn from './components/global/LogIn.js'
import Provider from './components/global/Provider.js'
import LoginProvider from './components/global/LoginProvider.js'

import './components/I18n';

const base = '/:locale(es|en)?';

const AppRoutes = props => {
    return(
    <Auth0Provider>
        <App>
            <Switch>
                <Route exact path={base} component = {Main} />
                <Route exact path={`${base}/users`} component = {Users} />
                <Route exact path={`${base}/login`} component = {LogIn} />
                <Route exact path= {`${base}/main`} component = {Main}/>
                <Route exact path= {`${base}/provider`} component = {Provider}/>
                <Route exact path= {`${base}/loginProvider`} component = {LoginProvider}/>
                <Route exact path={`${base}/searchMenus`} component = {Search}/>
                <Route exact path= {`${base}/menuDescription`} component = {Menu}/>
                <Route exact path= {`${base}/order`} component = {Order}/>
                <Route component = {Page404} />
            </Switch>
        </App>
    </Auth0Provider>)
}

export default connect(mapStateToProps, mapDispatchToProps) (AppRoutes);
