import React from 'react'
import {assets} from '../../frontend_assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-center w-full mt-32 bg-slate-100 p-12'>
      <div className='flex-1'>
        <img src={assets.logo} alt="" className='h-12'/>
      </div>
      <div className='flex-1 flex '>
        <div className='flex-1'>
          <h1 className='text-lg font-semibold mb-4'>COMPANY</h1>
          <ul>
            <li className='mt-1 text-gray-600'>Home</li>
            <li className='mt-1 text-gray-600'>About us</li>
            <li className='mt-1 text-gray-600'>Delivery</li>
            <li className='mt-1 text-gray-600'>Privacy policy</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h1 className='text-lg font-semibold mb-4'>GET IN TOUCH</h1>
          <p className='text-gray-600'>+91-000-000-0000</p>
        </div>
      </div>
    </div>
  )
}

export default Footer