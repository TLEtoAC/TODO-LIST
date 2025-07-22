import React from 'react'
import { useState , useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import eyeIcon from "/assets/eye.png";
import invisible from "/assets/invisible.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Login = () => {
  const [name , setname] = React.useState('');
  const [email, setemail] = React.useState('');
   const[password , setpassword] = useState('');
   const[Confirm , setConfirm] = useState('');
   const PasswordRef = useRef(null)
   const IconRef = useRef(null)
   const PasswordRef1 = useRef(null)
   const IconRef1 = useRef(null)
    
    const showPassword = () => {
       const input = PasswordRef.current;
       const icon = IconRef.current;
   
       if (input && icon) {
         if (input.type === "password") {
           input.type = "text";
           icon.src = eyeIcon;
         } else {
           input.type = "password";
           icon.src = invisible;
         }
       }

      }
    const showPassword1 = () => {
       const input = PasswordRef1.current;
       const icon = IconRef1.current;
   
       if (input && icon) {
         if (input.type === "password") {
           input.type = "text";
           icon.src = eyeIcon;
         } else {
           input.type = "password";
           icon.src = invisible;
         }
       }
      }
    const add = () => {
      alert(`Sign Up is Done go to Back` );
    }
  return (
    <div>
       <div className='flex justify-center items-center min-h-screen' data-aos="fade-down">
    <div sx={{ height: "50px"}} className=" w-md bg-white rounded-2xl border border-purple-700 p-8">
       <h1 className='text-center font-extrabold text-3xl mb-6'>Sign In</h1>
       <div className='text-center'>
       <input onChange={e => setname(e.target.value)} className='text-white border-0 px-2 rounded-2xl w-80 h-10 mb-6 bg-gray-500' type='text' name='username' placeholder='Enter a Full Name' value={name} />
       <input onChange={e => setemail(e.target.value)} className='text-white border-0 px-2 rounded-2xl w-80 h-10 mb-6 bg-gray-500' type='text' name='username' placeholder='Enter here Email' value={email} />

       <div className=' relative flex justify-center items-center gap-2 '>  
       <input ref={PasswordRef1} onChange={e => setpassword(e.target.value)} className='text-white border-0 px-2 rounded-2xl w-80 h-10 mb-6 bg-gray-500' type='text' name='username' placeholder='Enter here XXXXXXX' value={password} />
         <span onClick={showPassword1} className='absolute right-12 top-2 cursor-pointer'>
           <img ref={IconRef1} className='w-6' src={invisible}/>
         </span>
        </div>
        <div className=' relative flex justify-center items-center gap-2 mb-6'>
         <input ref={PasswordRef} onChange={e => setConfirm(e.target.value)} className='text-white border-0 px-2 rounded-2xl w-80 h-10 mb-6 bg-gray-500' type='text' name='username' placeholder='Enter here Confirm XXXXXXX' value={Confirm} />
         <span onClick={showPassword} className='absolute right-12 top-2 cursor-pointer'>
           <img ref={IconRef} className='w-6' src={invisible}/>
         </span>
        </div>
       </div>
       <div className='text-center font-semibold mb-6'>
       <Link to='/'>
       <button onClick={add} className='border bg-blue-700 px-2 py-2 text-white rounded-lg outline-none'>Sign In</button>
       </Link>
       </div>

       <div className='flex text-blue-700 justify-between font-bold cursor-pointer'>
         <button  onclick={add} ><ArrowBackIcon/>Back</button>
         <Link to="/Todo">
         <button>Next</button><ArrowForwardIcon />
         </Link>
       </div>
    </div>
    </div>
    </div>
  )
}


export default Login
