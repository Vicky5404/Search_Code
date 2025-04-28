import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
  return (
    <div className='text-center'>
      <h1>Count Value {count}</h1>
      <button className='bg-blue-500' onClick={()=> setCount(count+1)}>Click Me +</button>
      <button className='m-11 bg-lime-600' onClick={()=> setCount(count-1)}>Click Me -</button>
      <button className='m-11 bg-orange-400' onClick={()=> setCount(count==0)}>Reset</button>

    </div>
  )
}

export default Counter
