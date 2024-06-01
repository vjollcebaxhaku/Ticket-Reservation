const express = require('express');
const router = express.Router();

const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
} = require('../controllers/userControllers');

// User Routes
router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/login', loginUser);

const {
    getTickets,
    createTicket,
    getTicketById,
    updateTicket,
    deleteTicket
} = require('../controllers/ticketControllers');

// Ticket Routes
router.get('/tickets', getTickets);
router.post('/tickets', createTicket);
router.get('/tickets/:id', getTicketById);
router.put('/tickets/:id', updateTicket);
router.delete('/tickets/:id', deleteTicket);

const {
    createQuestionAndAnswer,
    updateQuestionAndAnswer,
    deleteQuestionAndAnswer,
    getFaqs
} = require('../controllers/faqControllers');

// FAQ Routes
router.get('/faq', getFaqs);
router.post('/faq', createQuestionAndAnswer);
router.put('/faq/:id', updateQuestionAndAnswer);
router.delete('/faq/:id', deleteQuestionAndAnswer);

const {
    createNews,
    updateNews,
    deleteNews,
    getNews,
    getNewsById
} = require('../controllers/newsControllers');

// News Routes
router.get('/news', getNews);
router.get('/news/:id', getNewsById);
router.post('/news', createNews);
router.put('/news/:id', updateNews);
router.delete('/news/:id', deleteNews);

module.exports = router;
