import React, {useState, useContext } from 'react' // <-- updated
import { Pagination, Card, Form, Nav, Navbar, NavDropdown, FormControl, Button, Container, Row, Col} from 'react-bootstrap';
import { generate } from 'shortid';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps} from '../../mapMethods';
import I18n from '../I18n'
import './css/Menu.css'

const Menu = props => {
    
    return (
        <div className= 'Menu'>
            <h1>Página del menú: </h1>
            <p> {props.selectedMenu.name} </p>
        </div>)
}

export default connect(mapStateToProps, mapDispatchToProps) (Menu);