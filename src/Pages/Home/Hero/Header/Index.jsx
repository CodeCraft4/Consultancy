import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'


const Header = () => {
    return (
        <div>
            <Box>
                <img src="https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="imag"
                    width={'100%'}
                    height={580}
                    style={{ objectFit: 'cover', position: 'relative' }}
                />
                <Box position={'absolute'} bottom={0} width={'100%'}>
                    <Container maxWidth="md" sx={{ bgcolor: 'white', textAlign: 'center', p: 3 }}>
                        <Typography fontSize={{ md: '1.5em', xs: '1.1em' }}>Developing Innovative Strategies</Typography>
                        <Typography fontSize={{ md: '3.5em', sm: '2em', xs: '1em'}} fontWeight={'lighter'}>ACHIEVING GROWTH</Typography>
                        <Button variant='outlined' sx={{
                            p: 2,
                            outline: '1px solid black',
                            color: 'black',
                            mt:2,
                            "&:hover": {
                                background: "rgb(18,26,94)",
                                color: 'white'
                            }
                        }}
                        >Book A consultation</Button>
                    </Container>
                </Box>
            </Box>
        </div>
    )
}

export default Header
