import {React, useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Registration() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        username:'',
        password:''
    })
    const [message,setMessage] = useState('')
    const [error,setError] = useState('')

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
          const response = await axios.post('http://localhost:1234/registeration',formData)
          console.log(response.data.message)
          if(response.data!=null){
            setMessage(response.data)
            navigate('/userlogin')
          }
        }catch(e){
          setError(e.message)
        }
      }
  return (
    <div className=''>
      <h1>hello</h1>
    <div className=''>
     <h1 className=''>Registeration</h1>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit} className=''>
        <label >Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className='p-2 '/>
        <label >Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className='p-2 '/>
        <label >Username</label>
        <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} className='p-2 '/>
        <label >Password</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className='p-2 '/>
        <button type='submit' className=''>Register</button>
        <Link to="/userlogin"   className='p-4 '>Already have an account?</Link>
      </form>
    </div>
  </div>
  )
}
