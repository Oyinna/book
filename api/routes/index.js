const express = require('express');

const router = express.Router();

const AuthController = require('../controllers/AuthController');

// auth routes
router.post('/signup', AuthController.signup);
router.post('/login');

// books route
// router.post('/books/{userId}');

// feedback route
router.post('/feedback/{userId}');

module.exports = router;
