const express = require('express')
const router = express.Router()
const { Item } = require('../models')
const jwt = require('jsonwebtoken')
const generateToken = require('./token')

// Implement authentication middleware
const authenticate = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  console.log('Received token:', token)
  if (!token) {
    return res.status(401).send({ error: 'Please authenticate.' })
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    console.log('Decoded token:', decoded)
    req.user = decoded
    next()
  } catch (error) {
    console.error('Error verifying token:', error)
    return res.status(401).send({ error: 'Invalid token.' })
  }
}

// Define a sample user ID
const userID = 1

// Generate a token
router.get('/test', (req, res) => {
  const token = generateToken(userID);
  console.log('Generated token:', token);
  res.send({ token: token, message: 'This is the test endpoint!' });
})

// Protect the /items endpoint with authentication
router.get('/items', authenticate, async (req, res, next) => {
  try {
    const items = await Item.findAll()
    res.send(items)
  } catch (error) {
    next(error)
  }
})

module.exports = router;