import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import {Link} from 'react-router-dom'

const CartTotal = () => {
  const {total, placeOrder, setPlaceOrder} = useContext(StoreContext);

  return (
    <div className='w-96 absolute right-28'>
      <h1 className='text-2xl font-medium'>CART TOTALS</h1>
      <div className='border-b-2 flex justify-between mt-4 mb-2'>
        <p>Subtotal</p>
        <p>${total}.00</p>
      </div>
      <div className='border-b-2 flex justify-between my-2'>
        <p>Shipping Fee</p>
        <p>$10.00</p>
      </div>
      <div className='font-medium flex justify-between my-2'>
        <p>Total</p>
        <p>${total + 10}.00</p>
      </div>
      <Link to={placeOrder ? '/orders' : '/place-order'}>
        <button onClick={()=> setPlaceOrder(true)}
        className='py-2 px-6 bg-black text-white font-medium mt-4 absolute right-0'>{ placeOrder? 'PLACE ORDER' : 'PROCEED TO CHECKOUT'}</button>
      </Link>
    </div>
  )
}

export default CartTotal