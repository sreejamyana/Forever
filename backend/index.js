const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const { db } = require('./db.js');
const { route } = require('./routes/index.js');

const port = process.env.PORT || '3000';
const app = express();

// Initialize the database connection
db();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Serve the uploads folder for accessing uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use your routes
app.use('/', route);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
