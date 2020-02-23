import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import 'date-fns';
import React from 'react'; // <-- updated
import { Button, ButtonToolbar, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import './css/Order.css';


const Order = props => {

  const [selectedDateOrder, updateDateOrder] = React.useState(new Date());
  const [selectedHourOrder, updateHourOrder] = React.useState(new Date());
  const [selectedDateDelivery, updateDateDelivery] = React.useState(new Date());
  const [selectedHourDelivery, updateHourDelivery] = React.useState(new Date());
  const [selectedAmount, updateAmount] = React.useState(1);
  const [selectedDeliveryMethod, updateDeliveryMethod] = React.useState('');

  const newOrder = {
    "user":props.user.email,
    "order":{
      "menu":{
        "name":props.selectedMenu.name,
        "providerEmail":props.provider.email,
      },
    "deliveryDateAndHour":selectedDateDelivery+ " "+selectedHourDelivery,
    }
  }
  
    return (
        <div className= 'Order'>
            <h1>Página de pedido: </h1>
            <div>
                <Container fluid>
                    <Row>
                        <Col sm={2}>
                            <Image src={props.selectedMenu.image} fluid />
                        </Col>
                        <Col sm={10}>
                            <h3> {props.selectedMenu.name} </h3>
                            <p> {props.selectedMenu.description} </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
               
                <p> <I18n t="orderAmount"/>:</p>
                <p> 
                  <TextField
                    id="standard-number"
                    value={selectedAmount}
                    onChange={(event) => updateAmount(event.target.value > 0? event.target.value : 1)}
                    type="number"
                    InputLabelProps={{ shrink: true,}}
                  /> 
                </p>
                <p> <I18n t="typeDelivery"/>:</p>
                <p>
                  <FormControl>
                    <NativeSelect
                      id="delivery-method-select-native"
                      value={selectedDeliveryMethod}
                      onChange={(event) => updateDeliveryMethod(event.target.value)}
                    >
                      <option value={"HOME_DELIVERY"}> Entrega a domicilio </option>
                      <option value={"BRANCH_OFFICE"}> Retiro en sucursal </option>
                    </NativeSelect>
                  </FormControl>
                </p>
                <p> <I18n t="dateOrder"/>:</p>
                <p>  <KeyboardDatePicker
                      margin="normal"
                      id="dateOrder-picker-dialog"
                      format="MM/dd/yyyy"
                      value={selectedDateOrder}
                      onChange={updateDateOrder}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                </p>
                <p> <I18n t="hourOrder"/>: </p>
                <p> <Grid container>
                <KeyboardTimePicker
                      margin="normal"
                      id="timeDelivery-picker"
                      value={selectedHourOrder}
                      onChange={updateHourOrder}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                  </Grid></p>
                  
                <p> <I18n t="dateDelivery"/>: </p> 
                <p>  <KeyboardDatePicker
                      margin="normal"
                      id="dateDelivery-picker-dialog"
                      format="MM/dd/yyyy"
                      value={selectedDateDelivery}
                      onChange={updateDateDelivery}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                </p>
                <p> <I18n t="hourDelivery"/>: </p>
                <p> <Grid container>
                <KeyboardTimePicker
                      margin="normal"
                      id="timeDelivery-picker"
                      value={selectedHourDelivery}
                      onChange={updateHourDelivery}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                  </Grid></p>
                <ButtonModal/>
            </div>
        </div>)
}

const MyVerticallyCenteredModal = props => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2>Ya confirmamos su compra</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>¡Gracias por su pedido!</h4>
            <p> Tiempo de entrega estimada: 30 min.</p>
            <p> Recuerde que puede revisar los detalles de su pedido en el historial de su cuenta.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

const ButtonModal= () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <ButtonToolbar>
        <Button variant="success" onClick={() => { setModalShow(true)}}>
          <b><i><I18n t="orderNow"/></i></b>
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Order);