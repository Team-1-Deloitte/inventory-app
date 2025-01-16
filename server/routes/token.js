const jwt = require('jsonwebtoken');

const generateToken = () => {
  const userId = Math.floor(Math.random() * 1000); // Generate a random user ID
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: '1h' });
  return token;
};

module.exports = generateToken;