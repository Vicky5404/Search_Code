import React from 'react'

const Product = ({img_url,productName}) => {
  return (
   
    <div >
  <div>
    <img class="h-56 p-3" src={img_url}/>
  </div>
</div>

  )
}

export default Product
