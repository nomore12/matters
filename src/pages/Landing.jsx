import React from 'react';
import {
  Container,
  Grid,
  Box,
  Paper,
  Item,
  Hidden,
  useMediaQuery,
  useTheme,
  createTheme,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Logo from '../assets/logo192.png';
import { Navbar, Category, Content } from '../components/index';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: { backgroundColor: 'red' },
});

function Landing() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  return (
    <Box sx={{ marginY: '20px', margin: `${matches ? '' : '0'}` }}>
      <Container
        maxWidth="lg"
        sx={{
          // border: '1px solid black',
          height: matches ? 'calc(100vh - 40px)' : '100vh',
          padding: '0px !important',
        }}>
        <Grid
          justifyContent="space-between"
          container
          sx={{ height: `${matches ? '' : '100vh'}` }}>
          <Hidden smUp>
            <Grid
              xs={1}
              alignItems={'flex-end'}
              justifyContent={'center'}
              sx={{
                marginBottom: '10px',
              }}>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid
            xs
            sm={3}
            md={2}
            container
            sx={{
              width: '250px !important',
              marginBottom: '10px',
            }}>
            <img src={Logo} height={matches ? '100px' : '60px'} />
          </Grid>
          <Hidden only={['xs', 'sm']}>
            <Grid md sx={{ marginBottom: '10px', padding: '20px' }}>
              {/* hidden */}
            </Grid>
          </Hidden>
          <Hidden only={'xs'}>
            <Grid
              xs={12}
              sm={9}
              md={8}
              sx={{
                // backgroundColor: 'lightgray',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                padding: '0 20px 0 0',
                marginBottom: '10px',
              }}>
              <Category />
            </Grid>
          </Hidden>
          <Hidden only={['xs']}>
            <Grid
              xs={12}
              sm={3}
              md={2}
              sx={{
                backgroundColor: 'lightblue',
                height: '100%',
              }}>
              <Navbar />
            </Grid>
          </Hidden>
          <Hidden only={['xs', 'sm']}>
            <Grid md={'auto'} sx={{ padding: '20px' }}></Grid>
          </Hidden>
          <Grid
            xs={12}
            sm={9}
            md={8}
            sx={{
              padding: '0px 3px 0px 0px',
              display: 'flex',
              justifyContent: 'flex-end',
              height: 'calc(100vh - 40px - 120px)',
              overflow: 'hidden',
            }}>
            <Content />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Landing;
