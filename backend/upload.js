const multer = require('multer');
const path = require('path'); // Import path for handling file paths

// Set up storage for image upload using Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to ensure unique filenames
    }
});

module.exports = { storage };
