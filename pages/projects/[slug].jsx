import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import CreateRate from '../../components/CreateRate';
import RegRate from '../../components/RegRate';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { GetTaskFetch } from '../../actions';
import { styled } from '@stitches/react';
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
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';

const Label = styled('span', {
  color: '#fff',
  borderRadius: '5px',
  fontSize: '15px',
  padding: '0.2em 0.6em',
  marginLeft: '10px',
  background: '#00ae5a',
});

const Project = ({ freelancers }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  // console.log(slug);
  useEffect(() => {
    dispatch(
      GetTaskFetch(
        `http://localhost:1337/api/tasks?populate=*&filters[slug][$eq]=${slug}`,
      ),
    );
  }, [slug]);

  const task = {};

  tasks.map((x) => {
    task = x.attributes;
  });
  console.log('task', task);
  console.log('freelancers', freelancers);

  let temp, isFreelancer;
  if (typeof window !== 'undefined') {
    temp = JSON.parse(localStorage.getItem('user'));
    isFreelancer = !temp?.user?.client;
    // console.log('temp', isFreelancer);
  } else {
    console.log('You are on the server');
  }

  return (
    <Layout>
      <div style={{ padding: '4rem 0px' }}>
        <Box>
          <h1>{task?.title}</h1>
        </Box>
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '1160px',
              paddingLeft: '1.25rem',
              paddingRight: '1.25rem',
            }}>
            <div style={{ backgroundColor: '#F5F5F5' }}>
              <Typography variant="body1" style={{overflowWrap: 'break-word'}}>{task?.description}</Typography>
              
            </div>
            {isFreelancer ? (
              // <CreateRate taskSlug={task?.slug} />
              <RegRate text={''}/>
            ) : (
              <Button
                fullWidth
                onClick={() => {
                  router.push('/auth/register');
                }}
                startIcon={<HowToRegTwoToneIcon />}>
                Створіть акаунт фрілансера
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/api/users`);
  const data = await res.json();
  return { props: { freelancers: data } };
}

export default Project;
