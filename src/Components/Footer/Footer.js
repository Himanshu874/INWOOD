import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
      background: '#F3F6F5',
      padding: 6
    }}>
      <Container maxWidth={'lg'}>

        <Grid container spacing={15}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box>
              <img alt=" Footer Logo" src="/Images/footlogo.svg" />
            </Box>
            <Box sx={{
              mt: 3,
              display: 'flex',
              gap: '1rem'
            }}>
              <img src="/Images/fb.png" height={20} width={20} style={{cursor: 'pointer'}}/>
              <img src="/Images/ig.png" height={20} width={20} style={{cursor: 'pointer'}}/>
              <img src="/Images/ln.png" height={20} width={20} style={{cursor: 'pointer'}}/>
              <img src="/Images/ball.png" height={20} width={20} style={{cursor: 'pointer'}}/>
              <img src="/Images/tw.png" height={20} width={20} style={{cursor: 'pointer'}}/>

            </Box>
            <Box >
              <Typography
                sx={{
                  color: '#07484A',
                  fontWeight: '700',
                  fontSize: '15px',
                  mt: 2
                }}>
                Address
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2
              }}>
                +123 678 456
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2
              }}>
                635 The Bronx, NY
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2
              }}>
                14568, USA
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <Box>
              <Typography
                sx={{
                  color: '#07484A',
                  fontWeight: '700',
                  fontSize: '15px',
                  mt: 2
                }}>
                My Account
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Sign in
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Register
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Order Status
              </Typography>

            </Box>
            <Box>
              <Typography
                sx={{
                  color: '#07484A',
                  fontWeight: '700',
                  fontSize: '15px',
                  mt: 2
                }}>
                Help
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Shipping
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Returns
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Sizing
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <Box>
              <Typography
                sx={{
                  color: '#07484A',
                  fontWeight: '700',
                  fontSize: '15px',
                  mt: 2
                }}>
                Shop
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                All Product
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Bedroom
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Dinning room
              </Typography>

            </Box>
            <Box>
              <Typography
                sx={{
                  color: '#07484A',
                  fontWeight: '700',
                  fontSize: '15px',
                  mt: 2,

                }}>
                Legal Stuff
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Shopping & Delivery
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Term & Conditions
              </Typography>
              <Typography sx={{
                color: '#07484A',
                fontWeight: '400',
                fontSize: '15px',
                mt: 2,
                cursor: 'pointer'

              }}>
                Privacy & Policy
              </Typography>
            </Box> 
          </Grid>
        </Grid>
        <Box>
          <Typography sx={{
            color: '#07484A',
            fontWeight: '400',
            fontSize: '15px',
            mt: 4
          }}>
            Copyright © 2020 INWOOD. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer