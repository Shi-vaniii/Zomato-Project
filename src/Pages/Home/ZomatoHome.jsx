import React, { startTransition } from 'react'
import bg from '../../Images/Zomato-bgimg.avif'
import logo from '../../Images/Zomato-logo.avif'
import { Link } from 'react-router-dom'
// import cardimg from './Images//Zomato-cardimg.avif'
import ZomatoCities from '../Cities/Name/ZomatoCities'
import ZomatoFoodCard from '../../Components/FrontCards/ZomatoFoodCard'
import Footer from '../Footer/Footer'
import './/ZomatoHome.css'


const ZomatoHome = () => {
  return (
    <div>
        <div>
            <div className='parent'>
                <img className='bg-image'  src={bg}/>
                <div className='navbar'>
                    <div className='navbar_left'>
                        <Link to='/viewfood'className='link'>ViewFood</Link>
                        <span>Add Restaurants</span>
                    </div>
                    <div className='navbar_right'>
                        <Link to='/login'  className='link'>Login</Link>
                        <Link to='/signup' className='link'>SignUp</Link>
                    </div>
                </div>
                <div className='logo_image'>
                    <img src={logo}/>
                </div>
                <div className='statement'>
                    <h3>Find the best restaurants, cafés and bars in India</h3>
                    <div className='select-search'>

                        {/* <select>
                            <option>delhi</option>
                            <option>delhi</option>
                            <option>delhi</option>
                        </select> */}

                       <input placeholder='enter somthing'></input>
                    </div>
                </div>
                <ZomatoFoodCard/>
        <section>
             <ZomatoCities/>
        </section>

        <footer>
            <Footer/>
        </footer>
            </div>
        </div>
     

    </div>
  )
}

export default ZomatoHome