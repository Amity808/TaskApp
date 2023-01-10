import './App.css';

import SearchTask from './SearchTask';
import Header from './Header';
import Footer from './Footer';
import AddTask from './AddTask'
import { useState } from 'react';
import TaskContent from './TaskContent';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      checked: false,
      task: "Going Out"
    },
    {
      id: 2,
      checked: false,
      task: "To School"
    },
    {
      id: 3,
      checked: false,
      task: "Work on my gigs"
    },
    {
      id: 4,
      checked: false,
      task: "Celebrate success"
    }
  ])
  const [newTask, setNewTask ] = useState('')

  // const setSaveTask = (newTasks) => {
  //   setTasks(newTask);
  //   localStorage.setItem('taskReminder', JSON.stringify(newTasks))
  // }

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length -1].id + 1 : 1;
    const muyNewTask = {id, checked:false, task}
    const listTask = [...tasks, muyNewTask]
    setTasks(listTask)
   
  }


  const handleDelete = (id) => {
    const listTask = tasks.filter((task) => task.id !== id);
    setTasks(listTask);
  }
  const handleCheck = (id) => {
    const listTask = tasks.map((task) => 
    task.id === id ? {...task, checked: !task.checked} : task);
    setTasks(listTask)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newTask) return;
    addTask(newTask)
    setNewTask('')

    
  }
  return (
    <div className="App">
      <Header title='Task App' />
      <SearchTask />
      <AddTask 
      newTask={newTask}
      setNewTask={setNewTask}
      handleSubmit={handleSubmit}/>
      <main>
        <TaskContent
        tasks={tasks}
        setTasks={setTasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
