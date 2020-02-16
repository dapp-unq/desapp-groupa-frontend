import React, {useState, useContext } from 'react' // <-- updated
import {Route,Switch} from 'react-router-dom'
import { Link, NavLink, Redirect } from 'react-router-i18n';
import { Auth0Context } from '../../contexts/auth0-context'; // <-- new
import {Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import I18n from '../I18n'
import './css/Users.css'
import { mapStateToProps, mapDispatchToProps} from '../../mapMethods';

const Users = props => {
    const auth0 = useContext(Auth0Context); // <-- new
    const newUser = {
        name: '',
        surname:'',
        //email:'',
        //phoneNumber:'',
        //location: '',
    };

    const updateName = event => {
        newUser.name = event.target.value
    };
    return (
        <div className= 'Users'>
            <h1> 
                <I18n t="userRegiter" /> 
            </h1>
            <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label> <I18n t="userName"/> </Form.Label>
                    <Form.Control type="text" placeholder= "First name" />
                    <Form.Text className="text-muted" value={newUser.name} onChange={updateName.bind(this)}>
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label> <I18n t="userSurname"/> </Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label><I18n t="userPhone"/></Form.Label>
                    <Form.Control type="email" placeholder="Enter phone" />
                </Form.Group>

                <Form.Row>
                    <Form.Group controlId="formGridState">
                    <Form.Label><I18n t="userCity"/></Form.Label>
                    <Form.Control as="select">
                        <option> <I18n t="userChooseCity"/> </option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGridCity">
                    <Form.Label><I18n t="userDirection"/></Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={props.addUser(newUser)}>
                    <Link to='login'> Sign in </Link>
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

export default connect(mapStateToProps, mapDispatchToProps) (Users);