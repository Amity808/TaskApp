import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddTask = ({ newTask, setNewTask, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addTask">Add Your Task</label>
      <input type="text" 
      autoFocus
      ref={inputRef}
      placeholder="Add New Task"
      required
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}/>
      <button type='submit' aria-label='Add Task' 
      onClick={() => inputRef.current.focus()}><FaPlus /></button>
    </form>
  )
}

export default AddTask
