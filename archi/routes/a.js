const express = require('express')
const router = express.Router()
module.exports = router
const a = require('../controller/a')
router.get('/', a)

/*
Too much boilerplate !!
const x = {
  '/': {
    get: 'code1',
    post: 'code2',
    '/app/:id': {
      get: 'code1',
      post: 'code2',
    }
  },
  '/app/:id': {
    ...
  }
}
*/