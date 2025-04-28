import React, { useState } from 'react'

const Todolist = () => {
    const[task,setTask]=useState("")
    const[value,setValue]=useState([])
  return (
    <div>
      <input type='text' placeholder='Enter Your Task' onChange={(e)=>setTask(e.target.value)}  />
      <button className='bg-gray-400 m-11' onClick={()=>{if(task){setValue(...value ,task); setTask("");}}}>Add Your Task</button>
      <ul>
        <li>{value}</li>
      </ul>
    </div>
  )
}

export default Todolist
