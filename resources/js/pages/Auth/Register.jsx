import React from 'react'
import AuthLayout from '../../components/AuthLayout'
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <AuthLayout>
      <div className="w-screen p-4 rounded-md shadow-lg text-for-primary w-sc bg-primary sm:w-[26rem]">
          <div className="my-8 heading-section">
              <h1 className='text-3xl font-bold tracking-widest text-center font-pacifico'>Chattify</h1>
          </div>
          <div className="my-4 form-section">
            <form action="">
                <div className="flex">
                  <div className="p-2 input-container">
                      <label htmlFor="first_name" className='ml-1 text-sm'>User name</label>
                      <input type="text" name="first_name" id="first_name" className='w-full px-2 py-1 bg-white bg-opacity-25 border-none outline-none text-for-primary' placeholder='First name' />
                  </div>
                  <div className="p-2 input-container">
                      <label htmlFor="last_name" className='ml-1 text-sm'>Last name</label>
                      <input type="text" name="last_name" id="last_name" className='w-full px-2 py-1 bg-white bg-opacity-25 border-none outline-none text-for-primary' placeholder='Last name' />
                  </div>
                </div>
                <div className="p-2 input-container">
                    <label htmlFor="email" className='ml-1 text-sm'>Email</label>
                    <input type="email" name="email" id="email" className='w-full px-2 py-1 bg-white bg-opacity-25 border-none outline-none text-for-primary' placeholder='Email' />
                </div>
                <div className="p-2 input-container">
                    <label htmlFor="password" className='ml-1 text-sm'>Password</label>
                    <input type="password" name="password" id="password" className='w-full px-2 py-1 bg-white bg-opacity-25 border-none outline-none text-for-primary' placeholder='User name' />
                </div>
                <div className="p-2 input-container">
                    <label htmlFor="password_confirmation" className='ml-1 text-sm'>Confirm Password</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" className='w-full px-2 py-1 bg-white bg-opacity-25 border-none outline-none text-for-primary' placeholder='Confirm Password' />
                </div>
                <div className="grid mt-4 button-container place-items-center">
                    <button className='px-6 py-2 font-bold bg-white rounded-lg text-cyan-500'>Sign Up</button>
                </div>
            </form>
        </div>
        <div className="mt-6 sign-up-box">
            <p className='text-sm font-normal text-center'>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </AuthLayout>
  )
}