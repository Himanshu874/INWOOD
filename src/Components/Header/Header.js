import React, { useState } from 'react'
import { AppBar, Box, Container, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';
import { Laptop } from '@mui/icons-material';

const Header = () => {

    const menu = [
        {
            title: 'Home'
        },
        {
            title: 'Products'
        },
        {
            title: 'Categories'
        },
        {
            title: 'About'
        },
        {
            title: 'Contact Us'
        },
    ]


    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('lg'));
    const laptop = useMediaQuery(theme.breakpoints.up('md'));
    const tablet = useMediaQuery(theme.breakpoints.only('sm'));
    const mobile = useMediaQuery(theme.breakpoints.only('xs'));

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    <img src={"/Images/Logo1.png"} alt="" width={100} />
                </Typography>
                <Divider />
            </Box>

            {/* <ul className='mobNav-menu'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/Product'}>Products</Link>
                </li>
                <li>
                    <Link to={'/Categories'}>Categories</Link>
                </li>
                <li>
                    <Link to={'/About'}>About</Link>
                </li>
                <li>
                    <Link to={'/Contact'}>Contact Us</Link>
                </li>
            </ul> */}
            {
                menu.map((e) => (
                    <List>
                        <ListItem>
                            <Typography sx={{
                                color: '#07484A',
                                fontFamily: 'Playfair Display',

                            }}>
                                {e.title}</Typography>
                        </ListItem>
                    </List>
                )
                )}


        </Box>
    )



    return (
        <>
            <AppBar elevation={0} sx={{ bgcolor: 'white' }}>
                <Box sx={{
                        paddingLeft: desktop ? "10rem" :laptop ? "0" :tablet ? "0" : "0",
                        paddingRight: desktop ? "10rem" :laptop ? "0" : tablet ? "0" : "0",
                }}>

                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <img src={"/Images/Logo1.png"} alt="" width={100} />

                        <IconButton
                            aria-label='open drawer'
                            edge='start'
                            sx={{
                                display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon sx={{ color: '#07484A' }} />
                        </IconButton>

                        <Box sx={{
                            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
                        }}>
                            {
                                menu.map((e) => (
                                    <List>
                                        <ListItem>
                                            <Typography sx={{
                                                color: '#07484A',
                                                fontFamily: 'Playfair Display',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                    fontWeight: 600
                                                },
                                            }}>
                                                {e.title}</Typography>
                                        </ListItem>
                                    </List>
                                )
                                )}


                        </Box>

                        <Box sx={{
                            display:'flex',
                            gap: desktop ? "2rem":laptop ? "2rem" : tablet ? "2rem": "0px"
                        }}>
                            <IconButton className='nav-icon'>
                                <SearchIcon sx={{ color: '#07484A' }} />
                            </IconButton>
                            <IconButton className='nav-icon'>
                                <ShoppingCartIcon sx={{ color: '#07484A' }} />
                            </IconButton>
                            <IconButton className='nav-icon'>
                                <AccountCircleIcon sx={{ color: '#07484A' }} />
                            </IconButton>
                        </Box>


                    </Toolbar>
                </Box>

            </AppBar>
            <Box component='nav'>
                <Drawer variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'block' },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: "240px",
                        }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

export default Header