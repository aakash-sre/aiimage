import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <motion.div 
    
    className='flex  tiems-center justify-between gap-4 mt-20 max-sm:hidden '>
      <img onClick={()=>navigate('/')} src={assets.generated_ai} alt="" className='w-10  rounded-full' />
      <p className= 'flex text-gray-600 pl-4  mt-2 sm:text-1xl '> <span className='text-2xl'>| </span>  All Right reserved.Copyright@aigenerator</p>
      <div className='flex gap-2 '>
      <img className='cursor-pointer' src={assets.facebook_icon} alt="" />
      <img  className='cursor-pointer' src={assets.twitter_icon} alt="" />
      <img  className='cursor-pointer' src={assets.instagram_icon} alt="" />

      </div>
    </motion.div>
  )
}

export default Footer