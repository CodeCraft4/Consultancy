import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { DEMO_DATA, SERVICE_DATE } from 'constant/content';


const InfoJob = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Typography fontSize={{ md: '4em', sm: '2em', xs: '1em' }} fontWeight={'lighter'} textAlign={'center'} mt={8}>Services</Typography>
                <Box mt={8} display={{ md: 'flex', sm: 'flex', xs: 'block' }} gap={8} textAlign={'center'}>
                    {DEMO_DATA.map((e) => (
                        <Box>
                            <Typography fontSize={{ md: '2.5em', sm: '2em', xs: '1em' }} p={2} fontWeight={'lighter'}>{e.title}</Typography>
                            <img src={e.icons} alt="icons" width={'20%'}
                                style={{ borderRadius: '50%' }}
                            />
                            <Typography style={paragraph}>{e.description}</Typography>
                            <Button
                                variant='outlined'
                                sx={{
                                    p: 1,
                                    outline: '1px solid black',
                                    color: 'black',
                                    mt: 5,
                                    width: '50%',
                                    "&:hover": {
                                        background: "rgb(18,26,94)",
                                        color: 'white'
                                    }
                                }}
                            >More Info</Button>
                        </Box>
                    ))}
                </Box>
                <Grid container spacing={12}>
                    {SERVICE_DATE.map((e) => (
                        <Grid item md={6} sm={6} xs={12} mt={10} textAlign={'center'}>
                            <Typography fontSize={{ md: '2.5em', sm: '2em', xs: '1em' }} fontWeight={'lighter'} p={2}>{e.title}</Typography>
                            <Typography style={paragraph}>{e.description}</Typography>
                            <Button
                                variant='outlined'
                                sx={{
                                    p: 1,
                                    outline: '1px solid black',
                                    color: 'black',
                                    mt: 5,
                                    width:{md:'50%',xs:'80%'},
                                    "&:hover": {
                                        background: "rgb(18,26,94)",
                                        color: 'white'
                                    }
                                }}

                            >More Info</Button>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default InfoJob;

const paragraph = {
    fontSize: 14,
    mrginTop: 3
}
