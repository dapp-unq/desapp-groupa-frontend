import React, { useState } from 'react';
import { Link, NavLink, Redirect } from 'react-router-i18n';
import { generate } from 'shortid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Pagination from "@material-ui/lab/Pagination";

import './css/ListMenus.css';
import { mapStateToProps, mapDispatchToProps } from '../../mapMethods';

const MenuCards = props => {
    // ESTA CONTANTE "" SOLO ES DE PRUEBA, LUEGO SE USARÁ LAS LLAMADAS AL SERVIDOR
   


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




    // estas son las funciones de filtro, estas tiene que venir desde props. 

    // const category = "Hamburguesa"
    // const city = "Quilmes"
    // const minRank = "4"
    // const maxRank = "5"
    // const minPrice = "65"
    // const maxPrice = "100"
    // Estados de la paginacion.
    const elementsPerPage = 20;
    const pageCount = Math.ceil(props.menues.length/elementsPerPage);
    const [currentPage, setCurrentPage] = React.useState(1);
    const lastIndex = currentPage * elementsPerPage;
    const firstIndex = lastIndex - elementsPerPage;

    return (
        <div>
            <div className="CardsMenu">
                {props.menues.slice(firstIndex, lastIndex).map(menu =>
                    <Card className="Card" style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={menu.image} />
                        <Card.Body style={{ padding: '0.7rem' }}>
                            <Card.Title>{menu.name}</Card.Title>
                            <Card.Text> {menu.description}</Card.Text>
                            <Button variant="warning" onClick={() => props.selectMenu(menu)}> <Link to='menuDescription'> Ver menú </Link></Button>
                        </Card.Body>
                    </Card>)
                }
            </div>
            <Pagination
                onChange={(_event, page) => setCurrentPage(page)}
                count={pageCount}
            />
        </div>
    )
}

//export default translate('div')(MenuCards); 
export default MenuCards;
