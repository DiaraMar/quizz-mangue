module.exports = function(connection) {
  'use strict'
  // CRUD
  // sql request to create a question
  const create = function createQuestion(clbk, quizz) {
    const sql =
      'INSERT INTO `quizz` ( `id_creator`, `title`, `theme`, `pin`)  VALUES (?,?,?,?)'
    const { id_creator, title, theme, pin } = quizz
    const query = connection.query(
      sql,
      [id_creator, title, theme, pin],
      (err, res) => {
        if (err) return clbk(err, null)
        return clbk(null, res)
      }
    )
    console.log('last db query =>', query.sql)
  }

  // sql request to get all quizz created
  const getAllQuizz = function getQuizz(clbk) {
    const sql = 'SELECT * FROM `quizz`'
    const query = connection.query(sql, (err, res) => {
      if (err) return clbk(err, null)
      return clbk(null, res)
    })
    console.log('last db query =>', query.sql)
  }

  // sql request to get all quizz created by one user
  const getAllUserQuizz = function getAllUserQuizz(clbk, idUser) {
    const sql = 'SELECT * FROM `quizz` WHERE id_creator = ? '
    const query = connection.query(sql, [idUser], (err, res) => {
      if (err) return clbk(err, null)
      return clbk(null, res)
    })
    console.log('last db query =>', query.sql)
  }
  // sql request to get a quizz by id
  const getQuizzByIdOrPin = function getAQuizzOrPin(clbk, id) {
    const sql = 'SELECT * FROM `quizz` WHERE id = ? OR pin = ?'
    const query = connection.query(sql, [id, id], (err, res) => {
      if (err) return clbk(err, null)
      return clbk(null, res)
    })
    console.log('last db query =>', query.sql)
  }
  // sql request to delete a quizz by id
  const deleteQuizz = function deleteQuizz(clbk, id) {
    const sql = 'DELETE FROM `quizz` WHERE id = ?'
    const query = connection.query(sql, [id], (err, res) => {
      if (err) return clbk(err, null)
      return clbk(null, res)
    })
    console.log('last db query =>', query.sql)
  }
  // function that allows to create a request thanks to parameter
  function constructQuery(newQuery) {
    let sql = ''
    let values = []
    for (const query in newQuery) {
      values.push(newQuery[query])
      sql += ` ${query} = ? ,`
    }
    return { sql, values }
  }

  // sql request to update the quizz
  const updateQuizz = function updateQuizz(clbk, newQuizz) {
    let sql = 'UPDATE `quizz` SET '
    const finalQuery = constructQuery(newQuizz.body)
    sql += finalQuery.sql
    sql = sql.slice(0, -1)
    sql += 'WHERE id = ?'
    const query = connection.query(
      sql,
      [...finalQuery.values, newQuizz.id],
      (err, res) => {
        if (err) return clbk(err, null)
        return clbk(null, res)
      }
    )
    console.log('last db query =>', query.sql)
  }
  // sql request to get a quizz by pin
  const getByPin = function getByPin(clbk, pin) {
    let sql = 'SELECT * FROM `quizz` WHERE pin = ? '
    const query = connection.query(sql, [pin], (err, res) => {
      if (err) return clbk(err, null)
      return clbk(null, res)
    })
    console.log('last db query =>', query.sql)
  }

  return {
    create,
    getAllUserQuizz,
    getQuizzByIdOrPin,
    updateQuizz,
    deleteQuizz,
    getByPin
  }
}
