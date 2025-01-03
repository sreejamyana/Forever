import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../frontend_assets/assets';
import axios from 'axios';
import { StoreContext } from '../context/StoreContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AllProduct = () => {
  const { list } = useContext(StoreContext);  
  const [allProd, setAllProd] = useState([]);
  const nav = useNavigate()

  const handleDelete = async (id) => {
    console.log(id)
    const token = localStorage.getItem('token');
     if(!token){
      toast.error('Please login and try again');
      setTimeout(()=>{
        nav("/admin/login");
      }, 500);
      return;
    }
    const newArr = allProd.filter((item) => item._id !== id);
    setAllProd(newArr);

    try {
      const response = await axios.delete(`http://localhost:3000/products/${id}`, 
        {
          headers: {
            Authorization: token
          }
        }
      );
      if (!response.data.success) {
        toast.error(response.data.message);
      }
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error(`Error: ${error.message}`);

      setAllProd((prev) => [...prev, newArr]);
    }
  };

  useEffect(() => {
    if (list.length > 0) {
      setAllProd(list);
    }  
  }, [list]); 

  return (
    <div className="p-5 w-full">
      <h2 className="text-2xl font-semibold mb-4">All Products List</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="text-left">
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {allProd.length > 0 && allProd.map((product) => (
            <tr key={product._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <img src={`http://localhost:3000/${product.image}`} alt={product.name} className="h-12 w-12 object-cover" />
              </td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">${product.price}</td>
              <td className="py-2 px-4 border-b text-center">
                <img src={assets.cross_icon} alt="delete" className="h-3 cursor-pointer" onClick={() => handleDelete(product._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
