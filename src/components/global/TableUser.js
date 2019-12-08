import React from 'react';
import { generate } from 'shortid';
import {removeFromProviders, addToProviders, getProvider, getUser} from '../../actionCreators';
import { connect } from 'react-redux';

const ListUsers = props =>
{
    return (
        <div className="TableUsers">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    { props.user.map(user => 
                        <tr key={generate()}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.location}</td>
                            <td>{user.phoneNumber}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        providers: state.providers,
        user: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromProviders(provider) {
            dispatch (removeFromProviders(provider))
        },
        addToProviders(provider) {
            dispatch (addToProviders(provider))
        },
        getProvider() {
            dispatch (getProvider())
        },
        getuser() {
            dispatch(getUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListUsers);