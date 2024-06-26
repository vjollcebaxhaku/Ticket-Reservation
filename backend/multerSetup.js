const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Uploads will be stored in ./uploads/ folder
  },
  filename: (req, file, cb) => {
    // File name will be timestamp + original file name
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('File type not supported!'), false); // Reject file
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
