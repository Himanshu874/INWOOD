import React from 'react'
import { Box, Button, Typography, Grid, useMediaQuery, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles';



const Home = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));
  const tablet = useMediaQuery(theme.breakpoints.only('sm'));
  const mobile = useMediaQuery(theme.breakpoints.only('xs'));

    return (
   
        <Box sx={{
            background: desktop ? "url(/Images/desk_bg.svg)": tablet ? "url(/Images/tab_bg.svg)" : "url(/Images/mob_bg.svg)" ,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems:'center',        
        }}>
            <Container maxWidth={'xl'}>
                <Grid container>
                    <Grid item>
                        <Typography variant='h2' component='div'
                            sx={{
                                color: '#07484A',
                                textAlign: { xs: 'center', sm: 'left', md:'left', lg: 'left', xl: 'left' },
                                fontSize:desktop?"64px":tablet?"50px":"32px"
                            }}>
                            Exclusive Deals of 
                        </Typography>
                        <Typography variant='h2' component='div'
                            sx={{
                                color: '#07484A',
                                textAlign: { xs: 'center', sm: 'left', md:'left', lg: 'left', xl: 'left' },
                                fontSize:desktop?"64px":tablet?"50px":"32px"

                            }}>
                            Furniture Collection
                        </Typography>
                        
                        <Typography variant='subtitle1' component='div'
                            sx={{
                                color: '#07484A',
                                mt: 2,
                                textAlign: { xs: 'center', sm: 'left', md:'left', lg: 'left', xl: 'left' }
                            }}>
                            Explore different categories. Find the best deals.
                        </Typography>
                        <Box
                        sx={{
                            display: 'flex',
                            mt: 2,
                            justifyContent: { xs: 'center', sm: 'left', md:'left', lg: 'left', xl: 'left' }     
                        }}
                        >
                        <Button variant='contained'
                            sx={{ bgcolor: '#70908B',     
                                  textTransform: 'capitalize'
                              }}>
                            Shop Now
                        </Button>
                        </Box>
                    </Grid>        
                </Grid>
            </Container>
        </Box>
    )
}

export default Home