import React, { useContext } from 'react'; // <-- updated
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-i18n';
import { Auth0Context } from '../../contexts/auth0-context'; // <-- new
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import './css/Users.css';


const Users = props => {
    const auth0 = useContext(Auth0Context); // <-- new

    const [name, updateName] = React.useState("");
    const [surname, updateSurname] = React.useState("");
    const [email, updateEmail] = React.useState("");
    const [phoneNumber, updatePhone] = React.useState("");
    const [city, updateCity] = React.useState("");
    const [location, updateLocation] = React.useState("");

    const newUser = {
        name: name,
        surname: surname,
        email: email,
        phoneNumber: phoneNumber,
        location: `${city}, ${location}`
    };

    const register = () => {
        props.addUser(newUser)
        props.getUser(newUser.email)
    };

    return (
        <div className='Users'>
            <h1>
                <I18n t="userRegiter" />
            </h1>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label> <I18n t="userName" /> </Form.Label>
                    <Form.Control type="text" placeholder="First name" value={name} onChange={(event)=>updateName(event.target.value)} />
                    <Form.Text className="text-muted" >
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicSurname">
                    <Form.Label> <I18n t="userSurname" /> </Form.Label>
                    <Form.Control type="text" placeholder="Last name" value={surname} onChange={(event)=>updateSurname(event.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event)=>updateEmail(event.target.value)} />
                    <Form.Text className="text-muted">
                        <I18n t="userEmailNotification" />
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label><I18n t="userPhone" /></Form.Label>
                    <Form.Control type="email" placeholder="Enter phone" value={phoneNumber} onChange={(event)=> updatePhone(event.target.value)} />
                </Form.Group>

                <Form.Row>
                    <Form.Group controlId="formGridState">
                        <Form.Label><I18n t="userCity" /></Form.Label>
                        <Form.Control as="select" placeholder="Select City" value={city} onChange={(event) => updateCity(event.target.value)}>
                            <option> </option>
                            <option> Quilmes Oeste </option>
                            <option> Ezpeleta </option>
                            <option> Bernal </option>
                            <option> Wilde </option>
                            <option> Don Bosco </option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGridCity">
                        <Form.Label><I18n t="userDirection" /></Form.Label>
                        <Form.Control value={location} onChange={(event) => updateLocation(event.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={() => register()}>
                    <NavLink ignoreLocale to='login'> Sign in </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);