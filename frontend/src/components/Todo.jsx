import React, { useRef , useEffect } from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./header";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
const Todo = () => {
  const [tasks , settasks] = useState([]);
  const [input, setinput] = useState("");
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tasks");
      const data = await response.json();
      settasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };
  const handletask = async() => {
    if( input.trim() != "") {
      try {
      await axios.post("http://localhost:5000/api/tasks/edit", {
        task: input
      });
      settasks([...tasks , input]);
      fetchTasks();
      } catch (error) {
      console.error("Error sending task to backend:", error);
    }
    }
  }
   const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/tasks/delete/${id}`, {
        method: "DELETE",
      });
      settasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
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
             {tasks.map((task) => (
             <li key={task._id} className="flex justify-between items-center bg-gray-200 px-3 py-2 rounded text-black mb-4">
              <span>{task.task}</span>
              <button onClick={() => deleteTask(task._id)}><DeleteIcon /></button>
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
