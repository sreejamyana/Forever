import React, { useContext } from 'react'
import { assets } from '../../frontend_assets/assets.js'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext.jsx';

const Navbar = () => {
  const {cart, setPlaceOrder} = useContext(StoreContext);

  const length = cart.length;

  return (
    <div className='flex justify-between items-center h-20'>
        <div>
            <img src={assets.logo} className='h-10'/>
        </div>
        <div>
            <ul className='flex gap-5 font-medium'>
                <Link to='/'>HOME</Link>
                <Link to='/collection'>COLLECTION</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
            </ul>
        </div>
        <div className='flex gap-5'>
          <img src={assets.search_icon} alt="" className='h-6'/>
          <img src={assets.profile_icon} alt="" className='h-6'/>
          <span className='relative'>
          <Link to='/cart'>
            <img src={assets.cart_icon} alt="" className='h-6' onClick={()=> setPlaceOrder(false)}/>
            <span className='bg-black absolute -right-1 -bottom-1.5 text-white rounded-full px-1 text-xs'>{length}</span>
          </Link>
          </span> 
        </div>
    </div>
  )
}

export default Navbar