import React, { useState } from 'react'
import { useTheme } from '@emotion/react';
import {Swipe } from '@mui/icons-material';
import { Box, Button, Container, MobileStepper, Paper, Typography } from '@mui/material'
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CAROUSEL_TEXT } from 'constant/content';

const AutoPlaySwipeableViews = autoPlay(Swipe);


const Carousel = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = CAROUSEL_TEXT.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div>
            <Box mt={10} sx={{ bgcolor: '#eeeeee', pt: 9 }} >
                <Container maxWidth='md'>
                    <Typography fontSize={{ md: '2.5em', sm: '2em', xs: '1em' }} fontWeight={'lighter'} textAlign={'center'} p={4}>TESTIMONIALS</Typography>
                    <Box sx={{ Width: '100%', flexGrow: 1 }} p={5} position={'relative'}>
                        <Paper
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: '#eeeeee'
                            }}
                        >
                            <Box pt={4} maxWidth={500} m={'auto'} color={'black'} textAlign={'center'}>
                                <Typography variant='h6' fontSize={{ md: '15px', xs: '15px' }}>{CAROUSEL_TEXT[activeStep].description}</Typography>
                                <Typography pt={2} fontSize={{ md: '1.2em', xs: '10px' }} color={'blue'}>{CAROUSEL_TEXT[activeStep].post}</Typography>
                                <Typography>{CAROUSEL_TEXT[activeStep].name}</Typography>
                            </Box>
                        </Paper>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            sx={{ mt: 20, color: 'transparent', }}
                            onChangeIndex={handleStepChange}
                        >
                            {CAROUSEL_TEXT.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            sx={{
                                                height: 255,
                                                display: 'block',
                                                maxWidth: 400,
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            txt={step.description}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant='dots'
                            activeStep={activeStep}
                            sx={{bgcolor: '#eeeeee',cursor: 'pointer', display: 'flex', m: 'auto', justifyContent: 'center' }}

                        />
                        {/* to make a build a simple button */}
                        <Box position={'absolute'} top={130} right={0} display={'flex'} flexDirection={'column'}>
                            <Button
                                onClick={activeStep === maxSteps - 1 ? () => setActiveStep(0) : handleNext}
                                sx={{ borderRadius: '50%', p: 2, height: 65, m: 1 }}
                            >
                                <ArrowForwardIosIcon fontSize='large' sx={{ color: 'gray' }} />
                            </Button>
                        </Box>
                        <Box position={'absolute'} top={130} left={0} display={'flex'} flexDirection={'column'}>
                            <Button
                                onClick={activeStep === 0 ? () => setActiveStep(maxSteps - 1) : handleBack}
                                sx={{ borderRadius: '50%', p: 2, height: 65,m: 1 }}
                            >
                                <ArrowBackIosIcon fontSize='large' sx={{ color: 'gray' }} />
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Carousel
