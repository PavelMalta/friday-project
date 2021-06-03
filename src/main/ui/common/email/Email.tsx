import React from 'react';
import clsx from 'clsx';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '347px',

    },
  }),
);

interface State {
  amount: string;
  password: string;
  email: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function Email() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    email: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>
        <div>
          <TextField className={clsx(classes.margin, classes.textField)} 
                      id="standard-adornment-email"
            error   //окрашивает в красный цвет
            type='email'
            label= 'Email'
            value={values.email}
            helperText="Incorrect entry."
            onChange={handleChange('email')} />
          {/* <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        /> */}
        </div>
        {/* <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
          <Input
            id="standard-adornment-email"
            type='email'
            value={values.email}
            onChange={handleChange('email')}
          />
        </FormControl> */}
      </div>
    </div>
  );
}