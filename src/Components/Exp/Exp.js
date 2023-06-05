import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Exp = () => {
    return (
        <Box sx={{
            bgcolor: '#E0EFF6',
            pb:10
        }}>

            <Box>
                <Typography
                    sx={{
                        display: 'flex',
                        mt: 10,
                        mb: 1,
                        pt: 10,
                        pb: 6,
                        justifyContent: 'center',
                        color: '#07484A',
                        fontSize: { xs: '1.5rem', lg: '3rem' },
                        fontFamily:'Playfair Display',
                        fontWeight: 700
                    }}
                >
                    Benefits of your expediency
                </Typography>
            </Box>

            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <img src="/Images/1.png" height={100} width={100} />
                        </Box>
                        <Box sx={{
                            display:'flex',
                            flexDirection: 'column',
                            textAlign:'center'
                        }}>
                            <Typography
                                sx={{
                                    color: '#07484A',
                                    fontWeight: '700',
                                    fontSize: 30,
                                    mt: 2,
                                    fontFamily:'Playfair Display',
                                    fontWeight: 700
                                }}>
                                Payment Method
                            </Typography>

                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: 20,
                                mt: 2
                            }}>
                                We offer flexible payment
                            </Typography>

                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: 20,
                            }}>
                                options, to make easier.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <img src="/Images/2.png" height={100} width={100} />
                        </Box>

                        <Box sx={{
                            display:'flex',
                            flexDirection: 'column',
                            textAlign:'center'
                        }}>
                            <Typography
                                sx={{
                                    color: '#07484A',
                                    fontWeight: '700',
                                    fontSize: 30,
                                    mt: 2,
                                    fontFamily:'Playfair Display',
                                    fontWeight: 700
                                }}>
                                Return Policy
                            </Typography>
                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: 20,
                                mt: 2
                            }}>
                                We can return a product
                            </Typography>
                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: 20,
                            }}>
                                within 30 days.
                            </Typography>
                        </Box> 
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <img src="/Images/3.png" height={100} width={100} />
                        </Box>

                        <Box sx={{
                            display:'flex',
                            flexDirection: 'column',
                            textAlign:'center'
                        }}>
                            <Typography
                                sx={{
                                    color: '#07484A',
                                    fontWeight: '700',
                                    fontSize: 30,
                                    mt: 2,
                                    fontFamily:'Playfair Display',
                                    fontWeight: 700
                                }}>
                                Customer support
                            </Typography>
                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: 20,
                                mt: 2
                            }}>
                                Our customer support
                            </Typography>
                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: 20,
                            }}>
                                is 24/7
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Exp