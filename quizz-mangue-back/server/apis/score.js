module.exports = (function userAPI() {
  'use strict'
  const express = require('express')
  const router = express.Router()

  return function userRouter(db) {
    const scoreModel = require('./../models/scoreModel')(db.connection)

    // route to post a score
    router.post('/score', (req, res) => {
      scoreModel.count((err, result) => {
        if (err) return res.status(520).send(err)
        return res.status(200).send(result)
      }, req.body)
    })

    // route to get all scores of one quizz thanks to his id
    router.get('/score/:idQuizz', (req, res) => {
      scoreModel.getScore((err, result) => {
        if (err) return res.status(520).send(err)
        return res.status(200).send(result)
      }, req.params.idQuizz)
    })

    return router
  }
})()
