import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-i18n';
import {Form, Button, Modal, ButtonToolbar } from 'react-bootstrap';

import LoginModal  from './LogInModal'
import './css/Header.css';
import I18n from '../I18n';
  
const ButtonModal= () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <ButtonToolbar>
        <Button variant="link" onClick={() => setModalShow(true)}>
          <I18n t="headerLogIn" />
        </Button>
        <LoginModal
          show={true} //modalShow
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    )
  }

  export default ButtonModal;