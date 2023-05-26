import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SwiperSlide, Swiper } from 'swiper/react'

const Product = () => {

  const pro = [
    {
      name: "Arm Chair",
      img: "/Images/ArmChair.png",
      property: 'Light Single Chair',
      price: '145',
      bgColor: '#CAF3E5'
    },
    {
      name: "Premium Sofa",
      img: "/Images/PreSofa.png",
      property: 'Light Single Chair',
      price: '145',
      bgColor: '#E0EFF6'

    },
    {
      name: "Minimal Sofa",
      img: "/Images/MinSofa.png",
      property: 'Light Single Chair',
      price: '145',
      bgColor: '#EEEBFF'

    },
    {
      name: "Dinning Sofa",
      img: "/Images/DinSofa.png",
      property: 'Light Single Chair',
      price: '145',
      bgColor: '#FFF4E7'

    }, {
      name: "Dinning Sofa",
      img: "/Images/DinSofa.png",
      property: 'Light Single Chair',
      price: '145',
      bgColor: '#FFF4E7'

    }, {
      name: "Dinning Sofa",
      img: "/Images/DinSofa.png",
      property: 'Light Single Chair',
      price: '145',
      bgColor: '#FFF4E7'

    }, {
      name: "Dinning Sofa",
      img: "/Images/DinSofa.png",
      property: 'Light Single Chair',
      price: '145',
      bgColor: '#FFF4E7'

    }
  ]



  return (
    <Box 
      sx={{ 
        background: "url(/Images/product_bg.png)",
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'contain',
        width: '100%',
        height: 600,

      }}>
      <Typography
        sx={{
          display: 'flex',
          mt: 3,
          mb: 3,
          justifyContent: 'center',
          color: '#07484A',
          fontSize: { xs: '2rem', lg: '3rem' },
        }}
      >
        Popular Products
      </Typography>

 
      <Box sx={{
        display: 'flex',
        overflow: 'auto',
        
        ml: {lg:15,sm:15,md:15,xs:0},
        "&::-webkit-scrollbar": {
          height: '10px',
          width: "30px"
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: '#07484A',
        },
        "&::-webkit-scrollbar-thumb": {
          background: '#70908B',
          height: '9rem',
          // borderLeft: '7px solid white',
          // borderRight:' 7px solid white'
        
        }
      }}>
        {
          pro.map((card) => (
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: 2,
              width:'100%'
            }}>
              <Card sx={{
                backgroundColor: card.bgColor,
                height: '100%',
                width: '100%',
              }}>
                <Box sx={{ padding: 6 }}>
                  <img src={card.img} alt="" height={150} width={150} />
                </Box>
                <Box sx={{ padding: 3 }}>
                  <Typography sx={{ color: '#70908B', fontWeight: '700' }}>{card.name}</Typography>
                  <Typography
                    sx={{
                      color: '#70908B',
                      fontWeight: '400',
                      fontSize: '10px',
                      mt: 2
                    }}> 
                    {card.property}
                  </Typography>
                  <Typography sx={{ color: '#70908B', fontWeight: '700', mt: 2 }}>${card.price}</Typography>
                </Box>
              </Card>

            </Box>

          ))
        }
      </Box>
      <Box 
        sx={{
          display: 'flex',
          justifyContent:"flex-end",
          // mt: '3rem',
          gap: '20px',
          p:'40px 10px 0px 0px'
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

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
  
      }}>
        <Button variant='contained' endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: '#70908B',
            textTransform: 'capitalize',
            mt: 3,
            
          }}>
          Explore All Items
        </Button>
      </Box>

    </Box>
  )
}

export default Product