const express = require('express')
const router = express.Router()

const gethandler = require('../handlers/get')
const postHandler = require('../handlers/post')

router.get('/', gethandler)
router.post('/', postHandler)

module.exports = router
