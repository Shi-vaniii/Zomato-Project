import React,{useState} from 'react'
import zomatologo from '../../../Images/Zomato-logo2.png'
import Delivery from'../../../Images/Zomato-Delivery.jpg'
import Diningout from'../../../Images/Zomato-Dinner.avif'
import Nightlife from'../../../Images/Zomato-Nightlife.png'
import {foodData} from '../FoodData'
import { Link } from 'react-router-dom'
import CityFood from './CityFood'
import Footer from '../../Footer/Footer'
import './/CityDescription.css'; 


const CityData = () => {

  const [input, SetInput] = useState()

  const fun1=(e)=>{
    SetInput(e.target.value)
    console.log(e.target.value,'hhh')
  }
  

  return (
    <div>
      <div>
      <div className='container w-75 d-flex justify-content-between align-item-center mt-4'>
            <img style={{width:'9em'}} src={zomatologo}  alt='logo'/>
            <form className="d-flex " style={{width:500}} role="search" >
              <input className="form-control me-2 h-75 mt-2" type="search" placeholder="Search" aria-label="Search" onChange={fun1} />
              <button className="btn btn-outline-danger h-75 mt-2" type="submit">Search</button>
           </form>
           <div className='navbar_right'>
              <Link to='/login'  class="text-muted text-decoration-none mt-2">Login</Link>
              <Link to='/signup' class="text-muted text-decoration-none mt-2">SignUp</Link>
            </div>
      </div>
      <div id='choice'>
        <div className='delivery'>
          <img src={Delivery} alt='Delivery'/>
          <h5>Delivery</h5>
        </div>
        <div className='diningout'>
          <img src={Diningout} alt='Diningout'/>
          <h5>Dining Out</h5>
        </div>
        <div className='nightlife'>
        <img src={Nightlife} alt='Nightlife'/>
          <h5>Nightlife</h5>
        </div>
      </div>

        <div className='inspiration'>
          <h3>Inspiration for your first order</h3>

          <div className='inspirfood'>
            {
            foodData.map((res)=>{
              return(
                <>
              <div className='food'>
                <img src={res.image} alt='img'/>
                <h4>{res.text}</h4>
              </div>
              </>
              )
            })
            }
          </div>
        </div>

        <section>
           <CityFood/>
        </section>

      </div>
      <section>
           <Footer/>
      </section>
    </div>
  )
}

export default CityData