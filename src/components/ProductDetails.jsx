import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../../frontend_assets/assets'
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const {selectedItem, cartItems} = useContext(StoreContext)
    const [isTrue, setIsTrue] = useState('');

    const handleAddToCart =(selectedItem, isTrue)=>{
        if(!isTrue){
            toast.error('Please select a size');
            return;
        }
        cartItems(selectedItem, isTrue)
    }

  return (
    <div className='flex mt-8'>
        <div className='flex-1 flex gap-4'>
            <div className='flex flex-col gap-4'>
                <img src={`http://localhost:3000/${selectedItem.image}`} alt="" className='h-24'/>
            </div>
            <img src={`http://localhost:3000/${selectedItem.image}`} alt="" />
        </div>
        <div className='flex-1'>
            <h1 className='text-2xl font-semibold'>{selectedItem.name}</h1>
            <div className='gap-1 h-4 mt-2 mr-2 inline-flex'>
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" className='opacity-30'/>
            </div>
            <span>(122)</span>
            <p className='text-2xl mt-6 font-semibold'>${selectedItem.price}</p>
            <p className='text-gray-500 w-[28rem] mt-6'>{selectedItem.description}</p>
            <p className='mt-8 font-medium'>Select Size</p>
            <div className='mt-6 cursor-pointer'>
                <span className={isTrue === 'S' ? 'border border-orange-400 bg-slate-100 px-4 py-2 ml-2' : 'bg-slate-100 px-4 py-2 ml-2'} onClick={()=>setIsTrue('S')}>S</span>
                <span className={isTrue === 'M' ? 'border border-orange-400 bg-slate-100 px-4 py-2 ml-2' : 'bg-slate-100 px-4 py-2 ml-2'} onClick={()=>setIsTrue('M')}>M</span>
                <span className={isTrue === 'L' ? 'border border-orange-400 bg-slate-100 px-4 py-2 ml-2' : 'bg-slate-100 px-4 py-2 ml-2'} onClick={()=>setIsTrue('L')}>L</span>
                <span className={isTrue === 'XL' ? 'border border-orange-400 bg-slate-100 px-4 py-2 ml-2' : 'bg-slate-100 px-4 py-2 ml-2'} onClick={()=>setIsTrue('XL')}>XL</span>
                <span className={isTrue === 'XXL' ? 'border border-orange-400 bg-slate-100 px-4 py-2 ml-2' : 'bg-slate-100 px-4 py-2 ml-2'} onClick={()=>setIsTrue('XXL')}>XXL</span>
            </div>          
            <button onClick={()=>handleAddToCart(selectedItem, isTrue)} className='bg-black px-5 py-3 text-white font-medium mt-12'>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDetails