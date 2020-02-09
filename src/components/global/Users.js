import React, {useState, useContext } from 'react' // <-- updated
import {Route,Switch} from 'react-router-dom'
import { Auth0Context } from '../../contexts/auth0-context'; // <-- new
import {Form, Button } from 'react-bootstrap';

import I18n from '../I18n'
import './css/Users.css'

const Users = () => {
    const auth0 = useContext(Auth0Context); // <-- new
    
    return (
        <div className= 'Users'>
            <h1> 
                <I18n t="userRegiter" /> 
            </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> <I18n t="userName"/> </Form.Label>
                    <Form.Control type="email" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>
                Intento de Auth0:
            </p>
            <button onClick={auth0.loginWithRedirect} className="button is-danger">
                Login
            </button>
        </div>
    );
}

export default Users