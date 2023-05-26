import { Box, Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Creation = () => {


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
      <Box sx={{
        bgcolor: '#70908B',
        display: 'flex',
        justifyContent: 'center',
      }}>

        <Box sx={{
          ml: '4vw',
          width: { xs: '10rem', md: '15rem', sm: '10rem' },
          height: { xs: '7rem', md: '10rem', sm: '10rem' }
        }}>

          <Typography
            sx={{
              color: '#fff',
              fontSize: { xs: '2rem', lg: '3rem', md: '3rem' },
            }}
          >
            Our
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontSize: { xs: '2rem', lg: '3rem', md: '3rem' },
            }}
          >
            Own Creation
          </Typography>
          <Typography
            sx={{
              color: '#fff',
            }}
          >
            Designed in our studio
          </Typography>


          <Box sx={{
            display: 'flex',
            gap: 14
          }}>
            <Typography sx={{
              color: '#fff',
              fontWeight: '400',
              fontSize: '12px',
              mt: 2
            }}>
              More
            </Typography>
          </Box>
          <Box sx={{
            display: {xs:'none' ,sm:'block' , md:'block', lg:''}
          }}>

            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              p: '0 0 0 5rem',
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
                  alignItems: 'center'
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
                  alignItems: 'center'
                }}
              >
                <EastIcon fontSize='small' />
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
            }}>
              <Card >

                <CardActionArea>

                  <Box >
                    <img src={card.img} alt="" height={380} width={250} />
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
                          mb: 3
                        }}>
                        Explore all Rooms
                      </Button>
                    </Box>

                  </Box>
                </CardActionArea>

              </Card>

            </Box>

          ))
        }
      </Box>
    </Box>
  )
}

export default Creation