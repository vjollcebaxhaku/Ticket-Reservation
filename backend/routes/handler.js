const express = require('express');
const router = express.Router();

// Import Gallery controllers
const {
    getGalleryItems,
    createGalleryItem,
    getGalleryItemById,
    updateGalleryItem,
    deleteGalleryItem
} = require('../controllers/galleryControllers');

// Gallery Routes
router.get('/gallery', getGalleryItems);
router.get('/gallery/:id', getGalleryItemById);
router.post('/gallery', createGalleryItem);
router.put('/gallery/:id', updateGalleryItem);
router.delete('/gallery/:id', deleteGalleryItem);

// Import User controllers
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

// Import Ticket controllers
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

// Import FAQ controllers
const {
    createQuestionAndAnswer,
    updateQuestionAndAnswer,
    deleteQuestionAndAnswer,
    getFaqs
} = require('../controllers/faqControllers');

// FAQ Routes
router.get('/faq', getFaqs)
router.post('/faq', createQuestionAndAnswer);
router.put('/faq/:id', updateQuestionAndAnswer);
router.delete('/faq/:id', deleteQuestionAndAnswer);

// Import News controllers
const {
    createNews,
    updateNews,
    deleteNews,
    getNews,
    getNewsById
} = require('../controllers/newsControllers');

// News Routes
router.get('/news', getNews)
router.get('/news/:id', getNewsById)
router.post('/news', createNews);
router.put('/news/:id', updateNews);
router.delete('/news/:id', deleteNews);

module.exports = router;
