import React from 'react';
import { generate } from 'shortid';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps} from '../../mapMethods';

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


export default connect(mapStateToProps, mapDispatchToProps) (ListUsers);