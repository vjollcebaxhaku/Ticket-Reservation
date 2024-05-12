// routes/userRoutes.js
const express = require('express');
const router = express.Router();

const { getUsers, createUser, getUserById, updateUser, deleteUser, loginUser } = require('../controllers/userControllers');

// GET all users
router.get('/users', getUsers);

// POST create a new user
router.post('/users', createUser);

// GET a single user by ID
router.get('/users/:id', getUserById);

// PUT update a user by ID
router.put('/users/:id', updateUser);

// DELETE a user by ID
router.delete('/users/:id', deleteUser);

router.post('/login', loginUser);



const { getTickets, createTicket, getTicketById, updateTicket, deleteTicket } = require('../controllers/ticketControllers');

// GET all tickets
router.get('/tickets', getTickets);

// POST create a new ticket
router.post('/tickets', createTicket);

// GET a single ticket by ID
router.get('/tickets/:id', getTicketById);

// PUT update a ticket by ID
router.put('/tickets/:id', updateTicket);

// DELETE a ticket by ID
router.delete('/tickets/:id', deleteTicket);


module.exports = router;
