import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { connect } from 'react-redux';
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
    const cities = [
        { data: "BERNAL_CENTRO", city: "Bernal centro"},
        { data:"BERNAL_OESTE", city:"Bernal oeste"},
        { data: "QUILMES_CENTRO", city: "Quilmes centro"},
        { data: "QUILMES_OESTE", city: "Quilmes oeste"},
        { data:  "BERAZATEGUI", city:  "Berazategui"},
        { data: "EZPELETA", city: "Ezpeleta"},
        { data: "LUIS_GUILLON", city: "Luis Guillón"},
        { data: "9_DE_JULIO", city: "9 de julio"},
        { data: "MONTE_GRANDE", city: "Monte Grande" },
        { data: "EL_JAGÜEL", city: "El Jagüel"},
        { data: "CANNING", city: "Canning"}
    ];
    const [location, updateLocation] = React.useState("");
    const [description, updateDescription] = React.useState("");
    const [webSite, updateWebSite] = React.useState("");
    const [email, updateEmail] = React.useState("");
    const [phone, updatePhone] = React.useState("");
    const newProvider = {
        name: name,
        logo: urlLogo,
        city: cityProvider,
        location: location,
        description: description,
        website: webSite,
        email: email,
        phoneNumber: phone,
        openingHoursDays: [],
        deliveryCities: null,
        currentMenus: null,
        orders: null,
        balance: null,
        menusRemoved: null
    }

    return (
        <div className="Provider">
            <h2><I18n t="providerTitle"/></h2>
            <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField required id="name-provider" label="Nombre" defaultValue={name} onChange={(event)=>updateName(event.target.value)}/>
                    </div>
                    <div>
                        <TextField required id="url-logo-provider" label="URL Logo" defaultValue={urlLogo} onChange={(event)=>updateUrlLogo(event.target.value)}/>
                    </div>
                    <div>
                        <TextField id="city-provider" select label="Localidad"
                            value = {cityProvider} onChange= {(event) => updateCityProvider(event.target.value)}
                            SelectProps={{
                                native: false,
                            }}
                            helperText="Please select your city"
                            variant="outlined">
                            {cities.map(option => (
                                <option key={option.city} value={option.city}>
                                {option.city}
                                </option>
                            ))}
                            </TextField>
                    </div>
                    <div>
                        <TextField required id="direction-provider" label="Dirección" defaultValue={location} onChange={(event)=>updateLocation(event.target.value)}/>
                    </div>
                    <div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descripción"
                            multiline
                            rows="4"
                            defaultValue={description}
                            variant="outlined"
                            onChange={(event)=>updateDescription(event.target.value)}
                        />
                    </div>
                    <div>
                        <TextField id="web-site-provider" label="Sitio web" defaultValue={webSite} onChange={(event)=>updateWebSite(event.target.value)}/>
                    </div>
                    <div>
                        <TextField required id="e-mail-provider" label="E-mail" defaultValue={email} onChange={(event)=>updateEmail(event.target.value)}/>
                    </div>
                    <div>
                        <TextField required id="phone-provider" label="Teléfono" defaultValue={phone} onChange={(event)=>updatePhone(event.target.value)}/>
                    </div>
                    <div>
                        <DatesTable2/>
                   </div>
                    <div>
                       <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={cities}
                            getOptionLabel={option => option.city}
                            defaultValue={[]}
                            filterSelectedOptions
                            renderInput={params => (
                            <TextField
                                style={{ width: 700 }}
                                {...params}
                                variant="outlined"
                                label="Localidades de entrega"
                                placeholder="Favorites"
                            />
                            )}
                        />
                    </div>
                    <div>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" className={classes.margin}>
                                <b><i><I18n t="addProvider" /></i></b>
                            </Button>
                        </ThemeProvider>
                    </div>
            </form>
        </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps) (Provider);
