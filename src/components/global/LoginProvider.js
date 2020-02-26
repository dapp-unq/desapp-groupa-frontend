import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import './css/LoginProvider.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { NavLink } from 'react-router-i18n';

const LoginProvider = props => {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const removeProvider = () => {
        props.removeProvider(props.provider.email);
        setOpen(false);
    };

    return ( 
        <div className= 'LoginProvider'>
            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <Image src={props.provider.logo} fluid />
                    </Col>
                    <Col sm={10}>
                        <h2> {props.provider.name} </h2>
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
                <li> <I18n t= {datetime.day}/>: {datetime.openingHours.slice(0,6)+ ' Hs.'} a {datetime.closingHours.slice(0,6)+ ' Hs.'}</li>
            ) )}
            <h5> <I18n t="deliveryCities"/> </h5>
            {props.provider.deliveryCities && props.provider.deliveryCities.map(city => (
                <li> {city}</li>
            ) )}
            <h5> <I18n t="userPhone"/>: {props.provider.phoneNumber} </h5>
            <hr/>
            <h5> <I18n t="balance"/>: {props.provider.balance} </h5>
            <hr/>
            <div>
                <NavLink ignoreLocale to='editProvider'><I18n t="edit"/> </NavLink>
            </div>
            <div className='RemoveProvider'>
                <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                    <I18n t="unsubscribe"/>
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title"><I18n t="removeProviderAlertTitle"/></DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <I18n t="removeProviderAlert"/>
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button color="primary" autoFocus onClick={() => removeProvider()}>
                        <NavLink ignoreLocale to='main'> OK </NavLink>
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginProvider);