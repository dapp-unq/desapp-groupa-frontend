import React, {useState} from 'react';
import { translate } from "react-translate";
import './css/ListMenus.css';
import { generate } from 'shortid';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button } from 'react-bootstrap';

const MenuCards = props => {

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

    const {t} = props;
    return (
        <div className= "CardsMenu">
        { Menus.menus.map(menu =>
                <Card className= "Card" style={{ width: '18rem'}}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{menu.name}</Card.Title>
                    <Card.Text> {menu.description}</Card.Text>
                    <Button variant="primary">Ver menú</Button>
                </Card.Body>
                </Card>
        )}
        </div>
  )
}

export default translate('div')(MenuCards);
