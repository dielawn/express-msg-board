const express = require('express');
const router = express.Router();
console.log(__dirname);
const messageController = require('../controllers/messageController');


router.get('/', messageController.index);
router.get('/new', messageController.new_message_get);
router.post('/new', messageController.new_message_post);

module.exports = router;
