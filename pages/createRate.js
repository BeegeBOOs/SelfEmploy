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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from 'next/link';
import { userService } from '../services/user-service';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateRate = () => {
  const router = useRouter();

  const sendRate = async () => {
    try {
      await axios.post('http://localhost:3000/api/send-rate', {
        title,
        price,
        description,
        userEmail,
      });
    } catch (err) {
      console.log('Sending error', err);
    }
  };

  let temp, user, userEmail;

  if (typeof window !== 'undefined') {
    temp = JSON.parse(localStorage.getItem('user'));
    user = temp?.user;
    userEmail = user?.email;
  } else {
    console.log('You are on the server');
  }

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
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
          <Typography component='h1' variant='h5'>
            Публікація проєкту
          </Typography>
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='title'
                  required
                  fullWidth
                  id='title'
                  label='Заголовок'
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id='price'
                  type='number'
                  label='Ставка'
                  name='price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>
            </Grid>
            <TextField
              margin='normal'
              required
              fullWidth
              id='description'
              label='Опис завдання'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoFocus
            />

            <Button
              onClick={() => {
                sendRate();
                alert(
                  'Дякуємо за ваше завдання, очікуйте звінка оператора і подальших інструкцій',
                );
                router.push('/');
              }}
              disabled={(!title && !price) || !description}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}>
              Опублікувати проєкт
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateRate;
