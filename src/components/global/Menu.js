import React, {useState, useContext } from 'react' // <-- updated
import { Image, Card, Form, Nav, Navbar, NavDropdown, FormControl, Button, Container, Row, Col} from 'react-bootstrap';
import { Link, NavLink, Redirect } from 'react-router-i18n';
import { generate } from 'shortid';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps} from '../../mapMethods';
import I18n from '../I18n'
import './css/Menu.css'

const Menu = props => {
    return (
        <div className= 'Menu'>
            <h1>Página del menú: </h1>
            <div>
                <Container fluid>
                    <Row>
                        <Col sm={2}>
                            <Image src={props.selectedMenu.image} fluid />
                        </Col>
                        <Col sm={10}>
                            <h3> {props.selectedMenu.name} </h3>
                            <p> {props.selectedMenu.description} </p>
                            <p> <I18n t="menuCantMin"/>1: {props.selectedMenu.offer1.quantity} <I18n t="searchPrice"/>: {props.selectedMenu.offer1.price} </p>
                            <p> <I18n t="menuCantMin"/>2: {props.selectedMenu.offer2.quantity} <I18n t="searchPrice"/>: {props.selectedMenu.offer2.price} </p>
                            <p> <I18n t="searchRank"/>: 0 </p>
                            <p> <I18n t="userDirection"/>: {props.provider.city + ', ' + props.provider.location} </p>
                            <p> <I18n t="provider"/>: {props.provider.name} </p>
                            {/* <p> <I18n t="menuMissingAmount"/>: Falta la cantidad necesaria para el próximo precio mínimo.</p> */}
                        </Col>
                    </Row>
                </Container>
                <button variant="success"> <Link to='/order'> <I18n t="purchase"/></Link> </button>
            </div>
        </div>)
}

export default connect(mapStateToProps, mapDispatchToProps) (Menu);