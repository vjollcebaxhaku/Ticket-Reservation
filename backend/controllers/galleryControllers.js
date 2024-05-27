const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getGalleryItems = async (req, res) => {
    try {
        const galleries = await prisma.gallery.findMany();
        res.json(galleries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getGalleryById = async (req, res) => {
    const { id } = req.params;
    try {
        const gallery = await prisma.gallery.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!gallery) {
            res.status(404).json({ error: "Gallery item not found" });
            return;
        }
        res.json(gallery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createGallery = async (req, res) => {
    const { title, description, imageUrl, publishedAt } = req.body;
    try {
        const newGallery = await prisma.gallery.create({
            data: {
                title,
                description,
                imageUrl,
                publishedAt
            }
        });
        res.status(201).json(newGallery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateGallery = async (req, res) => {
    const { id } = req.params;
    const { title, description, imageUrl, publishedAt } = req.body;
    try {
        const updatedGallery = await prisma.gallery.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title,
                description,
                imageUrl,
                publishedAt
            }
        });
        res.json(updatedGallery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteGallery = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.gallery.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.json({ message: "Gallery item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getGalleryItems, getGalleryById, createGallery, updateGallery, deleteGallery };
