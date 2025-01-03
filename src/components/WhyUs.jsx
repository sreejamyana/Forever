import React from 'react'

const WhyUs = () => {
    return (
        <>
            <h1 className='mt-20 mb-6'>WHY CHOOSE US</h1>
            <div className='flex'>
                <div className='border border-gray-300 p-16'>
                    <p className='text-sm font-bold'>Quality Assurance:</p>
                    <p className='mt-4 text-sm text-gray-700'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className='border border-gray-300 p-16'>
                    <p className='text-sm font-bold'>Convenience:</p>
                    <p className='mt-4 text-sm text-gray-700'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>
                <div className='border border-gray-300 p-16'>
                    <p className='text-sm font-bold'>Exceptional Customer Service:</p>
                    <p className='mt-4 text-sm text-gray-700'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>
        </>
    )
}

export default WhyUs