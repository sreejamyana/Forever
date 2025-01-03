// import React, { useContext } from 'react'
// import { assets } from '../../frontend_assets/assets'
// import { StoreContext } from '../context/StoreContext'

// const CartItems = () => {
//     const { cart, setCart, cartItems } = useContext(StoreContext);

//     const handleTotal = (prod)=>{
//         const existingItemIndex = cart.findIndex(
//             (item) => item.name === prod.name && item.selectedSize === prod.selectedSize
//         );
        
//         if (existingItemIndex !== -1) {
//             // Update existing item quantity
//             const updatedCart = [...cart];
//             updatedCart[existingItemIndex].quantity += 1;
//             const updatedItem = updatedCart[existingItemIndex];
//             updatedItem.total = updatedItem.price * updatedItem.quantity; // Calculate total for this item
//             setCart(updatedCart);
//         }
//     }

//     return (
//         <div className='my-14'>
//             <h1 className='text-2xl font-semibold'>YOUR CART</h1>
//             <div className='border-t-2 my-6'>
//                 {cart.length > 0 && cart.map((item, index) => (
//                     <div className='border-b-2 flex gap-8' key={index}>
//                         <div>
//                             <img src={item.image[0]} alt="" className='w-24 h-24 my-4' />
//                         </div>
//                         <div className='my-4 w-full'>
//                             <h2 className='font-medium text-lg'>{item.name}</h2>
//                             <div className='flex justify-between mt-4'>
//                                 <div className='flex gap-6 items-center'>
//                                     <span className='font-medium'>${item.price}</span>
//                                     <span className='border bg-gray-100 px-3 py-1'>{item.selectedSize}</span>
//                                 </div>
//                                 <div><input type="number" className='border w-20 h-8 p-2' value={item.quantity || 0} onChange={()=>handleTotal(item)}/></div>
//                                 <div className='mr-4 cursor-pointer'><img src={assets.bin_icon} alt="" className='w-6 h-6' onClick={()=>cartItems(item)}/></div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//                 {cart.length == 0 && <p>No items added in cart</p>}
//             </div>
//         </div>
//     )
// }

// export default CartItems


import React, { useContext } from 'react';
import { assets } from '../../frontend_assets/assets';
import { StoreContext } from '../context/StoreContext';

const CartItems = () => {
    const { cart, setCart, cartItems } = useContext(StoreContext);

    const handleQuantityChange = (prod, operation) => {
        const existingItemIndex = cart.findIndex(
            (item) => item.name === prod.name && item.selectedSize === prod.selectedSize
        );

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            const updatedItem = updatedCart[existingItemIndex];
            
            // Update quantity based on operation
            if (operation === 'increase') {
                updatedItem.quantity += 1;
            } else if (operation === 'decrease' && updatedItem.quantity > 1) {
                updatedItem.quantity -= 1;
            }

            // Calculate and update the total for this item
            updatedItem.total = updatedItem.price * updatedItem.quantity;
            setCart(updatedCart);
        }
    }

    return (
        <div className='my-14'>
            <h1 className='text-2xl font-semibold'>YOUR CART</h1>
            <div className='border-t-2 my-6'>
                {cart.length > 0 && cart.map((item, index) => (
                    <div className='border-b-2 flex gap-8' key={index}>
                        <div>
                            <img src={`http://localhost:3000/${item.image}`} alt="" className='w-24 h-24 my-4' />
                        </div>
                        <div className='my-4 w-full'>
                            <h2 className='font-medium text-lg'>{item.name}</h2>
                            <div className='flex justify-between mt-4'>
                                <div className='flex gap-6 items-center'>
                                    <span className='font-medium'>${item.price}</span>
                                    <span className='border bg-gray-100 px-3 py-1'>{item.selectedSize}</span>
                                </div>
                                <div>
                                    <input 
                                        type="number" 
                                        className='border w-20 h-8 p-2' 
                                        value={item.quantity || 0} 
                                        onKeyDown={(e) => {
                                            if (e.key === 'ArrowUp') {
                                                handleQuantityChange(item, 'increase');
                                            } else if (e.key === 'ArrowDown') {
                                                handleQuantityChange(item, 'decrease');
                                            }
                                        }}
                                        readOnly // Prevent direct typing, only allow arrow keys
                                    />
                                </div>
                                <div className='mr-4 cursor-pointer'>
                                    <img src={assets.bin_icon} alt="" className='w-6 h-6' onClick={() => cartItems(item)} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {cart.length === 0 && <p>No items added in cart</p>}
            </div>
        </div>
    )
}

export default CartItems;
