import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <header>
      <nav className=" flex justify-around bg-transparent border-b border-b-white fixed top-0 left-0 w-full z-50 text-2xl text-white p-5">
        Reware
        <ul className='flex gap-10 '>
          <li className='cursor-pointer'>Home</li>
          <Link to='/'><li className='cursor-pointer'>Login</li></Link>
          <Link to='/Login'><li className=' cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-light py-1 px-4 rounded'>
            Sign In
          </li></Link>
        </ul>
      </nav>
     </header>
    </div>
  )
}

export default Header
