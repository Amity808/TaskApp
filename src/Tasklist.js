import React from 'react'
import InputTask from './InputTask'

const Tasklist = ({ tasks, handleCheck, handleDelete}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <InputTask 
        key={task.id}
        task={task}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default Tasklist
