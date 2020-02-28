import React from 'react';
import { generate } from 'shortid';
import './css/TableMenus.css';

const TableHeader = () => 
{
    return (
    	<thead>
    	    <tr>
    			<th>Nombre</th>
    			<th>Descripcion</th>
                <th>Precio por unidad</th>
                <th>Stock diario</th>
    			<th>Fecha de vigencia</th>
                <th>Fecha límite</th>
    		</tr>
    	</thead>
	)
}

const TableBody = props => 
{   
    const rows = props.menuData.menus.map(menu => {
    	return (
    		<tr key={generate()}>
    		<td>{menu.name}</td>
    		<td>{menu.description}</td>
            <td>{menu.price}</td>
            <td>{menu.amountDaily}</td>
            <td>{menu.date1}</td>
            <td>{menu.date2}</td>
    	</tr>
    	)
    })
        
	return <tbody>{rows}</tbody>
}

const TableMenus = props => {
  return (
    <div className="TableMenus">
        <table>
		    <TableHeader />
		    <TableBody menuData = {props.menuData}/>
	    </table>
    </div>
  )
}

export default TableMenus;
