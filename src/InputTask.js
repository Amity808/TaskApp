import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';

const InputTask = ({ task, handleCheck, handleDelete }) => {
  
  return (
    <li className='task'>
      <input type="checkbox"
      name="task"
      id='taskid'
      onChange={() => handleCheck(task.id)}
      checked={task.checked}
      />
      <label htmlFor="itemcheck" 
      style={ task.checked ? 
      {textDecoration: 'line-through'} : null}>
        {task.task}
      </label>
        <FaTrashAlt 
        onClick={() => handleDelete(task.id)}
        role='button'
        tabIndex="0"
        aria-label={`Delete ${task.task}`}
        />
    </li>
  )
}

export default InputTask
