module.exports = function(connection) {
  'use strict'
  // CRUD
  // sql request to post a score
  const count = function countScore(clbk, score) {
    const sql =
      'INSERT INTO `score` (`id_quizz`, `pseudo`, `result`) VALUES (?,?,?)'
    const { id_quizz, pseudo, result } = score
    const query = connection.query(
      sql,
      [id_quizz, pseudo, result],
      (err, res) => {
        if (err) return clbk(err, null)
        return clbk(null, res)
      }
    )
    console.log('last db query =>', query.sql)
  }
  // sql request to get the all scores of one quizz
  const getScore = function getScorebyQuizz(clbk, id) {
    const sql = 'SELECT * FROM `score` WHERE `id_quizz`=?'
    const query = connection.query(sql, [id], (err, res) => {
      if (err) return clbk(err, null)
      return clbk(null, res)
    })
    console.log('last db query =>', query.sql)
  }

  return { count, getScore }
}
