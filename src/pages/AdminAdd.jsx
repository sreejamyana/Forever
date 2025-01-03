import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'
import AddProduct from '../components/AddProduct'

const AdminAdd = () => {
    return (
        <div>
            <AdminNavbar/>
            <div className='flex gap-8'>
                <AdminSidebar/>
                <AddProduct/>
            </div>
        </div>
    )
}

export default AdminAdd