import React from 'react'

import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo  from '../assets/images/Logo.png'
 
 

const Navbar = () => {
 
  return (
     <Stack direction="row" justifyContent="space-around" sx={{gap:{sm:'122px', xs:'40px'}, mt: {sm:'32px', xs:'20px'} , justifyContent:'none'}} px="20px">
      <Link to='/'>
      <img src={Logo} alt='logo' style={{width:'80px', height:'80px', margin:'0 20px' , borderRadius:'50%'  }} />
      </Link>
      <Stack direction='row' gap="40px" fontSize="25px" alignItems="flex-end">
        <Link to='/' style={{textDecoration:'none', color:'#FF2625'}}>
        Home
        </Link>
        <a href='#exercises' style={{textDecoration:'none', color:'#FF2625'}}> Exercise</a>
      </Stack>
      
      
     </Stack>
  )
}

export default Navbar
 
