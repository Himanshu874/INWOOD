import { Box, Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const Creation = () => {

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.only('xs'));
  const tablet = useMediaQuery(theme.breakpoints.only('sm'))
  const laptop = useMediaQuery(theme.breakpoints.only('md'));
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  const c = [
    {
      img: "/Images/c1.png",
    },
    {
      img: "/Images/c2.png",
    },
    {
      img: "/Images/c3.png",
    },
    {
      img: "/Images/c1.png",
    },
    {
      img: "/Images/c3.png",
    },
    {
      img: "/Images/c1.png",
    },
  ]

  return (
    <Box sx={{
      mt: 6,
      display: 'flex',
    }}>
      <Box>
        <Box sx={{
          bgcolor: '#70908B',
          display: 'flex',
          justifyContent: 'center',
          mt: {xs: '1rem',md:0, sm:0},
          borderRadius: '0px 15px 15px 0px'
        }}>

          <Box sx={{
            mt: 8,
            ml: '8vw',
            borderRadius: '15px',
            width: { xs: '9rem', md: '22rem', sm: '15rem' },
            height: { xs: '18rem', md: '22rem', sm: '20rem' }
          }}>
            <Typography
              sx={{
                color: '#fff',
                fontSize: { xs: '2rem', lg: '2.5rem', md: '2rem' },
                fontFamily: 'Playfair Display',
                fontWeight: 700
              }}
            >
              Our
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontSize: { xs: '2rem', lg: '2.5rem', md: '2rem' },
                fontFamily: 'Playfair Display',
                fontWeight: 700

              }}
            >
              Own Creation
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontSize: 20
              }}
            >
              Designed in our studio
            </Typography>
            <Box sx={{
              display: 'flex',
              gap: 14,
              flexDirection: 'row'
            }}>
              <Typography sx={{
                color: '#fff',
                fontWeight: '400',
                fontSize: 15,
                mt: 2
              }}>
                More
              </Typography>
              <Box sx={{
                display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' }
              }}>

                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '20px',
                  mt: 2
                }}>
                  <Box size="small"
                    sx={{
                      bgcolor: '#E0EFF6',
                      width: '25px',
                      height: '25px',
                      borderRadius: '100%',
                      color: '#07484A',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer'

                    }}
                  >
                    <WestIcon fontSize='small' />

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
                      alignItems: 'center',
                      cursor: 'pointer'

                    }}
                  >
                    <EastIcon fontSize='small' />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>


      <Box sx={{
        display: 'flex',
        overflow: 'auto',
        ml: { lg: 5, sm: 5, md: 5, xs: 0 },
        "&::-webkit-scrollbar": {
          theme: 'dark-thin',
          height: '10px',
          width: "30px",
          display: 'none'
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: '#07484A',
        },
        "&::-webkit-scrollbar-thumb": {
          background: '#70908B',
        }
      }}>
        {
          c.map((card) => (
            <Box sx={{
              display: 'flex',
              marginLeft: 2,
              cursor:'pointer',
              position:'relative'
            }}>

                  <Box >
                    <img src={card.img} alt=""
                      height={'100%'} width={250}
                    />
                  </Box>

                  <Box sx={{
                    position: 'absolute',

                    opacity: 0,
                    '&:hover': {
                      opacity: 0.8,
                    },
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexDirection: 'column',
                    textAlign: 'center',
                  }}>

                    <Box>
                      <Button variant='contained'
                        sx={{
                          bgcolor: '#ffffff',
                          color: 'black',
                          textTransform: 'capitalize',
                          fontSize: 10,
                          mb: 3,
                          '&:hover': {
                            bgcolor: '#70908B',
                        }, 
                        }}>
                        Explore all Rooms
                      </Button>
                    </Box>

                  </Box>
            </Box>

          ))
        }
      </Box>
    </Box>


  )
}

export default Creation