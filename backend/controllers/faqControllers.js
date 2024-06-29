// controllers/faqControllers.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getFaqs = async (req, res) => {
    try {
        const faqs = await prisma.fAQ.findMany();
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getFaq = async (req, res) => {
    const { id } = req.params;
    try {
        const faq = await prisma.fAQ.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!faq) {
            return res.status(404).json({ error: "FAQ not found" });
        }
        res.json(faq);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createQuestionAndAnswer = async (req, res) => {
    const { question, answer } = req.body;
    try {
        const newFaq = await prisma.fAQ.create({
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
        const updatedFaq = await prisma.fAQ.update({
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
        await prisma.fAQ.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.json({ message: "Question and answer deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getFaq, getFaqs, createQuestionAndAnswer, updateQuestionAndAnswer, deleteQuestionAndAnswer };
