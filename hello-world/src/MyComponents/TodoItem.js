import React from 'react'

export const TodoItem = ({todos,onDelete}) => {
  return (
    <div>
      <h5>{todos.title}</h5>
      <button className="btn btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
    </div>
    
  )
}

// export default TodoItem
