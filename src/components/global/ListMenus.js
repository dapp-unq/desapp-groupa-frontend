import React, {useState} from 'react';
import { Link, NavLink, Redirect } from 'react-router-i18n';
import { generate } from 'shortid';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import './css/ListMenus.css';
import { mapStateToProps, mapDispatchToProps} from '../../mapMethods';

const MenuCards = props => {
    // ESTA CONTANTE "" SOLO ES DE PRUEBA, LUEGO SE USARÁ LAS LLAMADAS AL SERVIDOR
    const Menus = {
        menus: [
        {
            key: generate(),
            name: 'Pizza Olivo',
            description: 'Pizza de mozzarella cubierta de aceitunas.',
            price: '120',
            amountDaily: '200',
            date1: '10/5/2019',
            date2:'10/5/2020',
        },
        {
            key: generate(),
            name: 'Picante de pollo',
            description: 'Pollo con salsa picante con guarnición de arroz.',
            price: '150',
            amountDaily: '150',
            date1: '1/3/2019',
            date2:'4/8/2020',
        },
        {
            key: generate(),
            name: 'Pique',
            description: 'Salteado de verduras, huevo y carne asada.',
            price: '150',
            amountDaily: '150',
            date1: '1/3/2019',
            date2:'4/8/2020',
        },
        {
            key: generate(),
            name: 'Api morado',
            description: 'Bebida de maiz morado con limón.',
            price: '150',
            amountDaily: '150',
            date1: '1/3/2019',
            date2:'4/8/2020',
        }
    ]}
    /* NO BORRAR!!! ESTE ES EL CÓDIGO QUE LLAMA AL SERVIDOR COMO CORRESPONDE
    return ( <div className= "CardsMenu">
        { 
            props.providers.map(provider => provider.currentMenus.map ( menu =>
                <Card className= "Card" style={{ width: '15rem'}}>
                <Card.Img variant="top" src={menu.image} />
                <Card.Body style= {{padding: '0.7rem'}}>
                    <Card.Title>{menu.name}</Card.Title>
                    <Card.Text> {menu.description}</Card.Text>
                    <Button variant="warning" onClick={()=> props.selectMenu(menu)}> <Link to='menuDescription'> Ver menú </Link></Button>
                </Card.Body>
                </Card>) 
            )
        }
    </div>
  )
  */

    return (
        <div className= "CardsMenu">
            { Menus.menus.map(menu =>
                <Card className= "Card" style={{ width: '15rem'}}>
                    <Card.Img variant="top" src={menu.image} />
                    <Card.Body style= {{padding: '0.7rem'}}>
                        <Card.Title>{menu.name}</Card.Title>
                        <Card.Text> {menu.description}</Card.Text>
                        <Button variant="warning" onClick={()=> props.selectMenu(menu)}> <Link to='menuDescription'> Ver menú </Link></Button>
                    </Card.Body>
                </Card>)
            }
        </div>
    )
}

//export default translate('div')(MenuCards); 
export default connect(mapStateToProps, mapDispatchToProps) (MenuCards);
