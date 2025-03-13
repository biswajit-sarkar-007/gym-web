import React from 'react'

import { Box, Stack, Typography , Button} from '@mui/material'
import HeroBannerImg from '../assets/images/banner.png'

import '../App.css'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'211px', xs:'70px'}, ml:{sm:'50px'}}} position = "relative" p = '20px'>
      <Typography color='#FF2625' fontWeight = '600' fontSize='25px'>
      PowerFlex
      </Typography>
      <Typography color='white' fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}} mb='23px' mt='30px'>
      Train Hard. <br/> Conquer Everything.
        </Typography>

      <Typography color='white' fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises
        </Typography>

      <Button href='#exercises' variant="contained" color='error' sx={{backgroundColor:'#ff2625', padding:'12px'}}>
        Explore Exercise
        </Button>

      <Typography fontWeight={600} color='#ff2625' className="text-motion"
  sx={{opacity:1, display: {lg:'block', xs:'none'}}} 
      fontSize='200px'
      >
        Push Limits
      </Typography>
      <img src={HeroBannerImg} alt='herobannerImg' className='hero-banner-img'/>
    </Box>
 
  )
}

export default HeroBanner
