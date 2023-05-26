import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

const Package = () => {

  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const laptop = useMediaQuery(theme.breakpoints.only('md'))
  const tablet = useMediaQuery(theme.breakpoints.only('sm'));
  const mobile = useMediaQuery(theme.breakpoints.only('xs'));

  const pack = [
    {
      img: "/Images/pack2.png",
      name: "Living Room Special set",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing ad porro! Rem omnis aliquid.",
      price: '229.99'
    },
    {
      img: "/Images/pack2.png",
      name: "Living Room Special set",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing ad porro! Rem omnis aliquid.",
      price: '359.99'


    },
    {
      img: "/Images/pack3.png",
      name: "Living Room Special set",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing ad porro! Rem omnis aliquid.",
      price: '560.99'



    },
    {
      img: "/Images/pack3.png",
      name: "Living Room Special set",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing ad porro! Rem omnis aliquid.",
      price: '245.99'


    },
  ]



  return (

    <Box >
      <Typography
        sx={{
          display: 'flex',
          mt: 6,
          mb: 3,
          justifyContent: 'center',
          color: '#07484A',
          fontSize: { xs: '2rem', lg: '3rem' }
        }}
      >
        Special Package
      </Typography>


      {/* For lg up */}
      {
        mobile !== true && laptop !== true && tablet !== true &&
        <Box sx={{
          display: 'flex',
          gap: 6
        }} >

          {/* left */}
          <Box sx={{
            ml: 20
          }}>
            <Box>
              <img src="/Images/packfull.png" height={'400vh'} />
            </Box>
            <Box sx={{
              display: 'flex',
              mt: 2
            }}>
              <Box>
                <Typography variant='subtitle1' component='div'
                  sx={{
                    color: '#07484A',
                    mt: 2,
                  }}>
                  Larkin Wood Full Set
                </Typography>
                <Box sx={{
                  mt: 2
                }}>
                  <img src="/Images/star.png" alt="" height='30vh' />
                  <img src="/Images/star.png" alt="" height='30vh' />
                  <img src="/Images/star.png" alt="" height='30vh' />
                  <img src="/Images/star.png" alt="" height='30vh' />
                  <img src="/Images/star.png" alt="" height='30vh' />

                </Box>
                <Typography
                  sx={{
                    color: '#07484A',
                    fontWeight: '700',
                    fontSize: '15px',
                    mt: 2
                  }}>
                  $729.99
                </Typography>
              </Box>
              <Box sx={{
                ml: 38
              }}>
                <Button variant='contained' endIcon={<ShoppingCartIcon />}
                  sx={{
                    bgcolor: '#70908B',
                    textTransform: 'capitalize',
                  }}>
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
          {/* right */}
          <Box >
            <Box sx={{
              width: '100%'
            }}>
              <Typography
                sx={{
                  color: '#07484A',
                  fontWeight: '700',
                  fontSize: '18px',
                  mt: 2
                }}>
                Description
              </Typography>
              <Typography variant='subtitle1' component='div'
                sx={{
                  color: '#07484A',
                  mt: 2,
                  fontSize: 14
                }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga debitis autem nihil cum. Nobis temporibus porro enim aperiam repudiandae laudantium voluptatibus, obcaecati fugiat. Maiores, amet quaerat. Iusto, ad porro! Rem omnis aliquid dolores soluta explicabo quis cupiditate nesciunt aperiam.
              </Typography>
            </Box>

            <Box>
              <Button variant="text" size="small" endIcon={<KeyboardArrowDownIcon />} sx={{
                color: 'black',
                textTransform: 'capitalize',
              }}>See More</Button>
            </Box>

            <Box sx={{
              display: 'flex',
              gap: 1,


            }}>
              <Box>
                <img src="/Images/pack1.png" height={'100vh'} />
              </Box>
              <Box sx={{
                display: 'flex',
                gap: 2,
                bgcolor: '#E0F6F1',
                padding: ' 0 3px',
                width: 400
              }}>
                <Box>
                  <Typography variant='subtitle1' component='div'
                    sx={{
                      color: '#07484A',
                      mt: 2,
                    }}>
                    Living Room Family Set
                  </Typography>
                  <Box sx={{
                    mt: 2,

                  }}>
                    <img src="/Images/star.png" alt="" height='10vh' />
                    <img src="/Images/star.png" alt="" height='10vh' />
                    <img src="/Images/star.png" alt="" height='10vh' />
                    <img src="/Images/star.png" alt="" height='10vh' />
                    <img src="/Images/star.png" alt="" height='10vh' />

                  </Box>
                  <Typography variant='subtitle1' component='div'
                    sx={{
                      color: '#07484A',
                      mt: 2,
                      fontSize: 7
                    }}>
                    See Details
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3.5,
                  ml: 15
                }}>
                  <Typography variant='subtitle1' component='div'
                    sx={{
                      color: '#07484A',
                      mt: 2,
                    }}>
                    $229.99
                  </Typography>

                  <Box>
                    <img src="/Images/Zoom.png" alt="" />
                  </Box>
                </Box>
              </Box>

            </Box>

            <Box sx={{
              width: 500,
              height: 200,
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
                background: '#70908B',
                height: '2rem'
              }
            }}>
              {
                pack.map((card) => (
                  <Box sx={{
                    display: 'flex'
                  }}>
                    <Box>
                      <img src={card.img} alt="" style={{ width: '90%', height: 90 }} />
                    </Box>
                    <Box sx={{
                      display: 'flex',
                    }}>
                      <Box>
                        <Typography variant='subtitle1' component='div'
                          sx={{
                            color: '#07484A',
                            fontSize: 11
                          }}>
                          {card.name}
                        </Typography>
                        <Box >
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />

                        </Box>
                        <Typography variant='subtitle1' component='div'
                          sx={{
                            color: '#07484A',
                            fontSize: 7
                          }}>
                          {card.des}
                        </Typography>

                        <Box>
                          <Button variant="text" size="small" endIcon={<KeyboardArrowDownIcon />} sx={{
                            color: 'black',
                            textTransform: 'capitalize'
                          }}>See More</Button>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant='subtitle1' component='div'
                          sx={{
                            color: '#07484A',
                            fontSize: 10
                          }}>
                          $ {card.price}
                        </Typography>

                      </Box>
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
                ml: 60,
                mt: 2
              }}
            >
              <Box
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
              <Box
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
          </Box>



        </Box>
      }

      {/* for md */}
      {
        mobile !== true && desktop !== true && tablet !== true &&
        <Box>
          <Box sx={{
            ml: 2,
            display: 'flex',
            flexDirection: 'row',
            gap: 2
          }}>

            <Box>
              <img src="/Images/packfull.png" height={'400vh'} />
            </Box>
            <Box>
              <Typography variant='subtitle1' component='div'
                sx={{
                  color: '#07484A',
                  mt: 2,
                  fontSize: 20
                }}>
                Larkin Wood Full Set
              </Typography>
              <Box sx={{
                mt: 2
              }}>
                <img src="/Images/star.png" alt="" height='20vh' />
                <img src="/Images/star.png" alt="" height='20vh' />
                <img src="/Images/star.png" alt="" height='20vh' />
                <img src="/Images/star.png" alt="" height='20vh' />
                <img src="/Images/star.png" alt="" height='20vh' />

              </Box>
              <Typography
                sx={{
                  color: '#07484A',
                  fontWeight: '700',
                  fontSize: '15px',
                  mt: 2
                }}>
                $729.99
              </Typography>

              <Box sx={{
                mt: 2
              }}>
                <Button variant='contained' endIcon={<ShoppingCartIcon />}
                  sx={{
                    bgcolor: '#70908B',
                    textTransform: 'capitalize',
                  }}>
                  Add to cart
                </Button>
                <Typography
                  sx={{
                    color: '#07484A',
                    fontWeight: '700',
                    fontSize: '14px',
                    mt: 2
                  }}>
                  Description
                </Typography>
                <Typography variant='subtitle1' component='div'
                  sx={{
                    color: '#07484A',
                    mt: 2,
                    fontSize: 15
                  }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga debitis autem nihil cum. Nobis temporibus porro enim aperiam repudiandae laudantium.
                </Typography>
              </Box>
            </Box>
          </Box>
          
          <Box>
            <Box sx={{
              mt: 1,
              ml: 2,
              width: 1000,
              display: 'flex',
              flexDirection: 'row',
              overflow: 'auto',
              "&::-webkit-scrollbar": {
                height: '10px',
                width: "10px"
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: '#07484A',
              },
              "&::-webkit-scrollbar-thumb": {
                background: '#70908B',
                height: '2rem'
              }
            }}>
              {
                pack.map((card) => (
                  <Box sx={{
                    display: 'flex',

                  }}>
                    <Box>
                      <img src={card.img} alt="" style={{ width: '100%', height: 90 }} />
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      width: 800
                    }}>
                      <Box>
                        <Typography variant='subtitle1' component='div'
                          sx={{
                            color: '#07484A',
                            fontSize: 11
                          }}>
                          {card.name}
                        </Typography>
                        <Box >
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />

                        </Box>
                        <Typography variant='subtitle1' component='div'
                          sx={{
                            color: '#07484A',
                            fontSize: 7
                          }}>
                          {card.des}
                        </Typography>

                        <Box>
                          <Button variant="text" size="small" endIcon={<KeyboardArrowDownIcon />} sx={{
                            color: 'black',
                            textTransform: 'capitalize'
                          }}>See More</Button>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant='subtitle1' component='div'
                          sx={{
                            color: '#07484A',
                            fontSize: 10
                          }}>
                          $ {card.price}
                        </Typography>

                      </Box>
                    </Box>

                  </Box>
                ))
              }
            </Box>
          </Box>

        </Box>
      }


      {/* For sm*/}
      {
        desktop !== true && mobile !== true && laptop !== true &&
        <Box sx={{
          ml: 2
        }}>
          <Box>
            <Box>
              <img src="/Images/packfull.png" height={'500vh'} />
            </Box>
            <Box>
              <Typography variant='subtitle1' component='div'
                sx={{
                  color: '#07484A',
                  mt: 2,
                }}>
                Larkin Wood Full Set
              </Typography>
              <Box sx={{
                mt: 2
              }}>
                <img src="/Images/star.png" alt="" height='20vh' />
                <img src="/Images/star.png" alt="" height='20vh' />
                <img src="/Images/star.png" alt="" height='20vh' />
                <img src="/Images/star.png" alt="" height='20vh' />
                <img src="/Images/star.png" alt="" height='20vh' />

              </Box>
              <Typography
                sx={{
                  color: '#07484A',
                  fontWeight: '700',
                  fontSize: '15px',
                  mt: 2
                }}>
                $729.99
              </Typography>

              <Box sx={{
                mt: 2
              }}>
                <Button variant='contained' endIcon={<ShoppingCartIcon />}
                  sx={{
                    bgcolor: '#70908B',
                    textTransform: 'capitalize',
                  }}>
                  Add to cart
                </Button>
                <Typography
                  sx={{
                    color: '#07484A',
                    fontWeight: '700',
                    fontSize: '14px',
                    mt: 2
                  }}>
                  Description
                </Typography>
                <Typography variant='subtitle1' component='div'
                  sx={{
                    color: '#07484A',
                    mt: 2,
                    fontSize: 10
                  }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga debitis autem nihil cum. Nobis temporibus porro enim aperiam repudiandae laudantium.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box sx={{
              width: 750,
              display: 'flex',
              flexDirection: 'row',
              overflow: 'auto',
              "&::-webkit-scrollbar": {
                height: '10px',
                width: "10px"
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: '#07484A',
              },
              "&::-webkit-scrollbar-thumb": {
                background: '#70908B',
                height: '2rem'
              }
            }}>
              {
                pack.map((card) => (
                  <Box sx={{
                    display: 'flex',

                  }}>
                    <Box>
                      <img src={card.img} alt="" style={{ width: '100%', height: 90 }} />
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      width: 800
                    }}>
                      <Box>
                        <Typography variant='subtitle1' component='div'
                          sx={{
                            color: '#07484A',
                            fontSize: 11
                          }}>
                          {card.name}
                        </Typography>
                        <Box >
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />
                          <img src="/Images/star.png" alt="" height='10vh' />

                        </Box>
                        <Typography variant='subtitle1' component='div'
                          sx={{
                            color: '#07484A',
                            fontSize: 7
                          }}>
                          {card.des}
                        </Typography>

                        <Box>
                          <Button variant="text" size="small" endIcon={<KeyboardArrowDownIcon />} sx={{
                            color: 'black',
                            textTransform: 'capitalize'
                          }}>See More</Button>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant='subtitle1' component='div'
                          sx={{
                            color: '#07484A',
                            fontSize: 10
                          }}>
                          $ {card.price}
                        </Typography>

                      </Box>
                    </Box>

                  </Box>
                ))
              }
            </Box>
          </Box>
        </Box>
      }

      {/* For xs */}
      {
        desktop !== true && tablet !== true && laptop !== true &&

        <Box >
          <Box sx={{
            // display: 'flex',
            // justifyContent: 'center',
            // flexDirection: 'column',
            ml: 1
          }}>

            <Typography variant='subtitle1' component='div'
              sx={{
                color: '#07484A',
                mt: 2,
              }}>
              Larkin Wood Full Set
            </Typography>

            <Box sx={{
              mt: 2
            }}>
              <img src="/Images/star.png" alt="" height='20vh' />
              <img src="/Images/star.png" alt="" height='20vh' />
              <img src="/Images/star.png" alt="" height='20vh' />
              <img src="/Images/star.png" alt="" height='20vh' />
              <img src="/Images/star.png" alt="" height='20vh' />

            </Box>
            <Typography
              sx={{
                color: '#07484A',
                fontWeight: '700',
                fontSize: '15px',
                mt: 2
              }}>
              $729.99
            </Typography>

            <Button variant='contained' endIcon={<ShoppingCartIcon />}
              sx={{
                bgcolor: '#70908B',
                textTransform: 'capitalize',
                mt: 2,

              }}>
              Add to cart
            </Button>

            <Box sx={{
              mt: 2
            }}>
              <img src="/Images/packfull.png" height={'200vh'} />
            </Box>
            <Typography
              sx={{
                color: '#07484A',
                fontWeight: '700',
                fontSize: '14px',
                mt: 2
              }}>
              Description
            </Typography>
            <Typography variant='subtitle1' component='div'
              sx={{
                color: '#07484A',
                mt: 2,
                fontSize: 10
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga debitis autem nihil cum. Nobis temporibus porro enim aperiam repudiandae laudantium.
            </Typography>


            <Divider sx={{
              mt: 2,
              backgroundColor: '#07484A',
              width: '90vw',
              height: '0.1vh',
            }} />
          </Box>

        </Box>
      }
    </Box>

  )
}

export default Package