import React from 'react'
import CartTotal from '../components/CartTotal'
import PlaceOrderForm from '../components/PlaceOrderForm'

const PlaceOrder = () => {
  return (
    <div className='flex gap-8 mt-24'>
        <PlaceOrderForm/>
        <div className='flex-1 flex justify-center items-center'>
            <CartTotal/>
        </div>
    </div>
  )
}

export default PlaceOrder