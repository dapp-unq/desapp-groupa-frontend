import React from 'react';
// import './css/TableProviders.css';
import { generate } from 'shortid';

import Datos from './Content'

const TableHeader = () => 
{
    return (
    	<thead>
    	    <tr>
    			<th>Nombre</th>
    			<th>Localidad</th>
          <th>Direccion</th>
    		</tr>
    	</thead>
	)
}

const TableBody = props => 
{   
    const rows = props.providerData.providers.map(provider => {
    	return (
    		<tr key={generate()}>
    		<td>{provider.name}</td>
    		<td>{provider.city}</td>
        <td>{provider.direction}</td>
    	</tr>
    	)
    })
        
	return <tbody>{rows}</tbody>
}

const TableProviders = props => {
  return (
    <div className="TableProviders">
        <table>
		    <TableHeader />
		    <TableBody providerData = {props.providerData}/>
	    </table>
    </div>
  )
}

export default TableProviders;
