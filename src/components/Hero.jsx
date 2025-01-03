import React from 'react'
import { assets } from '../../frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex items-center justify-center w-full border border-gray-400'>
      <div className='flex-1 flex justify-center'>
        <span>
        <p className='font-medium text-lg'>OUR BESTSELLERS</p>
        <h1 className='font-semibold text-6xl my-2'>Latest Arrivals</h1>
        <p className='font-semibold text-lg'>SHOP NOW</p>
        </span>
      </div>
      <div className='flex-1 mx-auto'>
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero