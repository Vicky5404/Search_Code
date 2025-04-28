import React, { useState } from 'react'

const Toggle = () => {
  const[hide,setHide]=useState(true)
  return (
    <div>
     {
      hide && <p>fNhnh hhnhnnh,kjmnhbg</p>
     }
      <button className='bg-orange-300 m-11' onClick={()=>setHide(!hide)}>{hide ? 'hide' : 'show'}</button>
    </div>
  )
}

export default Toggle
