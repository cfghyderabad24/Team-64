import React from 'react'
import logo from '../../assets/mainlogo.jpg'
import { Link ,Routes, Route, useNavigate } from 'react-router-dom'
import AdminHome from './AdminHome'
import SellerRegistration from './SellerRegistration'

export default function Header() {

    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload()
        }
  return (
    <div>
        <div className='flex justify-between items-center h-18 max-w-[1240px] mx-auto px-4'>
            <img className='max-w-[50px]' src={logo} alt="logo" />
            <div>
                <ul className=' flex'>
                    <Link to="/" className='p-4' >Home</Link>
                    <Link to="/sellerregistration" className='p-4'>Seller Registration</Link>
                    <Link to="/" className='p-4'>view vehivles</Link>
                    <Link to="/" className='p-4'>view spare parts</Link>
                    {/* <Link to="/" className='p-4'>view vehivles</Link>
                    <Link to="/" className='p-4'>view spare parts</Link> */}
                </ul>
            </div>
            <div>
            <button className='border border-red-600 text-red-600 font-bold py-2 px-4 rounded hover:bg-red-600 hover:text-white' onClick={handleLogOut}> Sign Out </button>
            </div>
        </div>
        <hr className='border-b-2'/>

        <Routes>
            <Route path="/" element={<AdminHome/>} exact/>
            <Route path="/adminhome" element={<AdminHome/>} exact/>
            <Route path='/sellerregistration' element={<SellerRegistration/>} exact/>
        </Routes>
        
    </div>
  )
}
