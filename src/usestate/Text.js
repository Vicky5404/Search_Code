import React, { useState } from 'react'

const Text = () => {
    const[paragraph,setParagraph]=useState('')
  return (
    <div>
      <input type='text' placeholder='Enter Your Text' onChange={(e)=>setParagraph(e.target.value)}/>
      <p>{paragraph}</p>
    </div>
  )
}

export default Text
