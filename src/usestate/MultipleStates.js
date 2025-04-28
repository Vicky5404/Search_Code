import React, { useState } from 'react'

const MultipleStates = () => {
    const[like,setLike]=useState(0)
    const[dislike,setDislike]=useState(0)
  return (
    <div>
      <h3>Likes Count : {like}</h3>
      <h3>Dislikes : {dislike}</h3>
      <button className='m-11 bg-blue-400' onClick={()=>setLike(like+1)}>Like</button>
      <button className='m-11 bg-orange-600' onClick={()=>setDislike(dislike+1)}>Dislike</button>
    </div>
  )
}

export default MultipleStates
