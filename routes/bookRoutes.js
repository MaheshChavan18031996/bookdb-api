const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/getData', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.post('/update', bookController.updateBook);
router.post('/delete', bookController.deleteBook);

module.exports = router;
