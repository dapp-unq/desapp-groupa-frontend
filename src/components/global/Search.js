import MaterialFormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import './css/Search.css';
import ListMenus from './ListMenus';

const menues = [
    {
        key: generate(),
        name: 'Pizza Olivo',
        description: 'Pizza de mozzarella cubierta de aceitunas.',
        image: 'https://http2.mlstatic.com/bulldog-ingles-impresionantes-cachorritos-pedigree-fcm-msi-D_NQ_NP_788315-MLM27934260786_082018-F.webp',
        category: [
            "HAMBURGUESA"
          ],
        ranking: 5,
        location: "QUILMES",
        price: '120',
        dailyStock: '200',
        offer1: {
            "quantity": 10,
            "price": 180
        },
        offer2: {
            "quantity": 80,
            "price": 150
        },
        date1: '10/5/2019',
        date2: '10/5/2020',
    },
    {
        key: generate(),
        name: 'Pizza Muzzarella',
        description: 'Pizza de mozzarella cubierta de aceitunas.',
        image: 'https://http2.mlstatic.com/bulldog-ingles-impresionantes-cachorritos-pedigree-fcm-msi-D_NQ_NP_788315-MLM27934260786_082018-F.webp',
        category: [
            "HAMBURGUESA"
          ],
        ranking: 5,
        location: "QUILMES",
        price: '50',
        dailyStock: '200',
        offer1: {
            "quantity": 10,
            "price": 180
        },
        offer2: {
            "quantity": 80,
            "price": 150
        },
        date1: '10/5/2019',
        date2: '10/5/2020',
    },
    {
        key: generate(),
        name: 'Pizza jamon y queso',
        description: 'Pizza de mozzarella cubierta de aceitunas.',
        image: 'https://http2.mlstatic.com/bulldog-ingles-impresionantes-cachorritos-pedigree-fcm-msi-D_NQ_NP_788315-MLM27934260786_082018-F.webp',
        category: [
            "HAMBURGUESA"
          ],
        ranking: 5,
        location: "QUILMES",
        price: '100',
        dailyStock: '200',
        offer1: {
            "quantity": 10,
            "price": 180
        },
        offer2: {
            "quantity": 80,
            "price": 150
        },
        date1: '10/5/2019',
        date2: '10/5/2020',
    },
    {
        key: generate(),
        name: 'Picante de pollo',
        description: 'Pollo con salsa picante con guarnición de arroz.',
        image: 'https://http2.mlstatic.com/bulldog-ingles-impresionantes-cachorritos-pedigree-fcm-msi-D_NQ_NP_788315-MLM27934260786_082018-F.webp',
        category: [
            "HAMBURGUESA"
          ],
        ranking: 4,
        location: "WILDE",
        price: '160',
        dailyStock: '150',
        offer1: {
            "quantity": 20,
            "price": 140
        },
        offer2: {
            "quantity": 100,
            "price": 120
        },
        date1: '1/3/2019',
        date2: '4/8/2020',
    },
    {
        key: generate(),
        name: 'Pique',
        description: 'Salteado de verduras, huevo y carne asada.',
        image: 'https://http2.mlstatic.com/bulldog-ingles-impresionantes-cachorritos-pedigree-fcm-msi-D_NQ_NP_788315-MLM27934260786_082018-F.webp',
        category: [
            "HAMBURGUESA","PIZZA"
          ],
        ranking: 3,
        location: "QUILMES",
        price: '150',
        dailyStock: '150',
        offer1: {
            "quantity": 30,
            "price": 145
        },
        offer2: {
            "quantity": 100,
            "price": 130
        },
        date1: '1/3/2019',
        date2: '4/8/2020',
    },
    {
        key: generate(),
        name: 'Api morado',
        description: 'Bebida de maiz morado con limón.',
        image: 'https://http2.mlstatic.com/bulldog-ingles-impresionantes-cachorritos-pedigree-fcm-msi-D_NQ_NP_788315-MLM27934260786_082018-F.webp',
        category: [
            "PIZZA"
          ],
        ranking: 2,
        location: "BERNAL",
        price: '100',
        dailyStock: '150',
        offer1: {
            "quantity": 50,
            "price": 80
        },
        offer2: {
            "quantity": 120,
            "price": 60
        },
        date1: '1/3/2019',
        date2: '4/8/2020',
    }
]

const Search = props => {
    const [category, updateCategory] = React.useState("");
    const [searchName, updateSearchName] = React.useState("");
    const [city, updateCity] = React.useState("");
    const [minPrice, updateMinPrice] = React.useState("");
    const [maxPrice, updateMaxPrice] = React.useState("");
    const [minRank, updateMinRank] = React.useState("");
    const [maxRank, updateMaxRank] = React.useState("");
    const [menusToShow, updateMenusToShow] = React.useState(props.menus);

    const filterByName = (menu) => menu.name.toLowerCase().includes(searchName.toLowerCase())
    const filterByCategory = (menu) => category === "" || menu.category.includes(category.toUpperCase())
    const filterByCity = (menu) => city === "" || menu.location === city.toUpperCase()
    const filterByMinRank = (menu) => minRank === "" || menu.ranking >= Number(minRank)
    const filterByMaxRank = (menu) => maxRank === "" || menu.ranking <= Number(maxRank)
    const filterByMinPrice = (menu) => minPrice === "" || menu.price >= Number(minPrice)
    const filterByMaxPrice = (menu) => maxPrice === "" || menu.price <= Number(maxPrice)

    //estado de los menues
    const filter = (menues) => 
        menues
            .filter(filterByCategory)
            .filter(filterByCity)
            .filter(filterByMinRank)
            .filter(filterByMaxRank)
            .filter(filterByMinPrice)
            .filter(filterByMaxPrice)

    return (
        <div className= 'Search'>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"> <i>ViandaYa!</i> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchName} onChange={(event) => updateSearchName(event.target.value)}/>
                        <Button variant="outline-success" onClick={() => updateMenusToShow(searchName === ""? filter(props.menus):filter(props.menus.filter(filterByName)))}>Search</Button>
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
                                    <p> 
                                        <Form>
                                            <Form.Group controlId="categoryForm.ControlSelect1">
                                                <Form.Control as="select" value={category} onChange={(event)=>updateCategory(event.target.value)}> 
                                                {["", "PIZZA", "CERVEZA", "HAMBURGUESA", "SUSHI", "EMPANADAS", "GREEN", "VEGANO"].map( categoria => 
                                                    <option>{categoria}</option>) }
                                                </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </p>
                                    <li key= {generate()}> <I18n t="searchCity"/>:
                                    </li>
                                    <p> 
                                        <Form>
                                            <Form.Group controlId="cityForm.ControlSelect1">
                                                <Form.Control as="select" value={city} onChange={(event)=>updateCity(event.target.value)}> 
                                                {["", "BERNAL", "DON_BOSCO", "EZPELETA", "QUILMES", "SAN_FRANCISCO_SOLANO", "VILLA_LA_FLORITA", "LUIS_GUILLON"].map( city => 
                                                    <option>{city}</option>) }
                                                </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </p>
                                    <li>
                                    <I18n t="searchRank"/>: 
                                    </li>
                                    <MaterialFormControl fullWidth >
                                        <InputLabel htmlFor="standard-adornment-minRank">Min</InputLabel>
                                        <Input
                                            id="standard-adornment-minRank"
                                            value={minRank}
                                            onChange={(event) => updateMinRank(event.target.value)}
                                        />
                                    </MaterialFormControl>
                                    <MaterialFormControl fullWidth >
                                        <InputLabel htmlFor="standard-adornment-maxRank">Max</InputLabel>
                                        <Input
                                            id="standard-adornment-maxRank"
                                            value={maxRank}
                                            onChange={(event) => updateMaxRank(event.target.value)}
                                        />
                                    </MaterialFormControl>
                                    <li key= {generate()}> <I18n t="searchPrice"/>: </li>
                                    <MaterialFormControl fullWidth >
                                        <InputLabel htmlFor="standard-adornment-minPrice">Min</InputLabel>
                                        <Input
                                            id="standard-adornment-minPrice"
                                            value={minPrice}
                                            onChange={(event) => updateMinPrice(event.target.value)}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                    </MaterialFormControl>
                                    <MaterialFormControl fullWidth >
                                        <InputLabel htmlFor="standard-adornment-maxPrice">Max</InputLabel>
                                        <Input
                                            id="standard-adornment-maxPrice"
                                            value={maxPrice}
                                            onChange={(event) => updateMaxPrice(event.target.value)}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                    </MaterialFormControl>
                                </ul>
                                <hr/>
                                <Button variant="dark" type="submit" onClick={() => {updateMenusToShow(filter(props.menus.filter(filterByName)))}}>
                                    <I18n t="filter"/>
                                </Button>
                            </div> 
                        </Col>
                        <Col sm={10}> 
                            <h3> <I18n t="searchTitle" /> </h3>
                            <ListMenus menues={menusToShow} selectMenu={props.selectMenu} getProvider={props.getProvider}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Search);