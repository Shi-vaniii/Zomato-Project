import React from 'react'
import './/Footer.css'
import zomatologo from '../../Images/Zomato-logo2.png'

const Footer = () => {
  return (
    <div>
        <div className='container mt-5 w-75 d-flex justify-content-between align-item-center .bg-rgb(249, 216, 216)'>
            <div>
                <img style={{width:'8em'}} src={zomatologo} />
            </div>
            <div id='outerbox'>
                <select className='country'>
                    <option>India</option>
                    <option>USA</option>
                    <option>Nepal</option>
                    <option>France</option>
                </select>
                <select className='language'>
                    <option>Hindi</option>
                    <option>English</option>
                    <option>Nepali</option>
                    <option>French</option>
                </select>
            </div>
            </div>
            <div className='container mt-5 w-75 d-flex justify-content-between align-item-center '>
                <div>
                    <h6>ABOUT ZOMATO</h6>
                    <p>Who We Are</p>
                    <p>Blog</p>
                    <p>Work With Us</p>
                    <p>Investor Relation</p>
                    <p>Report Froud</p>
                    <p>Press Kit</p>
                    <p>Contect Us</p>
                </div>
                <div>
                    <h6>ZOMAVERSE</h6>
                    <p>Zomato</p>
                    <p>Blinkit</p>
                    <p>Feeding India</p>
                    <p>Hyperpure</p>
                    <p>Zomaland</p>
                </div>
                <div>
                    <h6>FOR RESTAURANTS</h6>
                    <p>Partner With Us</p>
                    <p>Apps For You</p>
                    <br/>
                    <h6>FOR ENTERPRISES</h6>
                    <p>Zomato For Enterprises</p>
                </div>
                <div>
                    <h6>LEARN MORE</h6>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>Terms</p>
                    <p>Sitemap</p>
                </div>
                <div>SOCIAL LINKS</div>
                
            </div>
    </div>
  )
}

export default Footer