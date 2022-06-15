import React, { useCallback, useEffect, useMemo } from 'react';
import Layout from '../../components/Layout';
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
  background: '#00ae5a',
});

const Index = ({ freelancers }) => {
  const router = useRouter();

  console.log('freelancers', freelancers);
  return (
    <Layout>
      <div style={{ padding: '6rem 0px' }}>
        <Grid container>
          <Grid item style={{ marginBottom: '10px' }} xs={12}>
            <PageHeader>
              <h1 style={{ margin: '0px' }}>Усі фрилансери в Україні</h1>
              <Label>{freelancers.length}</Label>
            </PageHeader>
          </Grid>

          <Grid
            item
            container
            xs={12}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '1160px',
              paddingLeft: '1.25rem',
              paddingRight: '1.25rem',
            }}>
            {freelancers.map((freelancer) => {
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
                      <CardActionArea>
                        <CardContent style={{ padding: '10px 10px 6px' }}>
                          <Typography gutterBottom variant='h5' component='div'>
                            {freelancer?.firstName + ' ' + freelancer?.lastName}
                          </Typography>
                          <Typography gutterBottom variant='body1' component='div'>
                            <div
                              style={{
                                display: 'block',
                                overflow: 'hidden',
                                // maxHeight: '5em',
                                lineHeight: '1.3em',
                              }}>
                              {freelancer?.description}
                            </div>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};


export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/api/users?filters[client][$eq]=false`);
  const data = await res.json();
  return { props: { freelancers: data } };
}

export default Index;
