import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-i18n';
import { mapDispatchToProps, mapStateToProps } from '../../mapMethods';
import I18n from '../I18n';
import './css/Provider.css';
import DatesTable2 from './DatesTable2';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 400,
        },
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});


const Provider = props => {
    const classes = useStyles();

    const [name, updateName] = React.useState("");
    const [urlLogo, updateUrlLogo] = React.useState("");
    const [cityProvider, updateCityProvider] = React.useState("");
    const [location, updateLocation] = React.useState("");
    const [description, updateDescription] = React.useState("");
    const [webSite, updateWebSite] = React.useState("");
    const [email, updateEmail] = React.useState("");
    const [phone, updatePhone] = React.useState("");
    const [deliveryCities, updateDeliveryCities] = React.useState([]);

    const [descriptionError, updateDescriptionError] = React.useState(true);
    const [nameError, updateNameError] = React.useState(true);
    const [logoError, updateLogoError] = React.useState(true);
    const [cityError, updateCityError] = React.useState(true);
    const [locationError, updateLocationError] = React.useState(true);
    const [emailError, updateEmailError] = React.useState(true);
    const [phoneError, updatePhoneError] = React.useState(true);

    const [canRegister, updateCanRegister] = React.useState(true);

    React.useEffect(() => {
        if (descriptionError || nameError || logoError || cityError || locationError || emailError || phoneError) {
            updateCanRegister(true);
        } else {
            updateCanRegister(false);
        }
    }, [descriptionError, nameError, logoError, cityError, locationError, emailError, phoneError, updateCanRegister]);

    const registerProvider = () => {
        const openingHD = [];
        props.hoursProvider.forEach(time => {
            openingHD.push({
                day: time.day,
                openingHours: time.opening.toTimeString().slice(0, 8) + '.00',
                closingHours: time.closing.toTimeString().slice(0, 8) + '.00'
            })
        });

        const deliveryC = [];
        deliveryCities.forEach(city => {
            deliveryC.push(city.name)
        });

        const newProvider = {
            name: name,
            logo: urlLogo,
            city: cityProvider,
            location: location,
            description: description,
            website: webSite,
            email: email,
            phoneNumber: phone,
            openingHoursDays: openingHD,
            deliveryCities: deliveryC,
            currentMenus: [],
            orders: [],
            balance: 0,
            menusRemoved: 0
        }

        props.addProvider(newProvider)
        props.loginProvider(newProvider.email);
    }

    const phonenumber = (inputtxt) => {
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (inputtxt.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }

    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div className="Provider">
            <h2><I18n t="providerTitle" /></h2>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField required id="name-provider" label="Nombre" defaultValue={name}
                        onChange={(event) => { updateName(event.target.value); updateNameError(name === '') }}
                        error={nameError}
                        helperText={nameError ? "Este campo es obligatorio" : null} />
                </div>
                <div>
                    <TextField required id="url-logo-provider" label="URL Logo" defaultValue={urlLogo}
                        onChange={(event) => { updateUrlLogo(event.target.value); updateLogoError(urlLogo === '') }}
                        error={logoError}
                        helperText={logoError ? "Este campo es obligatorio" : null} />
                </div>
                <div>
                    <TextField required id="city-provider" select label="Localidad"
                        defaultValue={cityProvider}
                        onChange={(event) => { updateCityProvider(event.target.value); updateCityError(cityProvider === '') }}
                        SelectProps={{
                            native: false,
                        }}
                        error={cityError}
                        helperText={cityError ? "Este campo es obligatorio" : "Please select your city"}
                        variant="outlined">
                        {props.cities.map(city => (
                            <option key={city.title} value={city.name} >
                                {city.title}
                            </option>
                        ))}
                    </TextField>
                </div>
                <div>
                    <TextField required id="direction-provider" label="Dirección" defaultValue={location}
                        onChange={(event) => { updateLocation(event.target.value); updateLocationError(location === '') }}
                        error={locationError}
                        helperText={locationError ? "Este campo es obligatorio" : null} />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Descripción"
                        multiline
                        rows="4"
                        defaultValue={description}
                        variant="outlined"
                        onChange={(event) => { updateDescription(event.target.value); updateDescriptionError((description.length < 30) || (description.length > 200)) }}
                        error={descriptionError}
                        helperText={descriptionError ? "La descripcion debe tener entre 30 y 200 letras." : null}
                    />
                </div>
                <div>
                    <TextField id="web-site-provider" label="Sitio web" defaultValue={webSite} onChange={(event) => updateWebSite(event.target.value)} />
                </div>
                <div>
                    <TextField required id="e-mail-provider" label="E-mail" defaultValue={email}
                        onChange={(event) => { updateEmail(event.target.value); updateEmailError(!validateEmail(email)) }}
                        error={emailError}
                        helperText={emailError ? "Debe ingresar un mail válido" : null} />
                </div>
                <div>
                    <TextField required id="phone-provider" label="Teléfono" defaultValue={phone}
                        onChange={(event) => { updatePhone(event.target.value); updatePhoneError(!phonenumber(phone)) }}
                        error={phoneError}
                        helperText={phoneError ? "Debe ingresar un teléfono válido" : null} />
                </div>
                <div>
                    <DatesTable2 />
                </div>
                <div>
                    <Autocomplete
                        multiple required
                        id="tags-outlined"
                        options={props.cities}
                        getOptionLabel={option => option.title}
                        defaultValue={deliveryCities}
                        filterSelectedOptions
                        renderInput={city => (
                            <TextField
                                style={{ width: 700 }}
                                {...city}
                                variant="outlined"
                                label="Localidades de entrega"
                                placeholder="Favorites"
                            />)}
                        onChange={(event, value) => updateDeliveryCities(value)}
                    // error={hoursDaysError}
                    // helperText={hoursDaysError ? "Debe ingresarse al menos un día de disponibilidad." : null}
                    />
                </div>
                <div>
                    <ThemeProvider theme={theme}>
                        <Button disabled={canRegister} variant="contained" color="primary" className={classes.margin} onClick={() => registerProvider()}>
                            <NavLink ignoreLocale to='loginProvider'><b><i><I18n t="addProvider" /></i></b></NavLink>
                        </Button>
                    </ThemeProvider>
                </div>
            </form>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Provider);
