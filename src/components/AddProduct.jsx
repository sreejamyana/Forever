import React, { useEffect, useState } from 'react';
import Upload from '../../frontend_assets/upload.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    description: '',
    category: 'Men', 
    subcategory: 'topwear', 
    price: '',
    bestseller: false,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const nav = useNavigate()

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (name === 'image') {
      const file = e.target.files[0];

      // Set the file in formData
      setFormData({
        ...formData,
        image: file,
      });

      // Create a preview URL for the selected image
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setFormData({
        image: '',
        name: '',
        description: '',
        category: 'Men', 
        subcategory: 'topwear', 
        price: '',
        bestseller: false,
    })
    setImagePreview(null)
    
     const data = new FormData();
     data.append('image', formData.image);  
     data.append('name', formData.name);
     data.append('description', formData.description);
     data.append('category', formData.category);
     data.append('subcategory', formData.subcategory);
     data.append('price', formData.price);
     data.append('bestseller', formData.bestseller);
 
     const token = localStorage.getItem('token');
     if(!token){
      toast.error('Please login and try again');
      setTimeout(()=>{
        nav("/admin/login");
      }, 500)
      return;
    }
     try {
       const response = await axios.post('http://localhost:3000/add', data, {
         headers: {
           'Content-Type': 'multipart/form-data',  
           Authorization: token
         },
       });
       if(!response.data.success){
        toast.error(response.data.message);
        setTimeout(()=>{
          nav("/admin/login");
        }, 500)
        return;
       }
       toast.success(response.data.message);
     } catch (error) {
       toast.error('Login and try again');
       setTimeout(()=>{
        nav("/admin/login");
      }, 500)
     }
  };

  return (
    <div>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Upload Image</label>
          <label htmlFor="image" className="border h-16 w-20 flex items-center justify-center cursor-pointer">
            {/* Conditionally show preview if image is selected */}
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
            ) : (
              <img src={Upload} alt="Upload Arrow" className="h-6 w-6" />
            )}
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="hidden"
            onChange={handleChange}
          />
        </div>

        <label htmlFor="name">Product Name</label><br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-2.5 border rounded-md mb-4 w-full"
        /><br />

        <label htmlFor="description">Product Description</label><br />
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="p-2.5 border rounded-md mb-4 w-full"
        /><br />

        <div className="flex gap-4">
          <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">Product Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <label htmlFor="subcategory" className="block mb-2 text-sm font-medium text-gray-700">Sub Category</label>
            <select
              id="subcategory"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="topwear">Topwear</option>
              <option value="bottomwear">Bottomwear</option>
              <option value="winterwear">Winterwear</option>
            </select>
          </div>

          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700">Product Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="p-2.5 border rounded-md mb-2"
            />
          </div>
        </div>

        <input
          type="checkbox"
          id="bestseller"
          name="bestseller"
          checked={formData.bestseller}
          onChange={handleChange}
          className="mr-4 mt-6"
        />
        <label htmlFor="bestseller">Add to Bestseller</label><br />

        <button type="submit" className="rounded-lg px-10 py-2 bg-slate-800 text-white mt-10">ADD</button>
      </form>
    </div>
  );
};

export default AddProduct;
