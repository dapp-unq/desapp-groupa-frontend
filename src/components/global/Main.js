import React, {useState, useContext } from 'react' // <-- updated
import { Auth0Context } from '../../contexts/auth0-context'; // <-- new

import MenuCards from './ListMenus';
import I18n from '../I18n'
import './css/Main.css'
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../mapMethods';
import { Card, Button } from 'react-bootstrap';
import Pagination from "@material-ui/lab/Pagination";
import { Link, NavLink, Redirect } from 'react-router-i18n';


const Main = props => {
    const elementsPerPage = 20;
    const pageCount = Math.ceil(props.menus.length/elementsPerPage);
    const [currentPage, setCurrentPage] = React.useState(1);
    const lastIndex = currentPage * elementsPerPage;
    const firstIndex = lastIndex - elementsPerPage;
    
    return (
    <div>
        <div className= 'Main'>
            <h1><i> <I18n t="mainTitle" /> </i></h1>
            <h3> <I18n t="mainSubtitle"/> </h3>
        </div>
        <div className= "TitlesBackground">
			<h2> <I18n t="mainMenuTitle" /> </h2>
		</div>
        <div className= 'Main'>
        <div>
            <div className="CardsMenu">
                {props.menus.slice(firstIndex, lastIndex).map(menu =>
                    <Card className="Card" style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={menu.image} />
                        <Card.Body style={{ padding: '0.7rem' }}>
                            <Card.Title>{menu.name}</Card.Title>
                            <Card.Text> {menu.description}</Card.Text>
                            <Button variant="warning" onClick={() => {props.selectMenu(menu); props.getProvider(menu.providerEmail)}}> <Link to='menuDescription'> Ver menú </Link></Button>
                        </Card.Body>
                    </Card>)
                }
            </div>
            <Pagination
                onChange={(_event, page) => setCurrentPage(page)}
                count={pageCount}
            />
        </div>
        </div>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (Main);