import React from 'react'
import {frntpgcard} from './/ZomatoCardData'

export default function ZomatoFoodCard() {
  return (
    <>
        <div className='cards'>
            {
                frntpgcard.map((res)=>{
                    return(
                    <>
                    <div className="card1">
                        <img src={require('../../Images/Zomato-cardimg.avif')} className="card-img" alt="..."/>
                        <div className="card-text">
                            <h4>{res.text}</h4>
                        </div>
                    </div>
                    </>)
                })
            }
        </div>
    </>
  )
}