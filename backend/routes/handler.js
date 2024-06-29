const express = require('express');
const router = express.Router();

const {
    getGalleryItems,
    createGallery,
    getGalleryById,
    updateGallery,
    deleteGallery
} = require('../controllers/galleryControllers');

router.get('/gallery', getGalleryItems);
router.get('/gallery/:id', getGalleryById);
router.post('/gallery', createGallery);
router.put('/gallery/:id', updateGallery);
router.delete('/gallery/:id', deleteGallery);

const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
} = require('../controllers/userControllers');

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
    deleteTicket,
    buyTicket,
    getTicketsForUser,
    getAllSoldTickets
} = require('../controllers/ticketController');

router.get('/tickets', getTickets);
router.get('/tickets/:id', getTicketById);
router.post('/tickets', createTicket);
router.put('/tickets/:id', updateTicket);
router.delete('/tickets/:id', deleteTicket);
router.post('/buy-ticket', buyTicket);
router.get('/tickets/user/:userId', getTicketsForUser);
router.get('/tickets-data/sold', getAllSoldTickets);

module.exports = router;


const {
    createQuestionAndAnswer,
    updateQuestionAndAnswer,
    deleteQuestionAndAnswer,
    getFaqs,
    getFaq
} = require('../controllers/faqControllers');

router.get('/faq', getFaqs);
router.get('/faq/:id', getFaq);
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

router.get('/news', getNews);
router.get('/news/:id', getNewsById);
router.post('/news', createNews);
router.put('/news/:id', updateNews);
router.delete('/news/:id', deleteNews);

const lineupController = require('../controllers/lineupController');
const concertController = require('../controllers/concertController');

router.post('/concert', concertController.createConcert);
router.get('/concert/:id', concertController.getConcert);
router.put('/concert/:id', concertController.updateConcert);
router.delete('/concert/:id', concertController.deleteConcert);

router.post('/lineup', lineupController.createLineup);
router.get('/lineup', lineupController.getAllLineup);
router.get('/lineup/:id', lineupController.getLineup);
router.put('/lineup/:id', lineupController.updateLineup);
router.delete('/lineup/:id', lineupController.deleteLineup);

module.exports = router;
