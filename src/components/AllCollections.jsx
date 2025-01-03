import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom';

const AllCollections = () => {
    const { category, subCategory, setSelectedItem, list } = useContext(StoreContext);

    return (
        <div>
            <h1 className='font-semibold text-2xl'>ALL COLLECTIONS</h1>
            <div className='flex flex-wrap gap-4 mt-5'>
                {category.length > 0 ? (
                    category.map((categoryItem) => (
                        list
                            .filter((item) => item.category === categoryItem)
                            .filter((item) => {
                                if (subCategory.length > 0) {
                                    return subCategory.includes(item.subcategory);
                                }
                                return true;
                            })
                            .map((item, productIndex) => (
                                <Link to={`/product/${item._id}`}>
                                    <div className='w-48 h-80' key={productIndex} onClick={() => setSelectedItem(item)}>
                                        <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
                                        <p className='text-sm text-gray-600 font-medium mt-2'>{item.name}</p>
                                        <p className='font-semibold text-sm'>${item.price}</p>
                                    </div>
                                </Link>
                            ))
                    ))
                ) :
                subCategory.length > 0 ? (
                    subCategory.map((subCategoryItem) => (
                            list.filter((item) => item.subcategory === subCategoryItem)
                                .map((item, index) => (
                                    <Link to={`/product/${item._id}`}>
                                        <div className='w-48 h-80' key={index} onClick={() => setSelectedItem(item)}>
                                            <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
                                            <p className='text-sm text-gray-600 font-medium mt-2'>{item.name}</p>
                                            <p className='font-semibold text-sm'>${item.price}</p>
                                        </div>
                                    </Link>
                                ))
                        ))
                    ) :
                        (
                            list.map((item, index) => (
                                <Link to={`/product/${item._id}`}>
                                    <div className='w-48 h-80' key={index} onClick={() => setSelectedItem(item)}>
                                        <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
                                        <p className='text-sm text-gray-600 font-medium mt-2'>{item.name}</p>
                                        <p className='font-semibold text-sm'>${item.price}</p>
                                    </div>
                                </Link>
                            ))
                        )}
            </div>
        </div>
    )
}

export default AllCollections