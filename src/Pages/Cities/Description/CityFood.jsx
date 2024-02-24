import React from 'react'
import {cityName} from '../FoodData'
import {cityfoodData} from '../FoodData'
const CityFood = () => {
  return (
    <div>
        <section className='container w-75 mt-4'>
        <h2 style={{fontWeight:400}} className=''>Best Food in {}</h2>
          <div className='row  d-flex justify-content-between  align-item-center m-2 '>

          {
            cityfoodData.map((res)=>{
              return(
              <>
              <div className="card mt-4 " style={{width:300}}>
                <img src={res.img} class="card-img-top" alt="..."/>
                <div class="card-body d-flex justify-content-between align-item-center">
                   <h5 class="card-text">{res.text}</h5>
                   <h4 class="card-text text-secondary">{res.price}</h4>
                </div>
              </div>
              </>)
            })
          }
          </div>
         </section>
    </div>
  )
}

export default CityFood