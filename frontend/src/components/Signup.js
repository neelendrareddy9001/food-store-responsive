import React, { useState } from 'react';
import LoginSignupImg from '../assets/login-animation.gif';
import {BiShow, BiHide} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConrimPswd, setShowConfirmPswd] = useState(false);
  const [data, setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : "",
  })
  console.log(data);
  

  const handleShowPassword = () => {
    setShowPassword(preve => !preve)
  }

  const handleShowConfirmPswd = () => {
    setShowConfirmPswd(preve => !preve)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setData((preve) => {
      return{
        ...preve,
        [name] : value
      }
    })
  }
  
  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow shadow-md m-auto'>
          <img src={LoginSignupImg} alt='img' className='w-full' />
        </div>

        {/* signup form */}
        <form className='w-full py-3 flex flex-col'>
          <label htmlFor='firstName'>First Name</label>
          <input 
            type={"text"} 
            id='firstName' 
            name='firstName' 
            value={data.firstName}
            onChange={handleChange}
            className='w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
          />

          <label htmlFor='lastName'>Last Name</label>
          <input 
            type={"text"} 
            id='lastName' 
            name='lastName' 
            value={data.lastName}
            onChange={handleChange}
            className='w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
          />

          <label htmlFor='eamil'>Email Address</label>
          <input 
            type={"email"} 
            id='email'
            name='email' 
            value={data.email}
            onChange={handleChange}
            className='w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
          />

          <label htmlFor='password'>Password</label>
          <div className='flex px-2 py-1 mt-1 mb-2 bg-slate-200 rounded focus-within:outline focus-within:outline-blue-300'>
            <input 
              type={showPassword ? "text" : "password"} 
              id='password' 
              name='password' 
              value={data.password}
              onChange={handleChange}
              className='w-full bg-slate-200 border-none outline-none'
            />
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiShow/> : <BiHide/>}</span>
          </div>

          <label htmlFor='confirmpassword'>Confirm Password</label>
          <div className='flex px-2 py-1 mt-1 mb-2 bg-slate-200 rounded focus-within:outline focus-within:outline-blue-300'>
            <input 
              type={showConrimPswd ? "text" : "password"} 
              id='confirmPassword' 
              name='confirmPassword' 
              value={data.confirmPassword}
              onChange={handleChange}
              className='w-full bg-slate-200 border-none outline-none'
            />
            <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPswd}>{showConrimPswd ? <BiShow/> : <BiHide/>}</span>
          </div>

          <button type='submit' className='w-full max-w-[150px] m-auto bg-red-600 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign up</button>

        </form>
        <p className='text-left text-sm mt-2'>Already have account ? <Link to={"login"} className='text-red-500'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup