import React from 'react'

export const Card = ({ img }) => {
   return (
      <div className='cards'>
         {/* <div className='card'>
            cool card
         </div> */}
         <div className='card2'>
            <img src={img} alt="img" />
         </div>
      </div>
   )
}
