// controllers/faqControllers.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createQuestionAndAnswer = async (req, res) => {
    const { question, answer } = req.body;
    try {
        const newFaq = await prisma.faq.create({
            data: {
                question,
                answer
            }
        });
        res.status(201).json(newFaq);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateQuestionAndAnswer = async (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    try {
        const updatedFaq = await prisma.faq.update({
            where: {
                id: parseInt(id)
            },
            data: {
                question,
                answer
            }
        });
        res.json(updatedFaq);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteQuestionAndAnswer = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.faq.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.json({ message: "Question and answer deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createQuestionAndAnswer, updateQuestionAndAnswer, deleteQuestionAndAnswer };
