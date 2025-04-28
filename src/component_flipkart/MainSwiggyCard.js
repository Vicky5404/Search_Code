import React from 'react'

const MainSwiggyCard = ({img_url, productName}) => {
return (
    <div class='h-36 w-full  mt-2 pt-4'>
        <div >
          <img class='h-20 w-20 ml-8' src={img_url}/>
        </div>
        <p class='font-semibold'>{productName}</p>
    </div>
  )
}

export default MainSwiggyCard
