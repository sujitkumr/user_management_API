const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Route for user registration
router.post('/register', UserController.registerUser);

// Route for user login
router.post('/login', UserController.loginUser);

// Route to update user details
router.put('/update', UserController.updateUserDetails);

// Route to deactivate user account
router.put('/deactivate', UserController.deactivateAccount);


router.get('/details/:userId', UserController.getUserDetails);

module.exports = router;
