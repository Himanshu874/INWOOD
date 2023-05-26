import React, { useState } from 'react'
import './Header.css'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {

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

            <ul className='mobNav-menu'>
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
            </ul>

           
        </Box>
    )

    return (
        <Box>
            <Box>
                <AppBar component={'nav'} elevation={0} sx={{ bgcolor: 'white' }}>
                    <Toolbar className='navbar' sx={{
                        width: '100%'
                    }}>
                        <Box>
                            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                                <img src={"/Images/Logo1.png"} alt="" width={100} />
                            </Typography>
                        </Box>
                        <IconButton
                            aria-label='open drawer'
                            edge='start'
                            sx={{
                                mr: 2,
                                display: { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" },
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon sx={{ color: '#07484A' }} />
                        </IconButton>



                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }}>
                            <ul className='nav-menu'>
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
                            </ul>
                        </Box>
                        <Box>
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
                <Toolbar />
            </Box>
        </Box>
    )
}

export default Header