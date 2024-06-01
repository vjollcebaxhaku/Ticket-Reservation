const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getFestivals = async (req, res) => {
    try {
        const festivals = await prisma.festival.findMany();
        res.json(festivals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createFestival = async (req, res) => {
    const { name, year, location } = req.body;
    try {
        const newFestival = await prisma.festival.create({
            data: {
                name,
                year,
                location
            }
        });
        res.status(201).json(newFestival);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateFestival = async (req, res) => {
    const { id } = req.params;
    const { name, year, location } = req.body;
    try {
        const updatedFestival = await prisma.festival.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                year,
                location
            }
        });
        res.json(updatedFestival);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteFestival = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.festival.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.json({ message: "Festival deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getFestivals, createFestival, updateFestival, deleteFestival };
