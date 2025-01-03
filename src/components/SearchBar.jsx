import React from 'react'
import {assets} from '../../frontend_assets/assets'

const SearchBar = () => {
  return (
    <div className='w-full bg-slate-100 border-t-2 border-b-2 py-5 hidden'>
        <div className=' flex gap-4 justify-center items-center'>
        <div className='border border-gray-400 rounded-full w-[32rem] py-1 px-4 flex justify-between items-center'>
            <input type="text" placeholder='Search' className='outline-none flex-1 bg-transparent'/>
            <img src={assets.search_icon} alt="" className='w-4 h-4'/>
        </div>
        <img src={assets.cross_icon} alt="" className='w-3 h-3' />
        </div>     
    </div>
  )
}

export default SearchBar