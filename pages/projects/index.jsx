import React, { useCallback, useEffect, useMemo } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { GetTaskFetch } from '../../actions';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '@stitches/react';

const Page = styled('div', { display: 'flex' });

const PageHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});
const Label = styled('span', {
  color: '#fff',
  borderRadius: '5px',
  fontSize: '15px',
  padding: '0.2em 0.6em',
  marginLeft: '10px',
  background: '#397367',
});

const Index = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(GetTaskFetch('http://localhost:1337/api/tasks?populate=*'));
  }, []);

  console.log('tasks', tasks);
  return (
    <Layout>
      <div style={{ padding: '6rem 0px' }}>
        <Grid container>
          <Grid item style={{ marginBottom: '10px' }} xs={12}>
            <PageHeader>
              <Typography variant='h3' style={{ margin: '0px' }}>
                Усі фриланс-проєкти в Україні
              </Typography>
              <Label>{tasks.length}</Label>
            </PageHeader>
          </Grid>
          <Grid
            container
            xs={12}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '1160px',
              paddingLeft: '1.25rem',
              paddingRight: '1.25rem',
            }}>
            <Grid item container xs={12}>
              {tasks.map(({ attributes }) => {
                return (
                  <>
                    <Grid item xs={12}>
                      <Card
                        sx={{
                          margin: '5px 0px',
                          maxWidth: '100%',
                          width: '100%',
                          borderRadius: '10px',
                        }}>
                        <CardActionArea
                          onClick={() => router.push('/projects/' + attributes.slug)}>
                          <CardContent style={{ padding: '10px 10px 6px' }}>
                            <Typography gutterBottom variant='h5' component='div'>
                              {attributes?.title}
                            </Typography>
                            <Typography variant='h6' component='div'>
                              {attributes?.description}
                            </Typography>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}>
                              <Typography
                                variant='h6'
                                color='text.secondary'
                                style={{ right: '0' ,color:'#397367'}}>
                                {attributes?.price != null ? attributes?.price : ''}
                              </Typography>
                            </div>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Index;
