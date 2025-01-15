const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) return res.status(401).send('Access denied.');

  try {
      const verified = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
      req.userId = verified.id; // Attach user ID to request object for further use
      next();
  } catch (error) {
      res.status(400).send('Invalid token.');
  }
};

module.exports = authMiddleware;
