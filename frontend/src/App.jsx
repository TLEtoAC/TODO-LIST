import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/Todo.jsx'
import Signup from './components/SignUp.jsx'
import Back from './components/Back.jsx'
import Login from './components/Login.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { BrowserRouter , Routes , Route} from 'react-router-dom'
function App() {
  const [count, setcount] = useState(0)
  useEffect (() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [])
  return (
    <>
     <div>
       <Back />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Todo' element={<Todo />} />
          </Routes>
        </BrowserRouter>
     </div>
    </>
  )
}

export default App
