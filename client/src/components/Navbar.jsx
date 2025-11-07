import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Navbar = () => {

 const {user ,setShowLogin,logout,credit} = useContext(AppContext)
  
  const navigate  = useNavigate() 
  
  


  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>  
      <img src={assets.generated_ai} alt="" className=' h-10   rounded-md' />
       </Link>
      <div>

        { 
        user ?

          <div className='flex items-center gap-2 sm:gap-3'>
            <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-purple-300 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
              <img src={assets.credit_star} alt="" />
              <p className='text-xs sm:text-sm font-medium text-black  pr-4'> Credits left :{credit} </p>
            </button>
            <p className=' text-xs sm:text-sm font-medium bg-blue-200 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all '>Hii,{user.name} </p>
            <div className='relative group'>
              <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
              <div className='absolute hidden group-hover:block top-0  right-0   z-0  text-black rounded pt-12 cursor-pointer'  >
                <ul className=' list-none m-2  bg-white rounded-md gap-5 border text-sm'>
                  <li onClick={logout} className='px-2 py-1 cursor-pointer ' >Logout</li>
                </ul>

              </div>
            </div>
          </div>
         :
           <div className='flex items-center gap-10 sm:gap-2 rounded-full   '>
            <p onClick={()=>navigate('/buy')}className='bg-zinc-900 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Pricing</p>

            <button onClick={()=>setShowLogin(true)} className='bg-zinc-900 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
           </div>
        }


      </div>

    </div>
  ) 
}

export default Navbar