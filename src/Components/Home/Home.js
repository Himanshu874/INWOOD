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
            background: desktop ? "url(/Images/desk_bg.svg)" : tablet ? "url(/Images/tab_bg.svg)" : "url(/Images/mob_bg.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: desktop ? "flex-start" : tablet ? "flex-start" : "center",
            textAlign: desktop ? "left" : tablet ? "left" : "center",
            alignItems: 'center',
            borderRadius: '30px'
        }}>
            <Container maxWidth={'lg'}>

                <Typography variant='h2' component='div'
                    sx={{
                        color: '#07484A',
                        fontSize: desktop ? "64px" : tablet ? "50px" : "32px",
                        fontFamily:'Playfair Display',
                        fontWeight: 700
                    }}>
                    Exclusive Deals of
                </Typography>
                <Typography variant='h2' component='div'
                    sx={{
                        color: '#07484A',
                        fontSize: desktop ? "64px" : tablet ? "50px" : "32px",
                        fontFamily:'Playfair Display',
                        fontWeight: 700

                    }}>
                    Furniture Collection
                </Typography> 

                <Typography variant='subtitle1' component='div'
                    sx={{
                        color: '#07484A',
                        mt: 2,
                    }}>
                    Explore different categories. Find the best deals.
                </Typography>
                <Button variant='contained'
                    sx={{
                        bgcolor: '#70908B', 
                        textTransform: 'capitalize',
                        mt: 4,
                        height:'4rem',
                        width:'13rem',
                        fontWeight: 700,
                        '&:hover': {
                            bgcolor: '#70908B',
                        },

                    }}>
                    Shop Now
                </Button>

            </Container>
        </Box>
    )
}

export default Home