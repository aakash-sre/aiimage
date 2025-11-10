import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Button, LayoutTextFlip } from './ui/layout-text'

const Header = () => {
  const { user , setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
 

  const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }

  }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20 relative mx-2 my-2  gap-4 sm:mx-0 sm:mb-0  '
    initial= {{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    >


     <motion.div  className='flex items-center  sm:text-sm font-medium bg-blue-100 sm:px-5 py-1 rounded-full border border-gray-400  gap-2 '
     initial= {{opacity:0, y:-20}}
    transition={{delay:0.2, duration:0.8}}
    animate={{opacity:1, y:0}}
   
     >
      <p>This is our website for ai image generator</p>
      <img src={assets.star_icon} alt="" />
      


     </motion.div>


     <motion.h1 className='text-4xl max-w-[300px] sm:text-4xl sm:max-w-[590px] mx-auto mt-10 text-center font-semibold  ' >
      <LayoutTextFlip 
      text= " This Ai present By   "
      words= {["Aakash sre", "Abhay-005", "Abhay-006", "Dipti-mam"]}/>
       text to Generate <span className='text-pink-500' >Image </span> in Seconds.</motion.h1>


     <p className='text-center max-w-xl mx-auto mt-5'>Unleash Your creativity with AI. Turn your imagination into visual in a seconds - Just type, and watch magic happen </p>

     <motion.button onClick={ onClickHandler} >
      <Button
       borderRadius="2.75rem"
        className="bg-teal-600 dark:bg-slate-300  dark:text-black border-neutral-800 dark:border-slate-200 hover:scale-105 transition-all"
      >Generate image

      <img  className='w-7 mx-3' src={assets.star_group} alt="" />
      </Button>
      
      
     </motion.button>


     <motion.div
     initial={{opacity:0}}
     transition={{ ease: "easeOut", duration: 2 }}
     animate={{opacity:1 }}
      className='flex gap-5  flex-wrap cursor-pointer justify-center mt-16  '>
      {Array(0).fill('').map((item,index)=>(
        <img className='rounded w-28 h-30  hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
         src={assets.sample_img_1} alt="" key={index} width={50}  />
      ))}
       <img className='w-28 mt-10 rounded hover:scale-105 transition-all' src={assets.girl_icon} alt="" />
      <img className='w-28 mt-10 rounded hover:scale-105 transition-all ' src={assets.robotbird_icon} alt="" />
      <img className='w-28 mt-10 rounded hover:scale-105 transition-all' src={assets.jwala_icon} alt="" />
      
      <img className='w-28 mt-10 rounded hover:scale-105 transition-all' src={assets.boy_icon} alt="" />
      <img className='w-28 mt-10 rounded hover:scale-105 transition-all' src={assets.zebra_icon} alt="" />

       
     </motion.div>
     <motion.p
     initial= {{opacity:0}}
    transition={{delay:1.2, duration:0.8}}
    animate={{opacity:1}}
      className='mt-3 text-neutral-600'><b> Generated Images from our website</b></motion.p>
     
     
    
    </motion.div>
    
  )
}

export default Header