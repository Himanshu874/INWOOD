import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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
        height: 900,

      }}>
      <Typography
        sx={{
          display: 'flex',
          mt: 10,
          mb: 10,
          justifyContent: 'center',
          color: '#07484A',
          fontSize: { xs: '2rem', lg: '3rem' },
          fontFamily: 'Playfair Display',
          fontWeight: 700
        }}
      >
        Popular Products
      </Typography>


      <Box sx={{
        display: 'flex',
        overflow: 'auto',pb:2,
        ml: { lg: 15, sm: 15, md: 15, xs: 0 },
        "&::-webkit-scrollbar": {
          height: '5px',
          // border: '3px',
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: '#07484A',
         
        },
     
        "&::-webkit-scrollbar-thumb": {
          background: '#70908B',
          // border: '0.5rem solid transparent', 
          // backgroundClip: 'content-box'
          // borderRadius: '5px',
          // borderColor: 'red',
        },
        
      }}>
        {
          pro.map((card) => (
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: 4,
              width: '100%'
            }}>
              <Card sx={{
                backgroundColor: card.bgColor,
                height: '100%',
                width: '100%',
              }}>
                <Box sx={{ padding: 6 }}>
                  <img src={card.img}  height={200} width={200} />
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
          justifyContent: "flex-end",
          // mt: '3rem',
          gap: '20px',
          p: '40px 10px 0px 0px'
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

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',

      }}>
        <Button variant='contained' endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: '#70908B',
            textTransform: 'capitalize',
            mt: 3,
            height: '4rem',
            width: '13rem',
            fontWeight: 700,
            '&:hover': {
              bgcolor: '#70908B',
          },
          }}>
          Explore All Items
        </Button>
      </Box>

    </Box >
  )
}

export default Product