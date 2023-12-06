import React from 'react'
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material'
import ContactForm from './Form/Index'
import { Link } from 'react-router-dom'
import { Facebook, Twitter } from '@mui/icons-material'

const Footer = () => {
  return (
    <div>
      <Box bgcolor={'rgb(13,56,94)'}>
        <Container maxWidth='md' sx={{ color: 'white' }}>
          <Typography fontSize={{ md: '2.5em', sm: '2em', xs: '1em' }} textAlign={'center'} p={4}>CONTACT</Typography>
          <ContactForm />
        </Container>
        <Box bgcolor={'rgb(13,16,34)'} mt={10}>
          <Container maxWidth='lg'>
            <Grid container justifyContent={'center'}>
              <Grid item md={6} color={'white'} fontWeight={'lighter'}>
                <Typography fontSize={{ md: '1.4em', sm: '1em', xs: '1em' }} pt={4}>JAMES CONSULTING</Typography>
                <Typography pt={4} style={linkStyle}>
                  500 Terry Francine Street, <br />
                  San Francisco, CA 94158 <br />
                  Mail: info@mysite.com <br />
                  Tel: 123-456-7890</Typography>
              </Grid>
              <Grid item md={3} color={'white'} fontWeight={'lighter'} pt={4}>
                <Typography fontSize={{ md: '1.4em', sm: '1em', xs: '1em' }}>MENU</Typography>
                <List>
                  <ListItem><Link href="/about" style={linkStyle}>About</Link></ListItem>
                  <ListItem><Link href="#" style={linkStyle}>Projects</Link></ListItem>
                  <ListItem><Link href="#" style={linkStyle}>Services</Link></ListItem>
                  <ListItem><Link href="#" style={linkStyle}>Plane</Link></ListItem>
                  <ListItem><Link href="#" style={linkStyle}>Tools</Link></ListItem>
                  <ListItem><Link href="#" style={linkStyle}>Contact</Link></ListItem>
                </List>
              </Grid>
              <Grid item md={3} color={'white'} fontWeight={'lighter'} pt={4} textAlign={'center'}>
                <Typography fontSize={{ md: '1.4em', sm: '1em', xs: '1em' }}>SOCIAL</Typography>
                <br />
                <Facebook fontSize='large' />
                <Twitter fontSize='large' />
                <Box mt={5}>
                  <Typography style={linkStyle}>© 2035 by JAMES CONSULTING. <br />
                    Powered and secured by Wix</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box >
      </Box>
    </div>
  )
}

export default Footer;

const linkStyle = {
  textDecoration: "none",
  color: 'White',
  fontSize: 15,
}
