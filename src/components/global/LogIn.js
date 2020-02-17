import React, {useState, useContext } from 'react' // <-- updated
import {Route,Switch} from 'react-router-dom'
import { Link, NavLink, Redirect } from 'react-router-i18n';
import { Auth0Context } from '../../contexts/auth0-context'; // <-- new
import {Form, Button, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { generate } from 'shortid';

import I18n from '../I18n'
import './css/LogIn.css'
import { mapStateToProps, mapDispatchToProps} from '../../mapMethods';

const LogIn = props => {
    return ( 
        <div className= 'LogIn'>
            <h1> <I18n t="logInHello"/> </h1>
            <h2> {props.user.surname}, {props.user.name} </h2>
            <h3> {props.user.email} </h3>
            <h3> {props.user.phoneNumber} </h3>
            <hr/>
            <h3> <I18n t="logInOrderHistory"/>: </h3>
            <hr/>

            <div>
               {props.user.orderHistory && props.user.orderHistory.map(order => (
                <ListGroup className="my-2" key={generate()}>
                    <p><I18n t="logInOrderMenu"/>: order.menu.name </p>
                    <p><I18n t="logInOrderDateAndHour"/>: order.orderDateAndHour</p>
                    <p><I18n t="logInOrderStatus"/>: order.status</p>
                    <p><I18n t="searchRank"/>: order.ranking</p>
                    <p><I18n t="searchPrice"/>: order.value</p>
                </ListGroup>
                ))}
            </div>

            {/* <div>
                <ListGroup horizontal='sm' className="my-2" key={generate()}>
                    {props.orderHistory.map(order => (
                    <ListGroup.Item>
                       <p><I18n t="logInOrderMenu"/>: order.menu.name </p>
                       <p><I18n t="logInOrderDateAndHour"/>: order.orderDateAndHour</p>
                       <p><I18n t="logInOrderStatus"/>: order.status</p>
                       <p><I18n t="searchRank"/>: order.ranking</p>
                       <p><I18n t="searchPrice"/>: order.value</p>
                    </ListGroup.Item>))}
                </ListGroup>
            </div> */}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (LogIn);