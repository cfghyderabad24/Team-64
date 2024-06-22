import React from 'react'
import logo from '../../assets/mainlogo.jpg'
import { Link ,Routes, Route, useNavigate } from 'react-router-dom'
import AdminHome from './AdminHome'

export default function Header() {

    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload()
        }
  return (
    <div>
        <div className=''>
            <img className='' src={logo} alt="logo" />
            <div>
                <ul className=' flex'>
                    <Link to="/" className='p-4' >Home</Link>
                    <Link to="/" className='p-4'>view vehivles</Link>
                    <Link to="/" className='p-4'>view spare parts</Link>
                </ul>
            </div>
            <div>
            <button className='' onClick={handleLogOut}> Sign Out </button>
            </div>
        </div>
        <hr className='border-b-2'/>

        <Routes>
            <Route path="/" element={<AdminHome/>} exact/>
            <Route path="/adminhome" element={<AdminHome/>} exact/>
           
        </Routes>
        
    </div>
  )
}
