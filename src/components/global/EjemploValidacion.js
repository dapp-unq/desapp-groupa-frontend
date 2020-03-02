import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function ValidationTextFields() {
  const classes = useStyles();

  const [value, setValue] = React.useState("");
  const [canRegister, setCanRegister] = React.useState(true);

  const rejectWorld = () => value.includes("world");
  React.useEffect(() => {
    if (rejectWorld()) {
      setCanRegister(true);
    } else {
      setCanRegister(false);
    }
  }, [rejectWorld, setCanRegister]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error={rejectWorld()}
          id="standard-error-helper-text"
          label="Nombre"
          defaultValue={value}
          onChange={event => setValue(event.target.value)}
          helperText={rejectWorld() ? "No le gusta la palabra world." : null}
        />
      </div>
      <Button disabled={canRegister} variant="contained" color="primary">
        registrar
      </Button>
    </form>
  );
}
