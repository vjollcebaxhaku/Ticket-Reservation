// controllers/newsControllers.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller to create a new news item
const createNews = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newNews = await prisma.news.create({
            data: {
                title,
                content
            }
        });
        res.status(201).json(newNews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update an existing news item
const updateNews = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const updatedNews = await prisma.news.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title,
                content
            }
        });
        res.json(updatedNews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a news item
const deleteNews = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.news.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.json({ message: "News deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createNews, updateNews, deleteNews };
