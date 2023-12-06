import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'


const AboutUs = () => {
    return (
        <div>
            <Box position={'relative'} mt={8}>
                <img src="https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="iamge"
                    width={'100%'}
                    height={600}
                    style={{ objectFit: 'cover', opacity: .5, position: 'relative',}}
                />
                <Box sx={{ position: 'absolute', width: '100%', top: 0,textAlign:'center'}}>
                <Container maxWidth='sm'>
                    <Box mt={10}>
                        <Typography fontSize={{ md: '2em', xs: '1em' }} p={4}>ABOUT US</Typography>
                        <Typography pb={4} fontSize={14} letterSpacing={2}>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                            Just click “Edit Text” or double click me to add your own content and make
                            changes to the font. Feel free to drag and drop me anywhere you like on
                            your page. I’m a great place for you to tell a story and let your users
                            know a little more about you.
                        </Typography>
                        <Typography fontSize={14} letterSpacing={2}>
                            This is a great space to write a long text about your company and
                            your services. You can use this space to go into a little more detail
                            about your company. Talk about your team and what services you provide.
                            Tell your visitors the story of how you came up with the idea for your
                            business and what makes you different from your competitors. Make your
                            company stand out and show your visitors who you are.
                        </Typography>
                    </Box>
                    <Button variant='outlined' sx={{outline:'1px solid black',color:'black',p:1,mt:6}}>Learn More</Button>
                </Container>
                </Box>
            </Box>
        </div>
    )
}

export default AboutUs
