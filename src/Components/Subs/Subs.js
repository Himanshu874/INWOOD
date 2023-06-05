import { Box, Button, Container, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Subs = () => {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));
    const tablet = useMediaQuery(theme.breakpoints.only('sm'));
    const mobile = useMediaQuery(theme.breakpoints.only('xs'));
    return (
        <Box
            sx={{
                mt: 6,
            }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img src="/Images/subs.png" height={'100%'} width={'100%'} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}
                    sx={{
                        backgroundColor: '#E0F6F1',
                        display: 'flex',
                        justifyContent: desktop ? "flex-start" : tablet ? "flex-start" : "center",
                        textAlign: desktop ? "left" : tablet ? "left" : "center",
                        flexDirection: 'column',
                         paddingTop: 3
                    }}>
                    <Container maxWidth={'sm'}>

                        <Typography
                            sx={{
                                color: '#07484A',
                                fontSize: { xs: '2rem', lg: '3.5rem' },
                                fontFamily: 'Playfair Display',

                            }}
                        >
                            Join Our
                        </Typography>
                        <Typography
                            sx={{
                                color: '#07484A',
                                fontSize: { xs: '2rem', lg: '3.5rem' },
                                fontWeight: 700,
                                fontFamily: 'Playfair Display',

                            }}
                        >
                            Newsletter
                        </Typography>
                        <Typography sx={{
                            color: '#07484A',
                            fontWeight: '400',
                            fontSize: '20px',
                            mt: 2
                        }}>
                            Receive exclusive deals, disounts and many offers.
                        </Typography>

                        <TextField fullWidth id="standard-basic" placeholder='Enter Your Email' variant="standard" sx={{
                            mt: 4,
                        }} />

                        <Button variant='contained' fullWidth
                            sx={{
                                bgcolor: '#70908B',
                                textTransform: 'capitalize',
                                mt: 4,
                                height: '4rem',
                                width: '13rem',
                                fontWeight: 700,
                                mb: 6,
                                '&:hover': {
                                    bgcolor: '#70908B',
                                },
                            }}>
                            Subscribe
                        </Button>

                    </Container>


                </Grid>
            </Grid>
        </Box>
    )
}

export default Subs