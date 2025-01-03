import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar'
import AllProduct from '../components/AllProduct';


const AdminList = () => {

  return (
    <>
      <AdminNavbar />
      <div className='h-[80vh] flex gap-8'>
        <AdminSidebar />
        <AllProduct />
      </div>

    </>

  );
};

export default AdminList;
