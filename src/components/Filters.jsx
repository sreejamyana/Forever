import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Filters = () => {
  const { fixCategory, fixSubCategory } = useContext(StoreContext);

  return (
    <div className='inline-block'>
        <h1 className='text-lg font-medium'>FILTERS</h1>
        <div className='border border-gray-200 p-5 mb-5 w-60 mt-6'>
            <p className='font-medium'>CATEGORIES</p>
            <div onClick={()=>fixCategory('Men')}>
            <input type="checkbox" id='men' className='mr-2 mb-3 mt-3'/>
            <label htmlFor="men">Men</label><br/>
            </div>
            <div onClick={()=>fixCategory('Women')}>
            <input type="checkbox" id='women' className='mr-2 mb-3' />
            <label htmlFor="women">Women</label><br/>
            </div>
            <div onClick={()=>fixCategory('Kids')}>
            <input type="checkbox" id='kids' className='mr-2 mb-3' />
            <label htmlFor="kids">Kids</label>
            </div>
        </div>
        <div className='border border-gray-200 p-5 w-60'>
            <p className='font-medium'>TYPE</p>
            <div onClick={()=>fixSubCategory('topwear')}>
            <input type="checkbox" id='topwear' className='mr-2 mb-3 mt-3'/>
            <label htmlFor="topwear">Topwear</label><br/>
            </div>
            <div onClick={()=>fixSubCategory('bottomwear')}>
            <input type="checkbox" id='bottomwear' className='mr-2 mb-3'/>
            <label htmlFor="bottomwear">Bottomwear</label><br/>
            </div>
            <div onClick={()=>fixSubCategory('winterwear')}>
            <input type="checkbox" id='winterwear' className='mr-2 mb-3'/>
            <label htmlFor="winterwear">Winterwear</label>
            </div>
        </div>
    </div>
  )
}

export default Filters