const express = require('express');
const route = express.Router();
const Product = require('../models/product.js');
const multer = require('multer');
const { storage } = require('../upload.js');
const fs = require('fs'); 
const path = require('path');
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET;

const upload = multer({ storage });


//route for adding product
route.post('/add', upload.single('image'), (req, res) => {
  const token = req.headers.authorization;
  
  try {
    jwt.verify(token, jwtSecret);
    const { name, description, price, category, subcategory, bestseller } = req.body;
    const image = req.file ? req.file.path : '';

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      subcategory,
      image,
      bestseller
    });

    newProduct.save()
      .then(product => res.status(201).json({success:true, message: 'Product added successfully', product }))
      .catch(err => res.status(500).json({success:false, message: 'Failed to add product'}));
  } catch (error) {
    res.json({success:false, message: 'Please login and try again'});
  }
  
});


//route for fetching all products
route.get('/products', async (req,res)=>{
  try {
    const data = await Product.find({});
    res.json({success:true, data});
  } catch (error) {
    res.json({success:false, message: 'Something went wrong'});
  }
})


//route for delete product
route.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    jwt.verify(token, jwtSecret);
 

    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const imagePath = product.image;
    await Product.findByIdAndDelete(id);

    // If the product had an image, delete it from the uploads folder
    if (imagePath) {
      const fullPath = path.join(__dirname, '..', imagePath); // Assuming `uploads` is one directory up
      fs.unlink(fullPath, (err) => {
        if (err) {
          console.error('Error while deleting image:', err);
        } else {
          console.log('Image deleted successfully:', fullPath);
        }
      });
    }

    res.json({ success: true, message: 'Product deleted successfully' });

  } catch (error) {
    console.error('Error while deleting product:', error);
    res.status(500).json({ success: false, message: 'Failed to delete product' });
  }
});


//route for admin login
route.post('/admin/login', (req,res)=>{
  const {email, password} = req.body;
  if (email !== 'abhi@gmail.com' || password !== 'abhi') {
    res.json({success:false, message: 'Please enter correct credentials'})
    return;
  } 
  const token = jwt.sign({email}, jwtSecret);
  res.json({success: true, token})
})


module.exports = { route };