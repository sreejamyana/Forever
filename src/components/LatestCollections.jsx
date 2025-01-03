import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom';


const LatestCollections = () => {
  const {list, setSelectedItem} = useContext(StoreContext);

  return (
    <div className='my-16'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>LATEST COLLECTIONS</h1>
        <p className='mt-3 font-medium'>Discover our latest collections for exclusive styles and trends!</p>
      </div>
      <div className='flex gap-3 flex-wrap mt-8 '>
        {list.slice(0,10).map((item, index) => (
          <Link to={`/product/${item._id}`}>
          <div className='w-52 h-80' key={index} onClick={() => setSelectedItem(item)}>
            <img src={`http://localhost:3000/${item.image}`} alt=""/>
            <p className='text-sm text-gray-600 font-medium mt-2'>{item.name}</p>
            <p className='font-semibold text-sm'>${item.price}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LatestCollections