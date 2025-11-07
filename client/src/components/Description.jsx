import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div 
    initial= {{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl '><b>Create AI Images</b> </h1>
      <p className='text-gray-500'>Turn Your  Imagination into visuals</p>

      <div className='flex flex-col mt-10 gap-4 md:gap-14 md:flex-row items-center'>
        <img src={assets.girl_icon} alt="" className='w-80 xl:w-96 rounded-lg' />
        <div>

      <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to image Generator</h2>
      <p className='text-gray-600 mb-4'>Esily Bring Your Ideas to life with our free AI Image Generator  
        , wether you need  stunning visuals or unique imaginary , 
        our tools transform your text into eye-catching image 
        with just a few clicks. iamgine it Discribe it , watch 
        it come to life instantly . </p>
        <p className='text-gray-600'>Wether you need  stunning visuals or unique imaginary , 
        our tools transform your text into eye-catching image 
        with just a few clicks. iamgine it Discribe it , watch 
        it come to life instantly</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description