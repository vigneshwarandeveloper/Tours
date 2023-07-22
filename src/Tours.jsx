import React from 'react';
import {Tour} from "./Tour";

export const Tours = ({tours,removetours}) => {
  return (
    <section>
    <div className='title'>
    <h2>Our Tours</h2>
    <div className="title-underline"></div>
    </div>
    <div className="tours">
      {tours.map((tour)=>{
       return <Tour key={tour.id} {...tour} removetours={removetours}/>
      })}
     
    </div>
    </section>
  )
}
