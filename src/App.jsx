import React, { useState } from 'react';
import './App.css';
import { LiaAdSolid } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import {Motion} from 'framer-motion'
function App() {
 const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]); 
 const [newTask, setNewTask] = useState("");
 function handleInputChange(event) { setNewTask(event.target.value); } 
 function addTask() { if (newTask.trim() !== "") { setTasks([...tasks, newTask]); setNewTask(""); } } 
  function deleteTask(index) { const updatedTasks = tasks.filter((_, i) => i !== index); setTasks(updatedTasks); }
return (

 <div className='todo'>
 <h1>To-Do-List</h1>
 <div>
  <input type="text" placeholder='Enter a task..' value={newTask} onChange={handleInputChange} />
  <button className='add-b' onClick={addTask} > <LiaAdSolid size={38} /> </button>
  </div>
  <ol> {tasks.map((task, index) => (
  <li key={index}>
  <span className='text'>{task}</span>
  <button className='delete' onClick={() => deleteTask(index)}> Delete <MdDeleteForever size={17} /> </button> 
  </li> ))}
  </ol>
  </div>
 

    ); }
     export default App;