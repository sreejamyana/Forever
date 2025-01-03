import React, { useState, useEffect ,useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom';
import axios from 'axios'


const BestSellers = () => {
  const {setSelectedItem} = useContext(StoreContext)
  const [list, setList] = useState([]);

  const productData = async()=>{
    const response = await axios.get('http://localhost:3000/products');
    if(!response.data.success){
        console.log(response.data.message);
        return;
    }
    setList(response.data.data);
};

  useEffect(()=>{
      productData();
  }, []);
  
  return (
    <div>
      <div className='my-16'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>BEST SELLERS</h1>
        <p className='mt-3 font-medium'>Shop our best sellers and explore customer favorites!</p>
      </div>
      <div className='flex gap-3 flex-wrap mt-8 '>
        {list.map((item, index) => item.bestseller && (
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
    </div>
  )
}

export default BestSellers