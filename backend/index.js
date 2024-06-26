const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const upload = require('./multerSetup');
const routesHandler = require('./routes/handler');

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); // Allow requests from all origins (you can specify origin if needed)

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/', routesHandler); // Your routes are handled by routes/handler.js

// Handle file upload
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    // Example of saving image URL to database using Prisma
    // Replace with your actual database logic
    const newGalleryItem = await prisma.gallery.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        imageUrl: imageUrl,
        publishedAt: new Date()
      }
    });

    res.status(201).json(newGalleryItem);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
