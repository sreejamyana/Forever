import React from 'react'
import Logo from '../../frontend_assets/logo.png'
import { useNavigate } from 'react-router-dom'

const AdminNavbar = () => {
    const nav = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem("token");
        nav('/admin/login')
    }
    return (
        <div className='flex justify-between items-center h-20 border-b-2'>
            <div>
                <img src={Logo} alt="" className='h-10' />
            </div>
            <div>
                <button className='rounded-lg px-4 py-2 bg-slate-800 text-white' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default AdminNavbar