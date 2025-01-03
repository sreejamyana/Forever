const mongoose = require('mongoose');
require('dotenv').config();

const db = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
}


module.exports = {db};