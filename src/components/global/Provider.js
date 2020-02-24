import { makeStyles } from '@material-ui/core/styles';
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
        width: 300,
      },
    },
}));

const Provider = props => {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState("");
    const currencies = ["BERNAL CENTRO", "BERNAL OESTE", "QUILMES CENTRO", "QUILMES OESTE", "BERAZATEGUI", "EZPELETA", "LUIS GUILLON", "9 DE JULIO", "MONTE GRANDE", "EL JAGÜEL", "CANNING" ]

    const handleChange = event => {
        setCurrency(event.target.value);
      };
    
    const top100Films = [
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

    return (
        <div className="Provider">
            <h2><I18n t="providerTitle"/></h2>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <div>
                        <TextField required id="standard-required" label="Nombre" defaultValue={props.provider} />
                    </div>
                    <div>
                        <TextField required id="standard-required" label="Logo" defaultValue={props.provider} />
                    </div>
                    <div>
                        <TextField id="outlined-select-currency-native" select label="Localidad"
                            value = {currency} onChange= {handleChange}
                            SelectProps={{
                                native: false,
                            }}
                            helperText="Please select your city"
                            variant="outlined">
                            {currencies.map(option => (
                                <option key={option} value={option}>
                                {option}
                                </option>
                            ))}
                            </TextField>
                    </div>
                    <div>
                        <TextField required id="standard-required" label="Dirección" defaultValue={props.provider} />
                    </div>
                    <div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descrición"
                            multiline
                            rows="4"
                            defaultValue=""
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField id="standard-required" label="Sitio web" defaultValue={props.provider} />
                    </div>
                    <div>
                        <TextField required id="standard-required" label="E-mail" defaultValue={props.provider} />
                    </div>
                    <div>
                        <TextField required id="standard-required" label="Teléfono" defaultValue={props.provider} />
                    </div>
                    <div>
                        <p> Días de atención</p>
                        <DatesTable2/>
                   </div>
                    <div>
                       <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={top100Films}
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
                </div>
                
            </form>
        </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps) (Provider);
