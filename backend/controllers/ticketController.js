const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTickets = async (req, res) => {
    try {
        const tickets = await prisma.ticket.findMany();
        res.json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch tickets', details: error.message });
    }
};

const createTicket = async (req, res) => {
    const { name, price, type } = req.body;
    try {
        const ticket = await prisma.ticket.create({
            data: { name, price, type },
        });
        res.status(201).json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create ticket', details: error.message });
    }
};

const getTicketById = async (req, res) => {
    const { id } = req.params;
    try {
        const ticket = await prisma.ticket.findUnique({ where: { id: parseInt(id) } });
        if (ticket) {
            res.json(ticket);
        } else {
            res.status(404).json({ error: 'Ticket not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch ticket', details: error.message });
    }
};

const updateTicket = async (req, res) => {
    const { id } = req.params;
    const { name, price, type } = req.body;
    try {
        const ticket = await prisma.ticket.update({
            where: { id: parseInt(id) },
            data: { name, price, type },
        });
        res.json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update ticket', details: error.message });
    }
};

const deleteTicket = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.ticket.delete({ where: { id: parseInt(id) } });
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete ticket', details: error.message });
    }
};

const buyTicket = async (req, res) => {
    const { userId, ticketId, quantity } = req.body;
    try {
        // Check if the ticket exists
        const ticket = await prisma.ticket.findUnique({ where: { id: parseInt(ticketId) } });
        if (!ticket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        
        // Create user ticket entry
        const userTicket = await prisma.userTicket.create({
            data: {
                userId: parseInt(userId),
                ticketId: parseInt(ticketId),
                quantity: parseInt(quantity),
            },
            include: { ticket: true }, // Include the ticket details in response
        });

        res.status(201).json(userTicket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to buy ticket', details: error.message });
    }
};
const getTicketsForUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const userTickets = await prisma.userTicket.findMany({
            where: { userId: parseInt(userId) },
            include: { ticket: true },
        });
        if (userTickets.length > 0) {
            res.json(userTickets.map(ut => ut.ticket));
        } else {
            res.status(404).json({ error: 'No tickets found for this user' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch tickets for user', details: error.message });
    }
};

const getAllSoldTickets = async (req, res) => {
    try {
        const soldTickets = await prisma.userTicket.findMany({
            include: { ticket: true }, // Include the associated ticket details
        });

        res.json(soldTickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch sold tickets', details: error.message });
    }
};

module.exports = {
    getTickets,
    createTicket,
    getTicketById,
    updateTicket,
    deleteTicket,
    buyTicket,
    getTicketsForUser,
    getAllSoldTickets
};