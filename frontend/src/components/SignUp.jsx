import React, { useRef } from "react";
import { useState , UseRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./header";
import eyeIcon from "/assets/eye.png";
import invisible from "/assets/invisible.png"

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const PasswordRef = useRef(null);
  const iconRef = useRef(null)
  const add = () => {
    alert(`Email: ${email}, Password: ${password}`);
  };
  const Forget = () => {
    alert(`You are sure to click here`);
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
     <div className="">
      <div className="flex justify-center items-center min-h-screen hover:scale-100 transition-all duration-300 ease-in-out " data-aos="fade-up">
        <div sx={{ height: "50px"}} className=" w-md bg-white rounded-2xl border border-purple-700 p-8">
          <h1 className="text-center font-extrabold text-3xl mb-6">
            Login Form
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
         <input ref={PasswordRef} onChange={e => setpassword(e.target.value)} className='text-white border-0 px-2 rounded-2xl w-80 h-10 mb-6 bg-gray-500' type='text' name='username' placeholder='Enter here XXXXXXX' value={password} />
         <span  onClick={showPassword} className=" absolute right-10 top-2 cursor-pointer">
           <img ref={iconRef} className='w-6' src={invisible} />
         </span>
        </div>
          </div>
          <div className="text-center font-semibold mb-6">
            <Link to="/Todo">
              <button onClick={add} className="border bg-blue-700 px-2 py-2 text-white rounded-lg outline-none">
                SignUp
              </button>
            </Link>
          </div>
          <div className="flex text-blue-700 font-semibold gap-25">
            <button onClick={Forget} className="text-black">
              Forget password?
            </button>
            <button onClick={Create}>Create New Account</button>
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
        </div>
      </div>
      </div>
     </main>
    </>
  );
};

export default Signup;
