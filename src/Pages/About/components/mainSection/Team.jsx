import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { TEAM_CARD } from '../../../../constant/content'

const Team = () => {
    return (
        <div>
            <Container maxWidth='md'>
                <Box m={'auto'} width={'100%'} textAlign={'center'} pt={15} pb={15}>
                    <Typography variant='h3' fontWeight={'lighter'}>OUR TEAM</Typography>
                    <Typography>I'm a paragraph. Click here to add your <br /> own text and edit me.</Typography>
                </Box>

                <Grid container spacing={12}>
                    {TEAM_CARD.map((e) => (
                        <Grid item md={6} sm={6} xs={12}>
                            <img src={e.imgUrl} alt="teamimg" width={'100%'} />
                            <Typography variant='h5' mt={3}>{e.title}</Typography>
                            <Typography pb={3}>{e.post}</Typography>
                            <Typography style={paragraph}>I'm a paragraph. Click here to
                                add your own text and edit me.
                                It’s easy. Just click “Edit Text” or
                                double click me to add your own content
                                and make changes to the font. I’m a
                                great place for you to tell a story and
                                let your users know a little more about you.
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </div>
    )
}

export default Team;
const paragraph={
    fontSize:16,
    fontFamily:'san-sarif',
    color:'#616161'
}
