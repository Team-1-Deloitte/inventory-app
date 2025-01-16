const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: '1h' });
  return token;
};

module.exports = generateToken;