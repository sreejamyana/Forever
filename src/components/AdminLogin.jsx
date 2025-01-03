import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const AdminLogin = () => {
  const [data, setData] = useState({
    email:'',
    password:''
  });
  const nav = useNavigate()

  const handleChange=(e)=>{
    const {name, value} = e.target;
    setData((prev)=>({...prev, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3000/admin/login', data);
      if(!response.data.success){
        toast.error(response.data.message);
        return;
      }
      localStorage.setItem('token', response.data.token);
      nav('/admin/add')
    } catch (error) {
      toast.error('Something went wrong.Please try again');
    }
  };

  return (
    <div className='bg-slate-100 flex flex-col items-center justify-center h-80 w-96 m-auto mt-20'>
      <h2 className='text-2xl my-4'>Admin Panel</h2>
      <form className='w-4/5' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label><br />
        <input
          type="text"
          id='email'
          name='email'
          value={data.email}
          onChange={handleChange} // Update email state
          className='px-4 py-1 border rounded-md mb-2 w-full'
        /><br />
        <label htmlFor="password" className='mt-4'>Password</label><br />
        <input
          type="password"
          id='password'
          name='password'
          value={data.password}
          onChange={handleChange} // Update password state
          className='px-4 py-1 border rounded-md w-full'
        /><br />
        <button className='bg-black rounded-md px-4 py-1 text-white mt-4 w-full' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
