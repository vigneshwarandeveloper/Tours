import React, { useState } from 'react'

export const Tour = ({id,image,info,name,price,removetours}) => {
  const [read,setread]=useState(false);



const readmore=()=>{
  setread(!read)
}


  return (
    <div className='single-tour'>
    <img src={image} alt={name} className='img'/>
    <span className='tour-price'>${price}</span>
    <div className='tour-info'>
      <h4>{name}</h4>
      <p>{read?info :`${info.substring(0,200)}...`}</p>
      <button onClick={readmore} className='info-btn'>{read?"showless":"readmore"}</button>
    </div>
    <button onClick={()=>removetours(id)} className='btn btn-block delete-btn'>Remove tour</button>
    </div>
  )
}
