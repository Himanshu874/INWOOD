import { Box, Button, Card, CardActionArea, CardMedia, Container, Divider, Drawer, Grid, Hidden, InputAdornment, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Cate = () => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.only('xs'));
    const tablet = useMediaQuery(theme.breakpoints.only('sm'))
    const laptop = useMediaQuery(theme.breakpoints.only('md'));
    const desktop = useMediaQuery(theme.breakpoints.up('lg'));

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = [
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#07484A' }}>
            <Box>
                <Typography variant='subtitle1' sx={{ mt: 3 }}>
                    BedRoom
                </Typography>
                <Typography variant='subtitle1' sx={{ mt: 3 }}>
                    Dinning Room
                </Typography>
                <Typography variant='subtitle1' sx={{ mt: 3 }}>
                    Meeting Room
                </Typography>
                <Typography variant='subtitle1' sx={{ mt: 3 }}>
                    Workspace
                </Typography>
                <Typography variant='subtitle1' sx={{ mt: 3 }}>
                    Living Room
                </Typography>
                <Typography variant='subtitle1' sx={{ mt: 3 }}>
                    Kitchen
                </Typography>
                <Typography variant='subtitle1' sx={{ mt: 3 }}>
                    Living Space
                </Typography>

            </Box>
        </Box>
    ]

    const categories = [
        {
            name: "BedRoom",
            image: "/Images/cate1.png"
        },
        {
            name: "Dinning Room",
            image: "/Images/cate2.png"
        },
        {
            name: "Meeting Room",
            image: "/Images/cate3.png"
        },
        {
            name: "Workspace",
            image: "/Images/cate4.png"
        },
        {
            name: "Living Room",
            image: "/Images/cate5.png"
        },
        {
            name: "Kitchen",
            image: "/Images/cate6.png"
        },
    ]


    const slide = [
        {
            name: "BedRoom",
        },
        {
            name: "Dinning Room",
        },
        {
            name: "Meeting Room",
        },
        {
            name: "Workspace",
        },
        {
            name: "Living Room",
        },
        {
            name: "Kitchen",
        },
        {
            name: "BedRoom",
        },
        {
            name: "BedRoom",
        },
        {
            name: "BedRoom",
        },
        {
            name: "BedRoom",
        },
        {
            name: "BedRoom",
        }
    ]


    return (
        <Box>
            <Typography
                sx={{
                    display: 'flex',
                    mt: 3,
                    mb: 3,
                    justifyContent: 'center',
                    color: '#07484A',
                    fontSize: { xs: '2rem', lg: '3rem' }
                }}
            >
                Explore By Category
            </Typography>

            <Container maxWidth={'xl'}>

                <Grid container spacing={2}>

                    {/* left */}
                    <Grid item xs={12} sm={12} md={12} lg={3} >

                        <Box>
                            <TextField

                                id="outlined-basic"
                                variant="outlined"
                                placeholder='Search'
                                size='small'
                                sx={{
                                    position: { md: 'center', sm: 'center', xs: 'center' },
                                    backgroundColor: '#F0F0F0',
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: '#07484A' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        {/* for lg */}
                        <Hidden lgDown>
                          
                            <Box sx={{
                                mt: 2,
                                width: 200,
                                height: 320,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'auto',
                                "&::-webkit-scrollbar": {
                                    height: '10px',
                                    width: "10px"
                                },
                                "&::-webkit-scrollbar-track": {
                                    backgroundColor: '#07484A',
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    background: '#70908B'
                                }
                            }}>
                                {
                                    slide.map((card) => (
                                        <Box sx={{
                                            display: 'flex'
                                        }}>
                                            <Box sx={{
                                                width: 50
                                            }}>
                                                <Typography variant='subtitle1' component='div'
                                                    sx={{
                                                        color: '#07484A',
                                                        fontSize: 20
                                                    }}>
                                                    {card.name}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))
                                }


                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    ml: 23,
                                    mt: 2
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
                                        alignItems: 'center'
                                    }}
                                >
                                    <NorthIcon fontSize='small' />
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
                                        alignItems: 'center'
                                    }}
                                >
                                    <SouthIcon fontSize='small' />
                                </Box>

                            </Box>

                        </Hidden>



                        {/* for laptop */}
                        {
                            mobile !== true && desktop !== true && tablet !== true &&
                            < Box >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 2,
                                        color: '#07484A'
                                    }}
                                >
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        BedRoom
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Dinning Room
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Meeting Room
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Workspace
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 2,
                                        color: '#07484A'
                                    }}
                                >
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Living Room
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Kitchen
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Living Space
                                    </Typography>
                                </Box>

                            </Box>
                        }


                        {/* for med */}


                        {
                            mobile !== true && desktop !== true && laptop !== true &&
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 2,
                                        color: '#07484A'
                                    }}
                                >
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        BedRoom
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Dinning Room
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Meeting Room
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Workspace
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 2,
                                        color: '#07484A'
                                    }}
                                >
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Living Room
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Kitchen
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ mt: 3 }}>
                                        Living Space
                                    </Typography>
                                </Box>
                            </Box>
                        }



                        {/*For small  */}
                        <Hidden xs>
                            <IconButton
                                aria-label='open drawer'
                                edge='start'
                                sx={{
                                    mr: 2,
                                    display: { xs: "block", sm: "none", md: "none", lg: "none", xl: "none" },
                                }}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon sx={{ color: '#07484A' }} />
                            </IconButton>

                            <Box component='nav'>
                                <Drawer variant='temporary'
                                    open={mobileOpen}
                                    onClose={handleDrawerToggle}
                                    sx={{
                                        display: { xs: 'block', sm: 'none' },
                                        "& .MuiDrawer-paper": {
                                            boxSizing: "border-box",
                                            width: "240px",
                                        }
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                            </Box>
                        </Hidden>



                        <Button variant='contained' endIcon={<ArrowForwardIcon />}
                            sx={{
                                bgcolor: '#70908B',
                                textTransform: 'capitalize',
                                mt: 3,
                                position: { md: 'center', sm: 'center', xs: 'center' },

                            }}>
                            All Categories
                        </Button>
                    </Grid>


                    {/* Right */}
                    <Grid item xs={12} sm={12} md={12} lg={9}>
                        <Grid container spacing={2}>
                            {
                                categories.map((card) => (

                                    <Grid item xs={12} md={6} sm={6} lg={6}>
                                        <Card sx={{
                                            position: 'relative'
                                        }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="300"
                                                    width="300"
                                                    image={card.image}
                                                />
                                            </CardActionArea>
                                            <Box sx={{
                                                position: 'absolute',
                                                opacity: 0,
                                                '&:hover': {
                                                    background: 'rgba(23, 61, 79, 0.7)',
                                                    opacity: 0.8,
                                                },
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexDirection: 'column',
                                                textAlign: 'center'
                                            }}>
                                                <Typography variant='h4'
                                                    sx={{
                                                        color: 'white',
                                                        mb: 2
                                                    }}>
                                                    {card.name}
                                                </Typography>

                                                
                                                <Box>

                                                    <Button variant='contained'
                                                        sx={{
                                                            bgcolor: '#70908B',
                                                            textTransform: 'capitalize',
                                                        }}>
                                                        Explore
                                                    </Button>
                                                </Box>

                                            </Box>
                                        </Card>
                                    </Grid>
                                ))
                            }

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Cate