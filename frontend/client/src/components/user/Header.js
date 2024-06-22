import React from 'react'
import { Link ,Routes, Route, useNavigate } from 'react-router-dom'
import UserHome from './UserHome'


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
            <div>
                <ul className='mt-3'>
                    <Link to="/" className='p-4' >Home</Link>
                    <Link to="/donor-page" className='p-4'>Donors main page</Link>
                </ul>
            </div>
            <div>
            <button className='' onClick={handleLogOut}> Sign Out </button>
            </div>
        </div>
        <hr className=''/>

        <Routes>
            <Route path="/" element={<UserHome/>} exact/>
            <Route path="/userhome" element={<UserHome/>} exact/>

        </Routes>
        
    </div>
  )
}
