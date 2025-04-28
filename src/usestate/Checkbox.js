import React, { useState } from 'react'

const Checkbox = () => {
    const[hide,setHide]=useState(true)
  return (
    <div className='flex'>
    <input type='checkbox' onClick={()=>setHide(!hide)}/>
    { hide && <p>My Name is Vicky .</p>}
    </div>
  )
}

export default Checkbox
