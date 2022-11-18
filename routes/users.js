const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller')
const passport = require('passport');


// router.get('/',users_controller.home);
router.get('/profile',passport.checkAuthentication,users_controller.profile);
router.get('/sign-up',users_controller.signup);
router.get('/sign-in',users_controller.signin);
router.get('/sign-out',users_controller.destroySession);
router.post('/create',users_controller.create);
//Use passport as middleware to authenticate
router.post('/create-session', passport.authenticate('local',{failureRedirect:'/users/sign-in'}),users_controller.createSession);
module.exports = router;