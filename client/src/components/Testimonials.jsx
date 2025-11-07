import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div 
    initial= {{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className=' flex flex-col  justify-center items-center '>

      <h1 className='text-3xl sm:text-4xl gap-2'  ><b>Costomer Testimonials</b></h1>
      <p className='text-gray-600'>What Our user are Saying</p>
      <div className='flex flex-wrap  mb-10 mt-10 gap-6'>
        {testimonialsData.map((testimonial, index)=>(
          <div key={index} className=' bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all '>
            <div>
              <img src={testimonial.image} alt="" className=' rounded-full w-14' />
              <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
              <p className='text-gray-500 mb-4'>{testimonial.role} </p>
              <div className='flex mb-4'>
                {Array(testimonial.stars).fill().map((item,index)=>(
                  <img key={index} src={assets.rating_star} alt="" />
                ))}

              </div>
              <p className='text-center text-sm text-gray-700'>{testimonial.text}</p>
            </div>

          </div>
        ))}

      </div>

    </motion.div>
  )
}

export default Testimonials