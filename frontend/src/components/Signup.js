import React, { useState } from 'react';
import LoginSignupImg from '../assets/login-animation.gif';
import {BiShow, BiHide} from 'react-icons/bi';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConrimPswd, setShowConfirmPswd] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(preve => !preve)
  }

  const handleShowConfirmPswd = () => {
    setShowConfirmPswd(preve => !preve)
  }
  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow shadow-md'>
          <img src={LoginSignupImg} alt='img' className='w-full' />
        </div>

        {/* signup form */}
        <form className='w-full py-3'>
          <label htmlFor='firstName'>First Name</label>
          <input type={"text"} id='firstName' name='firstName' className='w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' />

          <label htmlFor='lastName'>Last Name</label>
          <input type={"text"} id='lastName' name='lastName' className='w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' />

          <label htmlFor='eamil'>Email Address</label>
          <input type={"eamil"} id='eamil' name='eamil' className='w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' />

          <label htmlFor='password'>Password</label>
          <div className='flex px-2 py-1 mt-1 mb-2 bg-slate-200 rounded focus-within:outline focus-within:outline-blue-300'>
            <input type={showPassword ? "text" : "password"} id='password' name='password' className='w-full bg-slate-200 border-none outline-none'/>
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiShow/> : <BiHide/>}</span>
          </div>

          <label htmlFor='confirmpassword'>Confirm Password</label>
          <div className='flex px-2 py-1 mt-1 mb-2 bg-slate-200 rounded focus-within:outline focus-within:outline-blue-300'>
            <input type={showConrimPswd ? "text" : "password"} id='confirmpassword' name='confirmpassword' className='w-full bg-slate-200 border-none outline-none'/>
            <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPswd}>{showConrimPswd ? <BiShow/> : <BiHide/>}</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup