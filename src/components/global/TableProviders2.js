import React from 'react';
import { generate } from 'shortid';
import {removeFromProviders, addToProviders, getProvider} from '../../actionCreators';
import { connect } from 'react-redux';

const ListProviders = props =>
{
    const proveedorNuevo = { name: 'Nuevo Proveedor',
    city: 'Ciudad Perdida',
    direction: 'Calle Falsa 123'};

    return (
        <div className="TableProviders">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Localidad</th>
                        <th>Direccion</th>
                    </tr>
                </thead>
                <tbody>
                    { props.providers.map(provider => 
                        <tr key={generate()}>
                            <td>{provider.name}</td>
                            <td>{provider.city}</td>
                            <td>{provider.direction}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => props.addToProviders(proveedorNuevo)}>Agregar Proveedor</button>
            <button onClick={() => props.removeFromProviders(proveedorNuevo)}>Eliminar Proveedor</button>
            <button onClick={() => props.getProvider()}>Cargar proveedores</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        providers: state.providers
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListProviders);