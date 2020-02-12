import React, {useState, useContext } from 'react' // <-- updated
import { Pagination, Card, Form, Nav, Navbar, NavDropdown, FormControl, Button, Container, Row, Col} from 'react-bootstrap';
import { generate } from 'shortid';

import I18n from '../I18n'
import './css/Search.css'

const Search = () => {
    
    return (
        <div className= 'Search'>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"> <i>ViandaYa!</i> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item> <I18n t="searchName" /> </NavDropdown.Item>
                        <NavDropdown.Item> <I18n t="searchCategory" /> </NavDropdown.Item>
                        <NavDropdown.Item> <I18n t="searchCity" /> </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <div className= 'Filters'>
                <Container fluid>
                    <Row>
                        <Col sm={2}>
                            <div>
                                <ul>
                                    <p> <I18n t="searchFilter"/>: </p>
                                    <li key= {generate()}> <I18n t="searchCategory"/>:
                                    </li> 
                                    <li> <I18n t="searchRank"/>: 
                                        <li>
                                        <I18n t="searchMax"/>: 
                                        </li>
                                        <li>
                                        <I18n t="searchMin"/>: 
                                        </li>
                                    </li> 
                                    <li key= {generate()}> <I18n t="searchPrice"/>: </li>
                                </ul>
                            </div> 

                        </Col>
                        <Col sm={10}> 
                            <h3> <I18n t="searchTitle" /> </h3>
                            <MenusParaVerComoQuedaLaBusqueda/>
                            <Paginacion/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

const Paginacion = () => 
{
    let active = 2;
    let items = [];
    let maxPag = 4;
    for (let number = 1; number <= maxPag; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }

    const paginationBasic = (
    <div>
        <Pagination>{items}</Pagination>
    </div>
    );

    return (paginationBasic);
}

const MenusParaVerComoQuedaLaBusqueda= () => {
       const menusPrueba = {
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

    return (
        <div className= "CardsMenu">
            { menusPrueba.menus.map(menu =>
                    <Card className= "Card" style={{ width: '15rem'}}>
                    <Card.Img variant="top" src={menu.image} />
                    <Card.Body style= {{padding: '0.7rem'}}>
                        <Card.Title>{menu.name}</Card.Title>
                        <Card.Text> {menu.description}</Card.Text>
                        <Button variant="primary" > Ver menú</Button>
                    </Card.Body>
                    </Card>
        )}
        </div>
  )
}



export default Search;