const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require('multer');

// Setup storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }).single('image');

// Create a new gallery item
const createGallery = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error uploading file', error: err });
    }

    try {
      const { title, description } = req.body;
      const imageUrl = `C:/Users/Vjollca/desktop/Ticket-Reservation/frontend/public/Uploads/${req.file.filename}`;

      const newGalleryItem = await prisma.gallery.create({
        data: {
          title,
          description,
          imageUrl,
          publishedAt: new Date()
        }
      });

      res.status(201).json(newGalleryItem);
    } catch (error) {
      console.error('Error adding gallery item:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
};

// Get all gallery items
const getGalleryItems = async (req, res) => {
  try {
    const galleryItems = await prisma.gallery.findMany();
    res.status(200).json(galleryItems);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a gallery item by ID
const getGalleryById = async (req, res) => {
  try {
    const { id } = req.params;
    const galleryItem = await prisma.gallery.findUnique({
      where: { id: parseInt(id) }
    });

    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    res.status(200).json(galleryItem);
  } catch (error) {
    console.error('Error fetching gallery item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a gallery item
const updateGallery = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error uploading file', error: err });
    }

    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const imageUrl = req.file ? `C:/Users/Vjollca/desktop/Ticket-Reservation/frontend/public/Uploads/${req.file.filename}` : undefined;

      const updateData = {
        title,
        description,
        updatedAt: new Date()
      };

      if (imageUrl) {
        updateData.imageUrl = imageUrl;
      }

      const updatedGalleryItem = await prisma.gallery.update({
        where: { id: parseInt(id) },
        data: updateData
      });

      res.status(200).json(updatedGalleryItem);
    } catch (error) {
      console.error('Error updating gallery item:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
};

// Delete a gallery item
const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.gallery.delete({
      where: { id: parseInt(id) }
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getGalleryItems,
  createGallery,
  getGalleryById,
  updateGallery,
  deleteGallery
};
