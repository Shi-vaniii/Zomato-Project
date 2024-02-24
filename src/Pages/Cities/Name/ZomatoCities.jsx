import React from 'react'
import './ZomatoCities.css'; 
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import {cityName} from '../FoodData';

const ZomatoCities = () => {
  return (
    <div>
        <div className='container w-75 mt-5 d-flex justify-content-center align-items-center flex-column'>
            <h2 className='fs-1'>Popular locations in India</h2>
            <p className='mt-2 fs-5'>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore</p>
            <p className=' mt-0 fs-5'> menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
        </div>
      
       <section>
        <div className='container  mt-4 d-flex justify-content-between align-items-center '>
            <div className='row'>
                {cityName.map(city => {
                    return(
                    <div className='col-lg-4 mt-4'>
                        <Link to='/citydata' className='citydata'>
                            <h4>{city.city} Restaurant</h4>
                        </Link>
                    </div>
                )})
            }
            </div>          
        </div>
       </section>
    </div>
  )
}

export default ZomatoCities