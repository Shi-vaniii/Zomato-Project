import React, { useState } from 'react'
import signup from '../../Images/Zomato-logimg.jpg'
import './/ZomatoSignUp.css'

const ZomatoSignUp = () => {
const [data,SetData]=useState(
  {
    name:'',
    email:'',
    password:''
  }
)

const fun1=(e)=>{
  let {name,value}=e.target;
  SetData({...data,[name]:value});
  console.log(data,'kkk')
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
            <label>Name -</label>
            <div className='namebox'><input type='text' placeholder='enter your name' name='name' value={data.name} onChange={fun1}></input></div>
          </div>
          <div className='email'>
            <label>Email -</label>
            <div className='emailbox'><input type='text' placeholder='enter your email id' name='email' value={data.email} onChange={fun1}></input><br/></div>
          </div>
          <div className='password'>
            <label>Password -</label>
            <div className='passwordbox'><input type='password' placeholder='enter password' name='password' value={data.password} onChange={fun1}></input></div>
          </div>
          <div  className='signupbutton'> 
            <button onClick={fun1}>SignUp</button>
          </div>
      
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