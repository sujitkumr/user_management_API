const jwt = require('jsonwebtoken');
const SuperAdmin = require('../models/SuperAdmin');



const isSuperAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded);

    if (!decoded.isSuperAdmin) {
      return res.status(403).json({ message: 'Forbidden: Not a Super Admin' });
    }

    req.user = decoded; // Attach user info to request
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = isSuperAdmin;
