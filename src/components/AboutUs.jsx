import React from 'react'
import { assets } from '../../frontend_assets/assets'

const AboutUs = () => {
    return (
        <>
            <h1 className='text-center text-2xl font-medium mt-8'>ABOUT US</h1>
            <div className='flex justify-center items-center mt-6 gap-12'>
                <div>
                    <img src={assets.about_img} alt="" className='h-[30rem] w-[90rem]'/>
                </div>
                <div className='text-gray-900'>
                    <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p><br />
                    <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p><br />
                    <p className='font-medium'>Our Mission</p><br/>
                    <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs