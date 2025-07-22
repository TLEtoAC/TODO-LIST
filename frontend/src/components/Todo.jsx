import React, { useRef } from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./header";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axois";
const Todo = () => {
  const [task , settask] = useState([]);
  const [input, setinput] = useState(false);

  const handletask = async() => {
    if( input.trim() != "") {
      try {
      
      await axios.post("http://localhost:5000/api/tasks", {
        task: input
      });
      settask([...task , input]);
      setinput("");
      } catch (error) {
      console.error("Error sending task to backend:", error);
    }
    }
  }

  const handleDeleteTask = (indexToRemove) => {
    const newTasks = task.filter((_, index) => index !== indexToRemove);
    settask(newTasks);
  };

  return (
    <> 
     <Header />
     <main>
      <div className="flex justify-center items-center min-h-screen hover:scale-100 transition-all duration-300 ease-in-out ">
        <div sx={{ height: "300px" , width: "200px"}} className=" bg-white rounded-2xl border border-purple-700 p-8">
          <h1 className="text-center font-extrabold text-3xl mb-6">
            Enter Your Important Task!!
          </h1>
          <div className="flex gap-2">
             <input
              className="text-white border-0 px-2 rounded-2xl w-80 h-10 mb-6 bg-gray-500"
              type="text"
              name="username"
              placeholder="Enter a your task"
              onChange={e => setinput(e.target.value)}
              />
           <div className="text-center font-semibold mb-6">
              <button onClick={handletask} className="border bg-blue-700 px-2 py-2 text-white rounded-lg outline-none">
                Add Task
              </button>
          </div>

          </div>
           <ul>
             {task.map((task,index) => (
             <li key={index} className="flex justify-between items-center bg-gray-200 px-3 py-2 rounded text-black mb-4">
              <span>{task}</span>
              <button onClick={() => handleDeleteTask(index)}><DeleteIcon /></button>
              </li>
            ))}
           </ul>
          </div>
          </div>
     </main>
    </>
  );
};

export default Todo;
