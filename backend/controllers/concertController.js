// concertController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createConcert = async (req, res) => {
  const { name, year, location } = req.body;
  try {
    const concert = await prisma.concert.create({
      data: {
        name,
        year,
        location,
      },
    });
    res.status(201).json(concert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getConcert = async (req, res) => {
  const { id } = req.params;
  try {
    const concert = await prisma.concert.findUnique({
      where: { id: parseInt(id) },
    });
    if (!concert) {
      return res.status(404).json({ error: 'Concert not found' });
    }
    res.status(200).json(concert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateConcert = async (req, res) => {
  const { id } = req.params;
  const { name, year, location } = req.body;
  try {
    const concert = await prisma.concert.update({
      where: { id: parseInt(id) },
      data: {
        name,
        year,
        location,
      },
    });
    res.status(200).json(concert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteConcert = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.concert.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createConcert,
  getConcert,
  updateConcert,
  deleteConcert,
};
