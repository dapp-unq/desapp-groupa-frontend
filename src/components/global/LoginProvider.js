import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import './css/LoginProvider.css';

const LoginProvider = props => {
    return ( 
        <div className= 'LoginProvider'>
            <h1> <I18n t="logInHello"/> </h1>
            <h2> {props.provider.name} </h2>
            {props.provider.logo}
            <h4> {props.provider.description} </h4>
            <h4> <I18n t="userDirection"/>: {props.provider.city}, {props.provider.location}</h4>
            <h4> {props.provider.website} </h4>
            <h4> {props.provider.email} </h4>
            <h4> {props.provider.phoneNumber} </h4>
            <h4> <I18n t="schedule"/>: </h4>
            <li>
                {props.provider.openingHoursDays.map(datetime => (
                    <ul> <I18n t= {datetime.day} />: {datetime.openingHoursDays} - {datetime.closingHours}</ul>
                ) )}
            </li>
            <h4> <I18n t="deliveryCities"/> </h4>
            <li>
                {props.provider.deliveryCities.map(city => (
                    <ul> {city}</ul>
                ) )}
            </li>
            <h4> {props.provider.phoneNumber} </h4>
            <hr/>
            <h3> <I18n t="balance"/>: {props.provider.balance} </h3>
            <hr/>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginProvider);