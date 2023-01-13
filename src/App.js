import './App.css';
import SearchTask from './SearchTask';
import Header from './Header';
import Footer from './Footer';
import AddTask from './AddTask'
import { useEffect, useState } from 'react';
import TaskContent from './TaskContent';
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'http://localhost:3500/tasks'

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask ] = useState('')
  const [search, setSearch ] = useState('');
  const [fetcherror, setFetchError] = useState(null)
  const [isLoading, setIsLoading ] = useState(true)

  useEffect (() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL)
        if(!response) throw Error('Do not get expected Data')
        const listTasks = await response.json();
        setTasks(listTasks);
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      }finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => fetchTasks())();
    }, 2000)
  }, [])

  // const setSaveTask = (newTasks) => {
  //   setTasks(newTask);
  //   localStorage.setItem('taskReminder', JSON.stringify(newTasks))
  // }

  const addTask = async (task) => {
    const id = tasks.length ? tasks[tasks.length -1].id + 1 : 1;
    const muyNewTask = {id, checked:false, task}
    const listTask = [...tasks, muyNewTask]
    setTasks(listTask);

    const postOption = {
      method: 'POST',
      headers: {
        'COntent-Type': 'application/json'
      },
      body: JSON.stringify(muyNewTask)
    };
    const result = await apiRequest(API_URL, postOption);
    if(result) setFetchError(result);
  }


  const handleDelete = async (id) => {
    const listTask = tasks.filter((task) => task.id !== id);
    setTasks(listTask);

    const deleteOption = {
      method: 'DELETE'
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOption )
    if (result) setFetchError(result);
  }
  const handleCheck = async (id) => {
    const listTask = tasks.map((task) => 
    task.id === id ? {...task, checked: !task.checked} : task);
    setTasks(listTask);

    const myTask = listTask.filter((task) => task.id === id);
    const updateOption = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({ checked: myTask[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOption)
    if (result) setFetchError(result)
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
      <SearchTask 
      search={search}
      setSearch={setSearch}/>
      <AddTask 
      newTask={newTask}
      setNewTask={setNewTask}
      handleSubmit={handleSubmit}/>
      <main>
        {isLoading && <p>Loading Tasks</p>}
        {fetcherror && <p style={{ color: 'red'}}>{`Error: ${fetcherror}}`}</p>}
        {!fetcherror && !isLoading && <TaskContent
        tasks={tasks.filter(task => ((task.task).toLowerCase()).includes(search.toLowerCase()))}
        setTasks={setTasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
