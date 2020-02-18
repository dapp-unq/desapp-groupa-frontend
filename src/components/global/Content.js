import React, {useState} from 'react';
import { translate } from "react-translate";
import './css/Content.css';

import TableProviders from './TableProviders';
import TableMenus from './TableMenus';
import ListProviders from './TableProviders2';
import ListUsers from './TableUser';
import MenuCards from './ListMenus';
import { generate } from 'shortid';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListaProveedores = {
		providers:[
			{
				key: generate(),
				name: 'Liza Chambi',
				city: 'Luis Guillón',
				direction: 'Vidal 1015',
				menu: 
					{
						key: generate(),
						name: 'Pizza Olivo',
						description: 'Pizza de mozzarella cubierta de aceitunas.',
						price: '120',
						amountDaily: '200',
						date1: '10/5/2019',
						date2:'10/5/2020',
					}
			},
			{
				key: generate(),
				name: 'Melody Orellana',
				city: 'Monte Grande',
				direction: 'Boulevar 1020',
				menu: 
				{
					key: generate(),
					name: 'Picante de pollo',
					description: 'Pollo con salsa picante con guarnición de arroz.',
					price: '150',
					amountDaily: '150',
					date1: '1/3/2019',
					date2:'4/8/2020',
				}
			},
			{
				key: generate(),
				name: 'Nahuel Benitez',
				city: 'Quilmes',
				direction: 'Agote 2743',
				menu: 
				{
					key: generate(),
					name: 'Pique',
					description: 'Salteado de verduras, huevo y carne asada.',
					price: '150',
					amountDaily: '150',
					date1: '1/3/2019',
					date2:'4/8/2020',
				}
			},
			{
				key: generate(),
				name: 'Elisa Nova',
				city: 'Avellaneda',
				direction: 'Av. San Martín 2001',
				menu: 
				{
					key: generate(),
					name: 'Api morado',
					description: 'Bebida de maiz morado con limón.',
					price: '150',
					amountDaily: '150',
					date1: '1/3/2019',
					date2:'4/8/2020',
				}
			},
		],
	}

const ListaMenus = {
	menus: ListaProveedores.providers.map(proveedor => proveedor.menu)
}

//const ListProviders = props => {
		// return (
		// <div>
		// 	{//props.datosProveedores.providers.map(provider => <h2>Proveedor: {provider.name}</h2>)
		// 	}
			
		// 	<button onClick={() => {
		// 		//ListaDatos.setState({providers: [props.datosProveedores.providers[0]] })}
		// 		}}>Achicar</button>
		// </div>
//}


const NewProvider = () => {
	const newProvider = {
		key: generate(),
		name: 'Nuevo Proveedor',
				city: 'Ciudad Perdida',
				direction: 'Calle Falsa 123',
				menu:
					{
						name: 'Fruta',
						description: 'Tiene mucha mucha fruta.',
						price: '100',
						amountDaily: '1000',
						date1: '27/10/2019',
						date2:'27/10/2023',
					}
	}

	return (
		<div>
			<button onClick={() => ListaProveedores.providers.push(newProvider) }> Agregar proveedor </button>
		</div>
	)
	
}


const Content = props => {
	const {t} = props
  return (
    <div>
		<div className="Content">
      		<h1> {t(props.header)} </h1>
      		<p> {t(props.description)}</p>
			<MenuCards menues= {props.menus}/>
		</div>

			<div className= "TituloFondo">
				<h2> {t(props.provTitle)}</h2>
			</div>
			
			<div className="Content">
				<TableProviders providerData = {ListaProveedores} title = ""/>
				<NewProvider/>
			</div>
			
			<div className= "TituloFondo">
				<h2> {t(props.menuTitle)}</h2>
			</div>
			
			<div className="Content">
			</div>
			<hr/>
			<div className="Content">
				<h2> Espacio de prueba de código: </h2>
			</div>
			<hr/>
			<div className="Content">
				<ListUsers/>
				<ListProviders/>
			</div>
		</div>
  );
}

export default translate('div')(Content);
//export default Content;
