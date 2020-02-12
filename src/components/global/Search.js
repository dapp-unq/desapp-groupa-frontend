import React, {useState, useContext } from 'react' // <-- updated
import { Pagination, Card, Form, Nav, Navbar, NavDropdown, FormControl, Button, Container, Row, Col} from 'react-bootstrap';
import { generate } from 'shortid';

import ListMenus from './ListMenus'
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
                            <ListMenus/>
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

export default Search;