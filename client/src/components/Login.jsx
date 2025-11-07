import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

  const [ state ,setState ] = useState('Login')
  const {setShowLogin , backendUrl, setToken, setUser} = useContext(AppContext)

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const onSubmitHandler = async (e) =>{
    e.preventDefault();

    try {
      

      if(state === 'Login'){ 
       const {data} =  await axios.post(backendUrl + '/api/user/login', {email,password})
      
       if(data.success){
        setToken(data.token)
        setUser(data.user) 
        localStorage.setItem('token' , data.token)
        setShowLogin(false)

       }else{
        toast.error(data.message)
       }

      }else{
        const {data} =  await axios.post(backendUrl + '/api/user/register', {name,email,password})
      
       if(data.success){
        setToken(data.token)
        setUser(data.user) 
        localStorage.setItem('token' , data.token)
        setShowLogin(false)

       }else{
        toast.error(data.message)
       }
      }

    } catch (error) {
       toast.error(error.message)
    }
  }


  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    return()=>{
      document.body.style.overflow = 'unset';
    }

  },[])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-0 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      
      <motion.form onSubmit={onSubmitHandler}
      initial= {{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
      className='realtive bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700'>{state}</h1>
        <p>Welcome back ! Please sign in to continue</p>

       {state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <img  className='w-5' src={assets.profile_icon} alt="" />
          <input onChange={e =>setName(e.target.value)} value={name} type="text" className='outline-none text-sm ' placeholder='Full Name ' required />
        </div>}

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <img  className='w-5' src={assets.email_icon} alt="" />
          <input  onChange={e =>setEmail(e.target.value)} value={email} type="email" className='outline-none text-sm ' placeholder='Enter email ' required />
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <img  className='w-5' src={assets.lock_icon} alt="" />
          <input  onChange={e =>setPassword(e.target.value)} value={password} type="Password" className='outline-none text-sm ' placeholder='Password ' required />
        </div>
        <p className='text-blue-600 mt-3'>Forget Password ?</p>
        <button className='bg-blue-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full mt-5 items-center justify-center mx-0 w-full'> {state === 'Login'  ? 'login':'creeate account' }</button>

        { state === 'Login' ? <p className='mt-2 text-center text-black'>Don't have an account? 
          <span className='text-blue-800 cursor-pointer' onClick={()=>setState('Sign Up' )} >Sign Up </span> </p>
           
          :
           <p className='mt-5 text-center text-black '>Already have an account? 
          <span className='text-blue-800 cursor-pointer' onClick={()=>setState('Login' )}>Login</span> </p>}

          <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-80  mt-20 cursor-pointer   w-5' />
      </motion.form>

    </div>
  )
}

export default Login