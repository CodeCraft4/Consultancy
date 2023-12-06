import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const MainSection = () => {
    return (
        <div>
            <Typography variant='h2' textAlign={'center'} p={10}>ABOUT</Typography>
            <Container maxWidth='md'>
                <Grid container spacing={4}>
                    <Grid item md={6} sm={6} xs={12} >
                        <Typography mt={10} style={paragraph}>
                            I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add
                            your own content and make changes to the font. Feel free to
                            drag and drop me anywhere you like on your page. I’m a great
                            place for you to tell a story and let your users know a little
                            more about you.
                        </Typography>
                        <Typography mt={4} style={paragraph}>
                            This is a great space to write a long text about your
                            company and your services. You can use this space to go
                            into a little more detail about your company. Talk about
                            your team and what services you provide. Tell your visitors
                            the story of how you came up with the idea for your business
                            and what makes you different from your competitors. Make your
                            company stand out and show your visitors who you are.
                        </Typography>

                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <img src="https://static.wixstatic.com/media/82fcd3_0fdc534469f5472699491ca8fc95574a~mv2.jpg/v1/fill/w_489,h_634,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/82fcd3_0fdc534469f5472699491ca8fc95574a~mv2.jpg"
                            width={'100%'}
                            alt="img" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default MainSection;

const paragraph = {
    fontFamily: 'san-sarif',
    fontSize: 16,
    color: '#424242'
}

