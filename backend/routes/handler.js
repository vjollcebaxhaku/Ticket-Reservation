const express = require('express');
const router = express.Router();

// Import Gallery controllers
const {
    getGalleryItems,
    createGallery,
    getGalleryById,
    updateGallery,
    deleteGallery
} = require('../controllers/galleryControllers');

// Gallery Routes
router.get('/gallery', getGalleryItems);
router.get('/gallery/:id', getGalleryById);
router.post('/gallery', createGallery);
router.put('/gallery/:id', updateGallery);
router.delete('/gallery/:id', deleteGallery);



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
router.get('/faq', getFaqs);
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
router.get('/news', getNews);
router.get('/news/:id', getNewsById);
router.post('/news', createNews);
router.put('/news/:id', updateNews);
router.delete('/news/:id', deleteNews);

const lineupController = require('../controllers/lineupController');
const concertController = require('../controllers/concertController');

router.post('/concert', concertController.createConcert);
router.get('/concert/:id', concertController.getConcert);
router.get('/concert', concertController.getAllConcert);
router.put('/concert/:id', concertController.updateConcert);
router.delete('/concert/:id', concertController.deleteConcert);

// Lineup routes
router.post('/lineup', lineupController.createLineup);
router.get('/lineup', lineupController.getAllLineup);
router.get('/lineup/:id', lineupController.getLineup);
router.put('/lineup/:id', lineupController.updateLineup);
router.delete('/lineup/:id', lineupController.deleteLineup);

module.exports = router;
