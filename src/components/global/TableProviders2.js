import React from 'react';
import store from '../../store';
import { generate } from 'shortid';
import {removeFromProviders, addToProviders} from '../../actionCreators';

class ListProviders extends React.Component {
    constructor(){
        super();

        this.state = {
            providers: []
        };

        store.subscribe(() => {
            this.setState({
                providers: store.getState().providers
            })
        })
    }

    render ()
    {
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
                    { this.state.providers.map(provider => 
                        <tr key={generate()}>
                            <td>{provider.name}</td>
                            <td>{provider.city}</td>
                            <td>{provider.direction}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => this.addToProviders(this.proveedorNuevo)}>Agregar Proveedor</button>
            <button onClick={() => this.removeProvider(this.proveedorNuevo)}>Eliminar Proveedor</button>
        </div>
    )
    }

    removeProvider(provider) {
        store.dispatch(removeFromProviders(provider))

    }

    proveedorNuevo = { name: 'Nuevo Proveedor',
    city: 'Ciudad Perdida',
    direction: 'Calle Falsa 123'}


    addToProviders(provider) {
	store.dispatch (addToProviders(provider));
    }
}

export default ListProviders;