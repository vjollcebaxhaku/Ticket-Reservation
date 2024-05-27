// controllers/newsControllers.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getNews = async (req, res) => {
    try {
        const news = await prisma.news.findMany();
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getNewsById = async (req, res) => {
    const { id } = req.params;
    try {
        const news = await prisma.news.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!news) {
            res.status(404).json({ error: "News not found" });
            return;
        }
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to create a new news item
const createNews = async (req, res) => {
    const { title, content, publishedAt } = req.body;
    try {
        const newNews = await prisma.news.create({
            data: {
                title,
                content,
                publishedAt
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
    const { title, content, publishedAt } = req.body;
    try {
        const updatedNews = await prisma.news.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title,
                content,
                publishedAt
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

module.exports = { getNews, getNewsById, createNews, updateNews, deleteNews };
