import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Router from 'next/router';
import { userService } from '../../services/user-service';
import { makeStyles } from '@material-ui/styles';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='/'>
        SelfEmploy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  textField: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 1,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 3,
      padding: '4px !important', // override inline-style
    },
  },
}));

const theme = createTheme();

const Register = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [surname, setSurname] = useState('');
  const [surnameError, setSurnameError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const pass = data.get('password');
    const userName = data.get('firstName');
    const phone = data.get('phone');
    const userLastName = data.get('lastName');

    console.log('userData', userName);
    console.log('userData', userLastName);
    console.log('userData', email);
    console.log('userData', phone);
    console.log('userData', pass);

    const status = await userService.registerUser({
      firstname: `${userName}`,
      lastname: `${userLastName}`,
      email: `${email}`,
      username: `${phone}`,
      password: `${pass}`,
    });

    const temp = localStorage.getItem('user');
    const user = JSON.parse(temp);

    console.log('Congratulation:', user || '');
    console.log('jwt:', user?.jwt);

    if (user?.jwt != undefined && user?.jwt) {
      Router.push('/');
    } else {
      console.log('Error login');
      alert('Будьласка введіть вірні дані');
    }
  };

  const handleNameValid = (e) => {
    setName(e.target.value);
    const reg = new RegExp('^[a-zA-Zа-яіА-Яі]+$');
    setNameError(reg.test(e.target.value));
  };

  const handleSurnameValid = (e) => {
    setSurname(e.target.value);
    const reg = new RegExp('^[a-zA-Zа-яіА-Яі]+$');
    setSurnameError(reg.test(e.target.value));
  };

  const handleEmailValid = (e) => {
    setEmail(e.target.value);
    const reg = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    setEmailError(reg.test(e.target.value));
  };

  const handlePhoneValid = (e) => {
    let isNumber = true;

    e.target.value.length <= 12 && !isNaN(+e.target.value) && setPhone(e.target.value);
    // const reg = new RegExp("^\\d+$");
    const reg = new RegExp('^380\\d{3}\\d{2}\\d{2}\\d{2}$');
    e.target.value.length <= 12 && setPhoneError(reg.test(e.target.value));
  };

  const handlePassValid = (e) => {
    setPass(e.target.value);
    const reg = new RegExp('^.{6,}$');
    setPassError(reg.test(e.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Avatar sx={{ m: 1, bgcolor: '#397367' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Реєстрація
            </Typography>
            <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.textField}
                    autoComplete='given-name'
                    name='firstName'
                    required
                    fullWidth
                    value={name}
                    onChange={(e) => handleNameValid(e)}
                    error={!nameError}
                    id='firstName'
                    label="Ім'я"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.textField}
                    required
                    fullWidth
                    value={surname}
                    onChange={(e) => handleSurnameValid(e)}
                    error={!surnameError}
                    id='lastName'
                    label='Прізвище'
                    name='lastName'
                    autoComplete='family-name'
                  />
                </Grid>
              </Grid>
              <TextField
                className={classes.textField}
                margin='normal'
                required
                fullWidth
                id='email'
                label='Пошта'
                name='email'
                value={email}
                onChange={(e) => handleEmailValid(e)}
                error={!emailError}
                autoComplete='email'
                autoFocus
              />

              <TextField
                className={classes.textField}
                required
                fullWidth
                id='phone'
                label='Номер телефону'
                name='phone'
                placeholder={'380999999999'}
                inputProps={{ inputMode: 'numeric' }}
                value={phone}
                onChange={(e) => handlePhoneValid(e)}
                error={!phoneError}
                autoComplete='family-name'
              />

              <TextField
                className={classes.textField}
                margin='normal'
                required
                fullWidth
                name='password'
                label='Пороль'
                type='password'
                placeholder={'******'}
                value={pass}
                onChange={(e) => handlePassValid(e)}
                error={!passError}
                id='password'
                autoComplete='current-password'
              />

              <Button
                style={{ background: '#397367' }}
                type='submit'
                fullWidth
                variant='contained'
                disabled={
                  !emailError || !passError || !phoneError || !nameError || !surnameError
                }
                sx={{ mt: 3, mb: 2 }}>
                Реєстрація
              </Button>
              <Grid container justifyContent={'center'}>
                <Grid item>
                  <Link href='./login' variant='body2'>
                    {'Уже є акаунт? Вхід'}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
