import React from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import Menu from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion';
import Link from '@mui/material/Link';
import NavigationMenu from './NavigationMenu';
import AvatarComp from './Avatar';
import { styled } from '@stitches/react';
import useMediaQuery from '@mui/material/useMediaQuery';

const Layout = ({ children }) => {
  //popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const Header = styled('div', {
    position: 'fixed',
    width: '100vw',
    height: '5rem',
    background: '#FEFEFE',
    padding: '0px 50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  const Footer = styled('div', {
position: 'fixed',
  bottom: 0,
    width: '100%',
    height: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#397367',
  });

  const matches = useMediaQuery('(min-width:600px)');
  // console.log('matches', matches);

  return (
    <>
      <CssBaseline />

      <Header style={{ zIndex: 9999999 }}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
          }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0px 0px 0px 10px',
          }}>
          {matches ? (
            <Link
              variant='h2'
              underline='none'
              color='inherit'
              href='/'
              sx={{ fontSize: 24 }}>
              {'SelfEmploy'}
            </Link>
          ) : (
            ''
          )}
        </motion.div>
        <NavigationMenu />
        <AvatarComp />
      </Header>
      {children}
      <Footer>
        <Box style={{ color: '#fff', paddingLeft: '10px' }}>
          Зроблено в Україні © 2005-2022
        </Box>
      </Footer>
    </>
  );
};

export default Layout;
