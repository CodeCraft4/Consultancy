import React from 'react'
import { Box, Grid, Input, InputLabel, TextField } from '@mui/material'

const ContactForm = () => {
    return (
        <div>
            <Grid container spacing={8} p={2} color={'white'}>
                <Grid item md={6} sm={6} xs={12} >
                    <Box mt={6}>
                        <InputLabel htmlFor='text' sx={{ color: 'white', fontSize: '18px', fontWeight: 'lighter' }}>First Name</InputLabel>
                        <Input
                            type='text'
                            id='text'
                            required
                            variant={'standered'}
                            fullWidth
                            sx={{ color: 'white', borderBottom: '2px solid white' }}
                        />
                    </Box>
                    <Box mt={6}>
                        <InputLabel htmlFor='email' sx={{ color: 'white', fontSize: '18px', fontWeight: 'lighter' }}>Email*</InputLabel>
                        <Input
                            type='email'
                            id='email'
                            variant={'standered'}
                            sx={{ color: 'white', borderBottom: '2px solid white' }}
                            fullWidth
                            required
                        />
                    </Box>
                </Grid>
                <Grid item md={6} sm={6} xs={12} >
                    <Box mt={6}>
                        <InputLabel htmlFor='lastText' sx={{ color: 'white', fontSize: '18px', fontWeight: 'lighter' }}>Last Name</InputLabel>
                        <Input
                            type='text'
                            id='lastText'
                            variant={'standered'}
                            sx={{ color: 'white', borderBottom: '2px solid white' }}
                            required
                            fullWidth
                        />
                    </Box>
                    <Box mt={6}>
                        <InputLabel htmlFor='subject' sx={{ color: 'white', fontSize: '18px', fontWeight: 'lighter' }}>Subject</InputLabel>
                        <Input
                            type='text'
                            id='subject'
                            variant={'standered'}
                            sx={{ color: 'white', borderBottom: '2px solid white' }}
                            fullWidth
                            required

                        />
                    </Box>
                </Grid>
            </Grid>
            <Box mt={5} alignItems={'center'}>
                <InputLabel sx={{ color: 'white' }}>Message*</InputLabel>
                <TextField
                    multiline
                    rows={4}
                    sx={{ width: {md:'75%',xs:'100%'}, color: 'white', borderBottom: '2px solid white' }}
                    variant="standard"
                    required

                />
                <Input
                    type='submit'
                    sx={{
                        p: 2,
                        outline: '1px solid white',
                        mt: 5,
                        color: 'white',
                        mx: 4,
                        width: {md:'15%',xs:'40%'},
                        borderRadius: 1,
                        "&:hover": {
                            background: 'white',
                            color: 'black',
                        }
                    }}
                />
            </Box>
        </div >
    )
}

export default ContactForm;
