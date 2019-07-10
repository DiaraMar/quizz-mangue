module.exports = function(connection) {
  'use strict'
  // CRUD
  // sql request to create a question
  const create = function createQuestion(clbk, question) {
    const sql =
      'INSERT INTO `question` (`title`, `id_quizz`, `choices`, `answer`, `time_limit`) VALUES (?,?,?,?,?)'
    const { title, id_quizz, choices, answer, time_limit } = question
    const query = connection.query(
      sql,
      [title, id_quizz, choices, answer, time_limit],
      (err, res) => {
        if (err) return clbk(err, null)
        return clbk(null, res)
      }
    )
    console.log('last db query =>', query.sql)
  }

  // sql request to get all questions of one quizz thanks to his id
  const getAllQuestions = function getAllQuestions(clbk, idQuizz) {
    const sql = 'SELECT * FROM `question` WHERE id_quizz = ?'
    const query = connection.query(sql, [idQuizz], (err, res) => {
      if (err) return clbk(err, null)
      return clbk(null, res)
    })
    console.log('last db query =>', query.sql)
  }

  return { create, getAllQuestions }
}
