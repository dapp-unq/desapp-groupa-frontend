import React from 'react'; // <-- updated
import { Col, Container, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-i18n';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import './css/Menu.css';


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
                            <p> <I18n t="userDirection"/>: {props.selectedProvider.city + ', ' + props.selectedProvider.location} </p>
                            <p> <I18n t="provider"/>: {props.selectedProvider.name} </p>
                            {/* <p> <I18n t="menuMissingAmount"/>: Falta la cantidad necesaria para el próximo precio mínimo.</p> */}
                        </Col>
                    </Row>
                </Container>
                <button variant="success"> <Link to='/order'> <I18n t="purchase"/></Link> </button>
            </div>
        </div>)
}

export default connect(mapStateToProps, mapDispatchToProps) (Menu);