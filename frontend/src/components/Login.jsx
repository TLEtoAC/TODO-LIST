import React from 'react'
import { useState, useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import eyeIcon from "/assets/eye.png";
import invisible from "/assets/invisible.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Login = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirm, setconfirm] = useState('');
  const [user, setuser] = useState([]);
  const PasswordRef = useRef(null)
  const IconRef = useRef(null)
  const PasswordRef1 = useRef(null)
  const IconRef1 = useRef(null)
    
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users");
      const data = await response.json();
      setuser(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    try {
      console.log('Sending login request with:', { email, password });
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
        credentials: "include"
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        console.log(data);
        setemail('');
        setpassword('');
        // Redirect to dashboard or home page after successful login
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong.");
    }
  };

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
    <form onSubmit={handleSubmit}>
       <div className='flex justify-center items-center min-h-screen' data-aos="fade-down">
    <div sx={{ height: "50px"}} className=" w-md bg-white rounded-2xl border border-purple-700 p-8">
       <h1 className='text-center font-extrabold text-3xl mb-6'>Login</h1>
       <div className='text-center'>
       <input onChange={e => setemail(e.target.value)} className='text-white border-0 px-2 rounded-2xl w-80 h-10 mb-6 bg-gray-500' type='email' name='email' placeholder='Enter your email' value={email} />

       <div className=' relative flex justify-center items-center gap-2 mb-6'>  
       <input ref={PasswordRef1} onChange={e => setpassword(e.target.value)} className='text-white border-0 px-2 rounded-2xl w-80 h-10 mb-6 bg-gray-500' type='password' name='password' placeholder='Enter your password' value={password} />
         <span onClick={showPassword1} className='absolute right-12 top-2 cursor-pointer'>
           <img ref={IconRef1} className='w-6' src={invisible}/>
         </span>
        </div>
       </div>
       <div className='text-center font-semibold mb-6'>
       <button type="submit" className='border bg-blue-700 px-2 py-2 text-white rounded-lg outline-none'>Login</button>
       </div>

       <div className='flex text-blue-700 justify-between font-bold cursor-pointer'>
         <Link to="/">
           <button type="button"><ArrowBackIcon/>Back to Signup</button>
         </Link>
         <Link to="/Todo">
           <button type="button">Skip to Todo</button><ArrowForwardIcon />
         </Link>
       </div>
       <h3 className="mt-8 text-xl font-semibold">Registered Users:</h3>
      <ul className="mt-2">
        {user.map((user, index) => (
          <li key={index}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
    </div>
    </form>
  )
}


export default Login
