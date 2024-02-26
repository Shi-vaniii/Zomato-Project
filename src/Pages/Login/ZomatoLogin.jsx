import { useState,React } from 'react'
import login from '../../Images/Zomato-logimg.jpg'
import { Link } from 'react-router-dom'
import './/ZomatoLogin.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const ZomatoLogin = () => {
const navigate = useNavigate()
const [data, SetData] = useState(
  {
    email:'',
    password: ''    
  }
)

const inptfield=(e)=>{  
  let {name,value}=e.target;
  SetData({...data,[name]:value});
  console.log(data,'kkkk');
}

const handleSubmit = async (e)=>{
  e.preventDefault()

  const res = await axios.post('http://localhost:4000/api/login', data)
  navigate('/')
  console.log(res.data);
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
                <label>email :</label>
                <div className='emailbox'><input type='text' placeholder='enter your email id' name='email' value={data.email} onChange={inptfield}></input><br/></div>
              </div>
              <div className='password'>
                <label>password :</label>
                <div className='passwordbox'><input type='password' placeholder='enter your password' name='password' value={data.password} onChange={inptfield}></input></div>
              </div>
              <button onClick={handleSubmit} id='logbtn'>Login</button>
              <div className='signup' >
                <Link to='/signup' className='signlink'>SignUp</Link>
              </div>
            </div>
            </div>
    </div>
  )
}

export default ZomatoLogin