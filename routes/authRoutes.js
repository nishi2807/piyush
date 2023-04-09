const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController');
const passport = require('passport');

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
router.get('/logout', authController.logout_get);

module.exports = router;