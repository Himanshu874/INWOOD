import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Subs = () => {
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
                            justifyContent: 'center',
                            flexDirection: 'column',
                            padding: 10
                     }}>
                    <Typography
                        sx={{
                            color: '#07484A',
                            fontSize: { xs: '2rem', lg: '3rem' },
                        }}
                    >
                        Join Our
                    </Typography>
                    <Typography
                        sx={{
                            color: '#07484A',
                            fontSize: { xs: '2rem', lg: '3rem' },
                            fontWeight: 700
                        }}
                    >
                        Newsletter
                    </Typography>
                    <Typography sx={{
                        color: '#07484A',
                        fontWeight: '400',
                        fontSize: '15px',
                        mt: 2
                    }}>
                        Receive exclusive deals, disounts and many offers.
                    </Typography>
                    <Box
                        sx={{
                            mt: 2,
                        }}>
                        <TextField id="standard-basic" placeholder='Enter Your Email' variant="standard"  />
                    </Box>
                    <Box>
                        <Button variant='contained'
                            sx={{
                                bgcolor: '#70908B',
                                textTransform: 'capitalize',
                                mt: 2,
                                width: '10vw'
                            }}>
                            Subscribe
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Subs