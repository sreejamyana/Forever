import React from 'react'

const PlaceOrderForm = () => {
    return (
        <div className='flex-1'>
            <h2 className='text-3xl'>DELIVERY INFORMATION</h2>
            <form className='mt-4'>
                <div className='flex items-center gap-4'>
                    <input type="text" placeholder='First name' className='py-2 px-6 w-full placeholder:text-gray-400 border rounded-md  mt-4' required />
                    <input type="text" placeholder='Last name' className='py-2 px-6 w-full placeholder:text-gray-400 border rounded-md  mt-4' required />
                </div>
                <input type="text" placeholder='Email' className='py-2 px-6 w-full placeholder:text-gray-400 border rounded-md mt-4' required />
                <input type="text" placeholder='Street' className='py-2 px-6 w-full placeholder:text-gray-400 border rounded-md  mt-4' />
                <div className='flex items-center gap-4'>
                    <input type="text" placeholder='City' className='py-2 px-6 w-full placeholder:text-gray-400 border rounded-md  mt-4' />
                    <input type="text" placeholder='State' className='py-2 px-6 w-full placeholder:text-gray-400 border rounded-md mt-4' />
                </div>
                <div className='flex items-center gap-4'>
                    <input type="text" placeholder='Zipcode' className='py-2 px-6 w-full placeholder:text-gray-400 border rounded-md  mt-4' />
                    <input type="text" placeholder='Country' className='py-2 px-6 w-full placeholder:text-gray-400 border rounded-md  mt-4' />
                </div>
                <input type="text" placeholder='Phone' className='py-2 px-6 w-full placeholder:text-gray-400 border rounded-md  mt-4' />
            </form>
        </div>
    )
}

export default PlaceOrderForm