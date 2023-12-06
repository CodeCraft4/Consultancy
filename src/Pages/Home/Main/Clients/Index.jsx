import React from 'react'
import {Container, Grid, Typography } from '@mui/material'

const LOGO_IMG = [
  {
    logo: 'https://logowik.com/content/uploads/images/keno-20197436.logowik.com.webp'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3VaDrYfWl3F3NaUXjo0zGS3_P2yvJXlUmlVecYyG&s'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PhmwyPdiKjWldGTDbau_mne-xH3XgISCizm5jpXi&s'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykt4IfYSppRnvBbafHhiQaUDXCGd8WFK48XvVHUOg&s'
  },
]
const ClientsLogo = () => {

  return (
    <div>
      <Container maxWidth="lg" sx={{mt:{md:10,xs:20} }}>
        <Typography fontSize={{ md: '3em', sm: '2em', xs: '1em' }} fontWeight={'lighter'} textAlign={'center'} p={4}>OUR CLIENTS</Typography>
        <Grid container spacing={10}>
        {LOGO_IMG.map((e)=>(
          <Grid item md={3} sm={6} xs={12}>
            <img src={e.logo} alt="Lgoo" 
            width={'100%'}
            height={100}
            />
          </Grid>
        ))}
        </Grid>
      </Container>
    </div>
  )
}

export default ClientsLogo;
