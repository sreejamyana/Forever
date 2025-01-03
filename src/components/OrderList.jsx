import React, {useContext} from 'react'
import { StoreContext } from '../context/StoreContext';

const OrderList = () => {
    const { cart } = useContext(StoreContext);

    const convertTimestamp = () => {
        const date = new Date(); // Convert to Date object
        return date.toUTCString().slice(0, 16); // Format to 'Wed Oct 23 2024'
      };

  return (
    <div className='mt-20'>
        <h2 className='text-2xl font-semibold'>MY ORDERS</h2>
        <div className='mt-6'>
            {cart.length > 0 && cart.map((item, index) => (
                    <div className='border-b-2 border-t-2 flex gap-8' key={index}>
                        <div>
                            <img src={`http://localhost:3000/${item.image}`} alt="" className='w-24 h-24 my-4' />
                        </div>
                        <div className='my-4 w-full'>
                            <h2 className='font-medium text-lg'>{item.name}</h2>
                            <div className='flex justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <span className='font-medium'>${item.price}</span>
                                    <span className='font-medium'>Quantity: {item.quantity}</span>
                                    <span className='font-medium'>Size: {item.selectedSize}</span>
                                </div>                               
                                <div className='flex items-center gap-2'>
                                <p class="min-w-2 h-2 rounded-full bg-green-500"></p>
                                <p class="text-sm md:text-base">Order Placed</p>
                                </div>
                                <div className='mr-4 cursor-pointer'>
                                    <span className='py-2 px-4 border'>Track Order</span>
                                </div>
                            </div>
                            <span>Date: {convertTimestamp()}</span><br/>
                            <span>Payment: COD</span>
                        </div>
                    </div>
            ))}
        </div>
        
    </div>
  )
}

export default OrderList