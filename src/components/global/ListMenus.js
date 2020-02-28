import Pagination from "@material-ui/lab/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-i18n';
import './css/ListMenus.css';


const MenuCards = props => {

    const elementsPerPage = 4;
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
                            <Button variant="warning" onClick={() => {props.selectMenu(menu); props.getProvider(menu.providerEmail)}}> 
                                <NavLink ignoreLocale to="menuDescription"> Ver menú </NavLink>
                            </Button>
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

export default MenuCards;
