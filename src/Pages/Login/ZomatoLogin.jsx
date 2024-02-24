import { useState,React } from 'react'
import login from '../../Images/Zomato-logimg.jpg'
import { Link } from 'react-router-dom'
import './/ZomatoLogin.css'

const ZomatoLogin = () => {

const [data, SetData] = useState(
  {
    email:'',
    password: ''    
  }
)

const fun1=(e)=>{  
  let {name,value}=e.target;
  SetData({...data,[name]:value});
  console.log(data,'kkkk');
}

  return (
    <div>
        <div id='main'>
          <img src='../../Images/Zomato-logimg.jpg' alt='Zomato'></img>
        </div>
        <div id='out-box'>
            <h3>Login Form</h3>
            <div id='in-box-left'>
               <img src={login}/>
            </div>
            <div id='in-box-right'>
              <div className='email1'>
                <label>Email -</label>
                <div className='emailbox'><input type='text' placeholder='enter your email id' name='email' value={data.email} onChange={fun1}></input><br/></div>
              </div>
              <div className='password'>
                <label>Password -</label>
                <div className='passwordbox'><input type='password' placeholder='password' name='password' value={data.password} onChange={fun1}></input></div>
              </div>
              <div  className='loginbutton'> 
                <button onClick={fun1}>Login</button>
              </div>
              <div className='signup' >
                <Link to='/signup' className='signlink'>SignUp</Link>
              </div>
            </div>
            </div>
    </div>
  )
}

export default ZomatoLogin