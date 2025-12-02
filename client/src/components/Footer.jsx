import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <motion.div 
    
    className='flex  tiems-center justify-between gap-4 mt-10  max-sm:hidden '>
    <img className='w-20 ' src={assets.qr_code} alt="" />
      <img onClick={()=>navigate('/')} src={assets.generated_ai} alt="" className='w-10 h-10  rounded-full pr-15' />
      <p className= 'flex text-gray-600 pl-4  mt-2 sm:text-1xl '> <span className='text-2xl'>| </span>  All Right reserved.Copyright@aigenerator</p>
      <div className='flex gap-2 '>
        <a href="https://www.instagram.com/hii_shree1111" target="_blank" rel="nooper noreferrer"></a>
      <img className='cursor-pointer  w-10' src={assets.facebook_icon} alt="" />
      <img  className='cursor-pointer w-10' src={assets.twitter_icon} alt="" />
      
      <img   className='cursor-pointer w-10' src={assets.instagram_icon} alt="" />
      
      
      </div>
    </motion.div>
  )
}

export default Footer