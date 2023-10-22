// import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const linkStyles = {
  textDecoration: 'none', // Remove underline
  color: 'inherit',
  '&:hover': {
    color: 'lightgrey', // Light gray on hover
  },
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        width: '100%',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6">Company</Typography>
            <ul>
              <li>
                <Link href="/about" sx={linkStyles}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contactus" sx={linkStyles}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/how-to-use" sx={linkStyles}>
                  How to Use the Platform
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Get Started</Typography>
            <ul>
              <li>
                <Link href="/" sx={linkStyles}>
                  Home Screen
                </Link>
              </li>
              <li>
                <Link href="/" sx={linkStyles}>
                  Register as a Student
                </Link>
              </li>
              <li>
                <Link href="/" sx={linkStyles}>
                  Register as a Teacher
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Your Website Name
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
