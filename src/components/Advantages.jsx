import React from 'react'
import { assets } from '../../frontend_assets/assets'

const Advantages = () => {
  return (
    <div className='flex justify-center items-center gap-32 mt-20'>
      <div className='flex flex-col items-center justify-center '>
        <img src={assets.exchange_icon} alt="" className='h-12 mb-4'/>
        <p className='font-medium'>Easy Exchange Policy</p>
        <p className='text-gray-500'>We offer hassle free exchange policy</p>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <img src={assets.quality_icon} alt="" className='h-12 mb-4'/>
        <p className='font-medium'>7 Days Return Policy</p>
        <p className='text-gray-500'>We provide 7 days free return policy</p>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <img src={assets.support_img} alt="" className='h-12 mb-4'/>
        <p className='font-medium'>Best customer support</p>
        <p className='text-gray-500'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default Advantages