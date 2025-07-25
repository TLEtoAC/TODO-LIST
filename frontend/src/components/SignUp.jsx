import React, { useRef , useEffect} from "react";
import { useState , UseRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./header";
import eyeIcon from "/assets/eye.png";
import invisible from "/assets/invisible.png"

const Signup = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [message , setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const PasswordRef = useRef(null);
  const iconRef = useRef(null)
  
   useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const Forget = () => {
    alert(`Forget Password`);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Submitting form with:', { email, password });
    
    if (!email || !password) {
      setMessage('Email and password are required');
      return;
    }
    
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
        credentials: "include" 
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
         alert("Signup Successful.");
         // Redirect or update UI as needed
      } else {
        setMessage(data.message || "Signup failed");
      }

    } catch (err) {
      setMessage("Server error: " + err.message);
      console.error("Signup error:", err);
    }
  };

   const showPassword = () => {
    const input = PasswordRef.current;
    const icon = iconRef.current;

    if (input && icon) {
      if (input.type === "password") {
        input.type = "text";
        icon.src = eyeIcon;
      } else {
        input.type = "password";
        icon.src = invisible;
      }
    }
  };

   const handleEmailLogin = (e) => {
        e.preventDefault();
        alert(`Logging in as ${email}`);
    };

  const Create = () => {
    alert(`You want to create account with google`);
  };
  const Git = () => {
    alert(`You want to create account with github`);
  }
  return (
    <> 
     <Header />
     <main>
     <form onSubmit={handleLogin} className="">
      <div className="flex justify-center items-center min-h-screen hover:scale-100 transition-all duration-300 ease-in-out " data-aos="fade-up">
        <div sx={{ height: "50px"}} className=" w-md bg-white rounded-2xl border border-purple-700 p-8">
          <h1 className="text-center font-extrabold text-3xl mb-6">
            Sign Up
          </h1>
          <div className="text-center">
            <input
              onSubmit={handleEmailLogin}
              onChange={(e) => setemail(e.target.value)}
              className="text-white border-0 px-2 rounded-2xl w-80 h-10 mb-6 bg-gray-500"
              type="text"
              name="username"
              placeholder="Enter a email"
              value={email}
            />
        <div className=' relative flex justify-center items-center gap-2 mb-6'>
         <input ref={PasswordRef} onChange={e => setpassword(e.target.value)} className='text-white border-0 px-2 rounded-2xl w-80 h-10 mb-6 bg-gray-500' type='password' name='password' placeholder='Enter password' value={password} />
         <span  onClick={showPassword} className=" absolute right-10 top-2 cursor-pointer">
           <img ref={iconRef} className='w-6' src={invisible} />
         </span>
        </div>
          </div>
           {message && (
                <p className="text-center text-red-600 font-semibold">{message}</p>
              )}

          <div className="text-center font-semibold mb-6">
            <button type="submit" className="border bg-blue-700 px-2 py-2 text-white rounded-lg outline-none">
              SignUp
            </button>
          </div>
          <div className="flex text-blue-700 font-semibold gap-25">
            <Link to="/Login">
              <button type="button" className="text-blue-700">Already have account? Login</button>
            </Link>
            <button type="button" onClick={Create}>Create New Account</button>
          </div>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-3 text-gray-400 font-bold">OR</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          <div className="text-red-600 text-xl items-center justify-center flex flex-col">
            <button onClick={Create} className="border-2 border-gray-600 rounded-4xl px-8 py-1 mb-4 flex items-center hover:bg-blue-500 hover:text-white">
              <img className="w-10" src="/assets/google12.png" />
              Continue with Google</button>
            <div className="flex flex-col items-center">
            <button onClick={Git} className="border-2 border-gray-600 rounded-4xl px-10  flex items-center hover:bg-blue-500 hover:text-white transition-all">
              Continue with<img className="w-22" src="./assets/git.png" /></button>
            </div>
          </div>
          <div className="p-4">
          <h2 className="text-xl font-bold mb-4">User List</h2>
          <ul className="list-disc pl-6">
            {users.map((user) => (
              <li key={user._id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      </form>
     </main>
    </>
  );
};

export default Signup;
