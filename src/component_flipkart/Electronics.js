import React from 'react'

const Electronics = ({img_url,productName}) => {
  return (
    <div class='h-60 bg-slate-700 text-2xl text-center mt-4'>
      <h1>Top Offers!</h1>
       
        <img class='h-56 w-56' src={img_url} />
    <h1 >{productName}</h1>
    </div>
  )
}

export default Electronics
