import Pagination from "@material-ui/lab/Pagination";
import React from 'react'; // <-- updated
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-i18n';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import './css/Main.css';

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
                            <Button variant="warning" onClick={() => {props.selectMenu(menu); props.getProvider(menu.providerEmail)}}> <NavLink ignoreLocale to='menuDescription'> Ver menú </NavLink></Button>
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