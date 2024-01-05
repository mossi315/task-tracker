import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

const App= () => {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () =>{
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  },[])
  // Fetch Tasks
    const fetchTasks = async() => {
    const res = await fetch('https://retoolapi.dev/PO3Rhw/tasks')
    const data = await res.json()
    return data
  }

  //Fetch Task
  const fetchTask= async(id) => {
    const res = await fetch(`https://retoolapi.dev/PO3Rhw/tasks/${id}`)
    const data = await res.json()
    return data
  }
  //Add task
  const addTask = async(task) =>{
    const res = await fetch('https://retoolapi.dev/PO3Rhw/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task) //convert js object to json format
    })

    const data = await res.json()
    setTasks([...tasks,data])
  }


  //Delete Task
  const deleteTask = async (id) =>{
    await fetch(`https://retoolapi.dev/PO3Rhw/tasks/${id}`,{
      method: 'DELETE'
    })
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Toggle Remainder
  const toggleRemainder = async(id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    // `http://localhost:5000/tasks/${id}`
      const res = await fetch(`https://retoolapi.dev/PO3Rhw/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask) //convert js object to json format
      })

      const data = await res.json();

      setTasks(
        tasks.map(task => 
          task.id === id 
          ?{...task, reminder: data.reminder }
          : task)
      )
    }

  return (
    <Router>
      <div className='container'>
      <Header title = 'Task Tracker' showAdd = {() => setShowAddTask(!showAddTask)} showAddTask = {showAddTask}/>
        <Routes>
        <Route path="/" exact 
          element={
            <>
              {showAddTask && <AddTask onAdd={addTask}/>}
              {tasks.length > 0 ? 
                <Tasks tasks={tasks} 
                onDelete = {deleteTask} 
                onToggle = {toggleRemainder}/> 
                : <span style={{color:"red"}}>Oops! No Tasks To Show</span>
              }
              <Footer />

            </>
          }
        />
        <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
    </Router>
  );
}
export default App;
