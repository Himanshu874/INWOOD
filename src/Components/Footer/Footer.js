import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
      background: '#F3F6F5',
      padding: 6
    }}>
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
            <img src="/Images/fb.png" height={20} width={20} />
            <img src="/Images/ig.png" height={20} width={20} />
            <img src="/Images/ln.png" height={20} width={20} />
            <img src="/Images/ball.png" height={20} width={20} />
            <img src="/Images/tw.png" height={20} width={20} />

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
              fontSize: '12px',
              mt: 2
            }}>
              +123 678 456
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
            }}>
              635 The Bronx, NY
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
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
              fontSize: '12px',
              mt: 2
            }}>
              Sign in
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
            }}>
              Register
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
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
              fontSize: '12px',
              mt: 2
            }}>
              Shipping
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
            }}>
              Returns
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
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
              fontSize: '12px',
              mt: 2
            }}>
              All Product
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
            }}>
              Bedroom
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
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
                mt: 2
              }}>
              Legal Stuff
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
            }}>
              Shopping & Delivery
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
            }}>
              Term & Conditions
            </Typography>
            <Typography sx={{
              color: '#07484A',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
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
              fontSize: '12px',
              mt: 4
            }}>
              Copyright © 2020 INWOOD. All Rights Reserved
            </Typography>
      </Box>
    </Box>
  )
}

export default Footer