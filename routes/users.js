const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller')

router.get('/',users_controller.home);
router.get('/profile',users_controller.profile);
router.get('/feed',users_controller.feed);
router.get('/posts',users_controller.posts);

module.exports = router;