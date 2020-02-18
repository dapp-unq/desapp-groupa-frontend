import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-i18n';
import {Form, Button, Modal, ButtonToolbar } from 'react-bootstrap';
import { generate } from 'shortid';
import { connect } from 'react-redux'

import LogInModal from './LoginModalButton'
import logo from './images/viandaya-logo.png';
import './css/Header.css';
import { mapStateToProps, mapDispatchToProps} from '../../mapMethods'
import I18n from '../I18n';

const LoginModal = props => {

    const userLogIn = {
      name: "",
      email:""
    }
  
    const updateName = event => {
      userLogIn.name = event.target.value
    }
  
    const updateEmail = event => {
      userLogIn.email = event.target.value
    }
  
    return (
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2><I18n t="logIn"/></h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label> <I18n t="userNameUsurname"/> </Form.Label>
                  <Form.Control type="text" placeholder= "First name" onChange={updateName.bind(this)}/>
                  <Form.Text className="text-muted" >
                  </Form.Text>
                </Form.Group>
  
                <Form.Group controlId="formBasicEmail">
                  <Form.Label> Email </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange= {updateEmail.bind(this)}/>
                  <Form.Text className="text-muted">
                    <I18n t="userEmailNotification"/>
                  </Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            <Button variant="success" onClick={()=> {console.log(props); props.state.getUser(userLogIn.email)}} ><I18n t="logIn"/></Button>
          </Modal.Footer>
        </Modal>
      );
  }

  export default connect(mapStateToProps, mapDispatchToProps) (LoginModal);