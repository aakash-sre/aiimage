import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"
import { Button } from '../components/ui/layout-text'


const BuyCredit = () => {

  const { user } = useContext(AppContext)
  return (
      
    <div className='relative'>

    <motion.div
    initial= {{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
     className='flex flex-col items-center justify-center'>

      <Button>Plans Here</Button>
    


    <motion.h1 
    initial= {{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className='text-3xl font-semibold sm:mb-10 mb-6 '>Choose the Plans</motion.h1>
     </motion.div>


     <motion.div
     initial= {{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
      className='flex flex-wrap gap-6 text-left items-center justify-center'>
  {
  plans.map((item,index )=>(

      <div key={index}
      className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 hover:scale-105 transition-all duration-600   '   >
        
        <img src={assets.generated_ai} alt="" className='h-10' />
        <p className='mt-3 mb-1 font-semibold '>{item.id} 
           </p>
        <p className='text-sm text-gray-400 '>{item.desc} </p>
        <p className='mt-6 '>
          <span className='text-3xl font-medium '>${item.price}</span> /{item.credits} credits</p>
          <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-md mt-4 '> {user ? ' Purchase' : 'Get Started'}  </button>

       </div>
       
      
      ))}
      </motion.div>
      
      </div>
    )
 }

export default BuyCredit