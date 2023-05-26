import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Exp = () => {
    return (
        <Box sx={{
            bgcolor: '#E0EFF6',
        }}>

            <Box>
                <Typography
                    sx={{
                        display: 'flex',
                        mt: 3,
                        mb: 1,
                        justifyContent: 'center',
                        color: '#07484A',
                        fontSize: { xs: '1.5rem', lg: '3rem' }
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
                        <Box>
                            <Typography
                                sx={{
                                    color: '#07484A',
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    mt: 2
                                }}>
                                Payment Method
                            </Typography>

                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: '12px',
                                mt: 2
                            }}>
                                We offer flexible payment
                            </Typography>

                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: '12px',
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

                        <Box>
                            <Typography
                                sx={{
                                    color: '#07484A',
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    mt: 2
                                }}>
                                Return Policy
                            </Typography>
                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: '12px',
                                mt: 2
                            }}>
                                We can return a product
                            </Typography>
                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: '12px',
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

                        <Box>
                            <Typography
                                sx={{
                                    color: '#07484A',
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    mt: 2
                                }}>
                                Customer support
                            </Typography>
                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: '12px',
                                mt: 2
                            }}>
                                Our customer support
                            </Typography>
                            <Typography sx={{
                                color: '#07484A',
                                fontWeight: '400',
                                fontSize: '12px',
                            }}>
                                is 24/7
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box>
                        <img src="/Images/2.png" />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                color: '#07484A',
                                fontWeight: '700',
                                fontSize: '20px',
                                mt: 2
                            }}>
                            Return Policy
                        </Typography>
                        <Typography sx={{
                            color: '#07484A',
                            fontWeight: '400',
                            fontSize: '12px',
                            mt: 2
                        }}>
                            We can return a product
                        </Typography>
                        <Typography sx={{
                            color: '#07484A',
                            fontWeight: '400',
                            fontSize: '12px',
                        }}>
                            within 30 days.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: "flex", justifyContent: "center" }} >
                    <Box>
                        <img src="/Images/3.png" />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                color: '#07484A',
                                fontWeight: '700',
                                fontSize: '20px',
                                mt: 2
                            }}>
                            Customer support
                        </Typography>
                        <Typography sx={{
                            color: '#07484A',
                            fontWeight: '400',
                            fontSize: '12px',
                            mt: 2
                        }}>
                            Our customer support
                        </Typography>
                        <Typography sx={{
                            color: '#07484A',
                            fontWeight: '400',
                            fontSize: '12px',
                        }}>
                            is 24/7
                        </Typography>
                    </Box>
                </Grid> */}
            </Grid>
        </Box>
    )
}

export default Exp