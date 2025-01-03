import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const RelatedProducts = () => {
    const { relatedProd } = useContext(StoreContext)

    return (
        <div>
            <h1 className='text-center text-3xl mt-24 font-medium'>Related Products</h1>
            <div className='flex flex-wrap gap-4 justify-center items-center mt-8'>
                {relatedProd.map((item, index) => (
                    <div className='w-48 h-80' key={index}>
                        <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
                        <p className='text-sm text-gray-600 font-medium mt-2'>{item.name}</p>
                        <p className='font-semibold text-sm'>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts