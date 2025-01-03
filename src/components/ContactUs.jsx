import React from 'react'
import {assets} from '../../frontend_assets/assets'

const ContactUs = () => {
  return (
    <div>
        <h1 className='mt-6 text-xl font-medium text-center'>CONTACT US</h1>
        <div className='flex gap-10 justify-center items-center mt-12'>
            <div>
                <img src={assets.contact_img} alt="" className='h-[30rem]'/>
            </div>
            <div>
                <p className='font-medium text-lg'>Our Store</p>
                <p className='text-gray-600 text-base mt-6'>Sreeja Myana <br/>
                Hyderabad</p>
            </div>
        </div>
    </div>
  )
}

export default ContactUs