import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {Form, Button, Modal, ButtonToolbar } from 'react-bootstrap';
import { Link, NavLink, Redirect } from 'react-router-i18n';

import { mapStateToProps, mapDispatchToProps} from '../../mapMethods'
import I18n from '../I18n';

const ResponsiveDialog = props => {

    const userLogIn = {
        name: "",
        email:""
      }
    
      const updateName = event => {
        userLogIn.name = event.target.value
      }
    
      const updateEmail = event => {
        userLogIn.email = event.target.value
      }

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Button variant="link" onClick={handleClickOpen}>
            <I18n t="headerLogIn"/>
        </Button>
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title"> <I18n t="logIn"/> </DialogTitle>
            <DialogContent>
            <DialogContentText>
                <Form>
                    <Form.Group controlId="formBasicName">
                    <Form.Label> <I18n t="userNameUsurname"/> </Form.Label>
                    <Form.Control type="text" placeholder= "First name" onChange={updateName.bind(this)}/>
                    <Form.Text className="text-muted" >
                    </Form.Text>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label> Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange= {updateEmail.bind(this)}/>
                    <Form.Text className="text-muted">
                        <I18n t="userEmailNotification"/>
                    </Form.Text>
                    </Form.Group>
                </Form>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="success" onClick={()=> {console.log(userLogIn); props.getUser(userLogIn.email)}} > <Link to='login'> <I18n t="logIn"/> </Link></Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (ResponsiveDialog)