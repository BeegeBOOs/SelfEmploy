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
import { useDispatch, useSelector } from 'react-redux';
import { userService } from '../../services/user-service';

const theme = createTheme();

const Login = () => {
  let submitting = false;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const pass = data.get('password');
    console.log('handleSubmit');

    const status = await userService.loginUser({
      identifier: `${email}`,
      password: `${pass}`,
    });

    console.log('login status', status);
    status ? (submitting = true) : (submitting = false);
    const temp = localStorage.getItem('user');
    const user = JSON.parse(temp);

    console.log('Congratulation:', user);
    console.log('jwt:', user?.jwt);

    user?.jwt ? Router.push('/') : console.log('Error login');
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
            <Avatar sx={{ m: 1, background: '#397367' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Пошта'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Пароль'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <Button style={{ background: '#397367' }} type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                {submitting ? 'In progress…' : 'Sign In'}
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link href='./register' variant='body2'>
                    {"Не маєте акаунту? Реєстрація"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
