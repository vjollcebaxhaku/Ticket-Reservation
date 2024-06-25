// lineupController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createLineup = async (req, res) => {
  const { artistName, genre, description, imageUrl, concertID } = req.body;
  try {
    const lineup = await prisma.lineup.create({
      data: {
        artistName,
        genre,
        description,
        imageUrl,
        concertID: parseInt(concertID),
      },
    });
    res.status(201).json(lineup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getLineup = async (req, res) => {
  const { id } = req.params;
  try {
    const lineup = await prisma.lineup.findUnique({
      where: { id: parseInt(id) },
    });
    if (!lineup) {
      return res.status(404).json({ error: 'Lineup not found' });
    }
    res.status(200).json(lineup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateLineup = async (req, res) => {
  const { id } = req.params;
  const { artistName, genre, description, imageUrl, concertID } = req.body;
  try {
    const lineup = await prisma.lineup.update({
      where: { id: parseInt(id) },
      data: {
        artistName,
        genre,
        description,
        imageUrl,
        concertID,
      },
    });
    res.status(200).json(lineup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteLineup = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.lineup.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllLineup = async (req, res) => {
  try {
      const lineup = await prisma.lineup.findMany();
      res.json(lineup);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLineup,
  getAllLineup,
  getLineup,
  updateLineup,
  deleteLineup,
};
