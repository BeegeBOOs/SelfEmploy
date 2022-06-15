import Layout from '../components/Layout';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { animate, motion } from 'framer-motion';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const Index = () => {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInRight = {
    initial: {
      x: -160,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInLeft = {
    initial: {
      x: 160,
      opacity: 0,
      transition: { duration: 0.3, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <Layout>
        <div>projects</div>
      </Layout>
    </>
  );
};

export default Index;
