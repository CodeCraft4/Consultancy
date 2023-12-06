import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import ContactForm from './Form/Index'

const Footer = () => {
  return (
    <div>
      <Box bgcolor= {'rgb(13,56,94)'}>
        <Container maxWidth='md' sx={{color:'white'}}>
          <Typography fontSize={{md:'2.5em',sm:'2em',xs:'1em'}} textAlign={'center'} p={4}>CONTACT</Typography>
          <ContactForm/>
        </Container>
      </Box>
    </div>
  )
}

export default Footer
