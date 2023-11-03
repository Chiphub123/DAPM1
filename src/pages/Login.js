import React from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Login = () => {


    
  return (
    <>
        <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form  className='flex flex-col'>
        <input type='text' 
        placeholder='UserName'
          id='username' 
          className='bg-slate-100 p-3 rounded-lg'

          ></input>



        <input type='email' 
        placeholder='Email'
          id='email' 
          className='bg-slate-100 p-3 rounded-lg'
        
          ></input>


        <input type='password' 
        placeholder='Password'
          id='password' 
          className='bg-slate-100 p-3 rounded-lg'
    
          ></input>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> 
        Sign in
      </button>
      
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account</p>
        <Link to='/dangky'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
<p className='text-red-500 p-7 mt-5'> </p>
    </div>



    </>
  )
}

export default Login