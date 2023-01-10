import React from 'react'
import Tasklist from './Tasklist'

const TaskContent = ({ tasks, handleCheck, handleDelete }) => {
  return (
    <>
      {tasks.length ? (
      <Tasklist 
      tasks={tasks}
      handleCheck={handleCheck}
      handleDelete={handleDelete} />) : (
        <p style={{ marginTop: "2rem"}}>Your Task is empty for today</p>
      )
      }
    </>
  )
}

export default TaskContent
