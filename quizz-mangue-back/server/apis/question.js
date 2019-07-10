module.exports = (function userAPI() {
  'use strict'
  const express = require('express')
  const router = express.Router()

  return function userRouter(db) {
    const questionModel = require('./../models/questionModel')(db.connection)

    // route to post a question
    router.post('/question', (req, res) => {
      questionModel.create((err, result) => {
        if (err) return res.status(520).send(err)
        return res.status(200).send(result)
      }, req.body)
    })
    // route to get all questions of one quizz
    router.get('/question/:idQuizz', (req, res) => {
      questionModel.getAllQuestions((err, result) => {
        if (err) return res.status(520).send(err)
        return res.status(200).send(result)
      }, req.params.idQuizz)
    })

    return router
  }
})()
