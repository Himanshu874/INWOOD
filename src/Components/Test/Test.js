import { Box, Button, Card, CardMedia, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Test = () => {
    return (
        <Box>
            <Typography
                sx={{
                    textAlign: 'center',
                    mt: 6,
                    mb: 1,
                    color: '#07484A',
                    fontSize: { xs: '2rem', lg: '3rem' },
                    fontFamily: 'Playfair Display',
                    fontWeight: 700
                }}
            >
                Testimonials
            </Typography>

            <Typography
                sx={{
                    textAlign: 'center',
                    mb: 3,
                    color: '#07484A',
                    fontSize: { md: '25px', sm: '25px', xs: '20px' }
                }}
            >
                Over 15,000 happy customers.
            </Typography>


            <Container maxWidth={'lg'} sx={{ padding: 2, mt: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5} md={4} lg={4}>
                        <Box >
                            <Box sx={{
                                display: 'flex',
                                gap: 2,
                                position: 'absolute',
                                transform: "translate(-5%, -50%)"
                            }}>
                                <img src="/Images/Vector.png" height={85} width={50} />
                                <img src="/Images/Vector.png" height={85} width={50} />

                            </Box>
                            <Card>
                                <CardMedia sx={{
                                    height: '20rem',
                                    width: '100%'
                                }}
                                    component="img"
                                    image="/Images/testimg.png"
                                />
                            </Card>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={7} md={8} lg={8}>
                        <Box>

                            <Box sx={{
                                ml: 6
                            }}>
                                <Typography variant='subtitle1' sx={{ color: '#07484A', fontSize: 25 }}>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga debitis autem nihil cum. Nobis temporibus porro enim aperiam repudiandae laudantium voluptatibus, aliquid dolores soluta explicabo quis cupiditate nesciunt aperiam."
                                </Typography>

                                <Typography variant='subtitle1' sx={{
                                    color: '#07484A', mt: 2, fontSize: 18, fontWeight: 700,
                                }}>
                                    Leona Paul
                                </Typography>

                                <Typography variant='subtitle1' sx={{ color: '#07484A', fontSize: 18, fontWeight: 100 }}>
                                    CEO of Floatcom
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' },
                                ml: '50rem',
                            }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '20px'
                                    }}
                                >
                                    <Box size="small"
                                        sx={{
                                            bgcolor: '#E0EFF6',
                                            width: '25px',
                                            height: '25px',
                                            borderRadius: '100%',
                                            color: '#07484A',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer'

                                        }}
                                    >
                                        <EastIcon fontSize='small' />
                                    </Box>
                                    <Box size="small"
                                        sx={{
                                            bgcolor: '#F9D9DA',
                                            width: '25px',
                                            height: '25px',
                                            borderRadius: '100%',
                                            color: '#07484A',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer'

                                        }}
                                    >
                                        <WestIcon fontSize='small' />
                                    </Box>

                                </Box>
                            </Box>

                        </Box>

                    </Grid>
                </Grid>
            </Container>

            <Box sx={{
                display: 'flex',

            }}>
                <Divider sx={{
                    backgroundColor: '#07484A',
                    width: '70vw',
                    height: '0.1vh',
                }} />

                <Box sx={{
                    display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' },
                    ml: 2,

                }}>

                    <Button variant='text' endIcon={<ArrowForwardIcon />}
                        sx={{
                            color: '#70908B',
                            textTransform: 'capitalize',
                        }}>
                        See all review
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Test