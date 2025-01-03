import React from 'react'
import {Link} from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <div className='w-1/5 h-full'>
            <ul className='flex flex-col gap-4 mt-4'>
                <Link to='/admin/add'><li className='px-6 py-1 border rounded-md my-1 mx-2'>Add Items</li></Link>
                <Link to='/admin/list'><li className='px-6 py-1 border rounded-md my-1 mx-2'>List Items</li></Link>
            </ul>
        </div>
    )
}

export default AdminSidebar