import React from 'react';
import { generate } from 'shortid'

class Datos extends React.Component 
{
  constructor(props)
  {
	  super(props);

        this.state = 
        {
			providers: [{
                key: generate(),
                name: 'Liza Chambi',
                city: 'Luis Guillón',
		        direction: 'Vidal 1015',
			    },{
                key: generate(),
                name: 'Melody Orellana',
                city: 'Monte Grande',
                direction: 'Boulevar 1020',
				},{
                key: generate(),
                name: 'Nahuel Benitez',
                city: 'Quilmes',
                direction: 'Agote 2743',
				},{
                key: generate(),
                name: 'Elisa Nova',
                city: 'Avellaneda',
                direction: 'Av. San Martín 2001',
				},
            ],
        }
    }

    agregarProveedor() {
        this.state.providers.push({ name: 'Nuevo Proveedor',
        city: 'Ciudad Perdida',
        direction: 'Calle Falsa 123',})
        return this.state.providers
    }

    eliminarProveedor() {
        this.state.providers.pop()
        return this.state.providers
    }

	render() {
		return <div>
		    {this.state.providers.map(provider => <h3>Proveedor: {provider.name}</h3>)}
		    <button onClick={() => this.setState({providers: [] })}>Eliminar proveedores</button>
            <button onClick={() => this.setState({providers: this.eliminarProveedor() })}>Eliminar proveedor</button>
            <button onClick={() => this.setState({providers: this.agregarProveedor()})}> Agregar proveedor </button>
        </div>
	}

}

export default Datos;
