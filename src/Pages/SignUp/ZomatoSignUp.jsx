import React, { useState } from 'react'
import signup from '../../Images/Zomato-logimg.jpg'
import './/ZomatoSignUp.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ZomatoSignUp = () => {
  const navigate = useNavigate()
  const [formData,SetformData]=useState(
    {
      name:'',
      email:'',
      password:''
    }
)

const inpfield=(e)=>{
  let {name,value}=e.target;
  SetformData({...formData,[name]:value});
  console.log(formData,'kkk')
}

const handleSubmit = async (e) => {
  e.preventDefault();

  let res = await axios.post('http://localhost:4000/api/users',formData)
  navigate('/login')
  console.log(res.data);
}
  return (
    <div>
    <div id='main'>
      <img src='../../Images/Zomato-logimg.jpg' alt='Zomato'></img>
    </div>
    <div id='out-box'>
        <h3>SignUp</h3>
        <div id='in-box-left'>
           <img src={signup}/>
        </div>
        <div id='in-box-right'>
          <div className='name'>
            <label>name :</label>
            <div className='namebox'><input type='text' placeholder='enter your name' name='name' value={formData.name} onChange={inpfield}></input></div>
          </div>
          <div className='email'>
            <label>email :</label>
            <div className='emailbox'><input type='text' placeholder='enter your email id' name='email' value={formData.email} onChange={inpfield}></input><br/></div>
          </div>
          <div className='password'>
            <label>password :</label>
            <div className='passwordbox'><input type='password' placeholder='enter your password' name='password' value={formData.password} onChange={inpfield}></input></div>
          </div>
          <button onClick={handleSubmit} id ='singbtn'>SignUp</button>
        </div>
        </div>
</div>
  )
}

export default ZomatoSignUp



{/* <div>
<div id='main'>
  <img src='../../Images/Zomato-logimg.jpg' alt='Zomato'></img>
</div>
<div id='out-box'>
  <h3>SignUp</h3>
  <div className='in-box-left'>
     <img src={login}/>
  </div>
  <div className='in-box-right'>
  <div className='name'>
      <label>Name -</label>
      <div className='namebox'><input type='text' placeholder='enter your name'></input></div>
    </div>
    <div className='email'>
      <label>Email -</label>
      <div className='emailbox'><input type='text' placeholder='enter your email id'></input></div>
    </div>
    <div className='password'>
      <label>Password -</label>
      <div className='passwordbox'><input type='password' placeholder='password'></input></div>
    </div>
    <div  className='sign-button'> 
      <button>SignUp</button>
    </div>
  </div>
</div>
</div> */}