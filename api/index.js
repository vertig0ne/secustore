const express = require('express')
const bodyParser = require('body-parser')

const api = express()

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))

// Routes here

api.use((e, req, res, next) => {
  const status = e.response ? e.response.status : 500
  res.status(status).json({ message: e.message })
  next(e)
})

module.exports = api
