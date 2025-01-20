const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');
const isSuperAdmin = require('../middlewares/verifySuperAdmin');

// Admin login route
router.post('/login', AdminController.adminLogin);

// Protected routes for Super Admin
router.get('/users', isSuperAdmin, AdminController.getAllUsers);
router.put('/users/deactivate/:userId', isSuperAdmin, AdminController.deactivateUser);

module.exports = router;
