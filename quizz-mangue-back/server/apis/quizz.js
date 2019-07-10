module.exports = (function quizzAPI() {
  'use strict'
  const express = require('express')
  const router = express.Router()

  return function quizzRouter(db) {
    const quizzModel = require('./../models/quizzModel')(db.connection)

    function makeid(length) {
      var result = ''
      var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      var charactersLength = characters.length
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        )
      }
      return result
    }
    // route to post a quizz
    router.post('/quizz', (req, res) => {
      req.body.pin = makeid(4)
      quizzModel.create((err, result) => {
        if (err) return res.status(520).send(err)
        return res.status(200).send(result)
      }, req.body)
    })

    // // route to get quizz by pin
    // router.post('/quizz/:pin', (req, res) => {
    //   quizzModel.getByPin((err, result) => {
    //     if (err) return res.status(520).send(err)
    //     return res.status(200).send(result)
    //   }, req.params.pin)
    // })

    // route to get all quizz
    router.get('/quizz', (req, res) => {
      quizzModel.getAllQuizz((err, result) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(result)
      })
    })
    // route to get all quizz
    router.get('/user-quizz/:idUser', (req, res) => {
      quizzModel.getAllUserQuizz((err, result) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(result)
      }, req.params.idUser)
    })

    // route to get a quizz by id or pin
    router.get('/quizz/:id', (req, res) => {
      quizzModel.getQuizzByIdOrPin((err, result) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(result)
      }, req.params.id)
    })
    // route to patch a quizz by id
    router.patch('/quizz/:id', (req, res) => {
      quizzModel.updateQuizz(
        (err, result) => {
          if (err) return res.status(500).send(err)
          return res.status(200).send(result)
        },
        { body: req.body, id: req.params.id }
      )
    })

    return router
  }
})()
