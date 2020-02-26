import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import './css/LoginProvider.css';

const LoginProvider = props => {
    return ( 
        <div className= 'LoginProvider'>
            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <Image src={props.provider.logo} fluid />
                    </Col>
                    <Col sm={10}>
                        <h2> <I18n t="provHello"/> {props.provider.name} </h2>
                        <h4> {props.provider.description} </h4>
                    </Col>
                </Row>
            </Container>
            <h5> <I18n t="userDirection"/>: {props.provider.city}, {props.provider.location}</h5>
            <h5> <I18n t="webSite"/>: {props.provider.website} </h5>
            <h5> Email: {props.provider.email} </h5>
            <h5> <I18n t="userPhone"/>: {props.provider.phoneNumber} </h5>
            <h5> <I18n t="schedule"/>: </h5>
            {props.provider.openingHoursDays && props.provider.openingHoursDays.map(datetime => (
                <li> <I18n t= {datetime.day}/>: {datetime.openingHours.slice(0,6)+ ' Hs.'} a {datetime.closingHours.lice(0,6)+ ' Hs.'}</li>
            ) )}
            <h5> <I18n t="deliveryCities"/> </h5>
            {props.provider.deliveryCities && props.provider.deliveryCities.map(city => (
                <li> {city}</li>
            ) )}
            <h5> <I18n t="userPhone"/>: {props.provider.phoneNumber} </h5>
            <hr/>
            <h5> <I18n t="balance"/>: {props.provider.balance} </h5>
            <hr/>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginProvider);