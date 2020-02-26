import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-i18n';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ResponsiveDialog = props => {

    const [name, updateName] = React.useState('');
    const [email, updateEmail] = React.useState('');
    
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [checkProvider, updateCheckProvider] = React.useState(false);
    
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
                        <Form.Control type="text" placeholder= "First name" value={name} onChange={(event) => updateName(event.target.value)}/>
                        <Form.Text className="text-muted" >
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange= {(event) => updateEmail(event.target.value)}/>
                        <Form.Text className="text-muted">
                            <I18n t="userEmailNotification"/>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checkProvider}
                                onChange={(event) => updateCheckProvider(event.target.checked)}
                                value={checkProvider}
                                color="primary"
                            />
                        }
                        label="Soy proveedor"
                    />
                    </Form.Group>
                </Form>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                {!checkProvider && <Button variant="success" onClick={()=> {props.getUser(email)}} > 
                    <NavLink ignoreLocale to='login'> <I18n t="logIn"/> </NavLink></Button>}
                {checkProvider && <Button variant="success" onClick={()=> {props.loginProvider(email)}} > 
                <NavLink ignoreLocale to='loginProvider'> <I18n t="logIn"/> </NavLink></Button>}
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (ResponsiveDialog)