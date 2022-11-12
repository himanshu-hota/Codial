const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller')

// router.get('/',users_controller.home);
router.get('/sign-up',users_controller.signup);
router.get('/sign-in',users_controller.signin);
router.post('/create',users_controller.create);
module.exports = router;