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
                        <tr key={generate()}>
                            <td>{props.user.name}</td>
                            <td>{props.user.surname}</td>
                            <td>{props.user.location}</td>
                            <td>{props.user.phoneNumber}</td>
                        </tr>
                </tbody>
            </table>
            </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps) (ListUsers);