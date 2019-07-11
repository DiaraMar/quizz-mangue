module.exports = function(connection) {
  'use strict'
  const auth = require('./../utils/auth')
  const table = 'user'
  // CRUD
  // sql request to create one user
  const create = function createUser(clbk, user) {
    const sql = `INSERT INTO ${table} (email, password, pseudo, role) VALUES (?, ?, ?, 'user')`
    const { email, password, pseudo } = user
    const query = connection.query(
      sql,
      [email, password, pseudo],
      (err, res) => {
        if (err) return clbk(err, null)
        return clbk(null, res)
      }
    )
    console.log('last db query =>', query.sql)
  }

  // sql request to get one user by id
  const get = function getUser(clbk, id) {
    const sql = `SELECT * FROM ${table} WHERE id = ?`
    const q = connection.query(sql, [id], (err, user) => {
      if (err) return clbk(err, null)
      return clbk(null, user)
    })
    console.log(q.sql)
  }

  const getByMail = function getUserByMail(clbk, email) {
    const sql = `SELECT * FROM ${table} WHERE email = ?`
    const q = connection.query(sql, [email], (err, user) => {
      if (err) return clbk(err, null)
      return clbk(null, user[0])
    })
    console.log(q.sql)
  }

  // sql request to get all users
  const getAll = function getUsers(clbk) {
    const sql = `SELECT * FROM ${table}`

    const q = connection.query(sql, (err, users) => {
      if (err) return clbk(err, null)
      return clbk(null, users)
    })
    console.log(q.sql)
  }

  // sql request to remove one user
  const remove = function removeUser(clbk, id) {
    const sql = `DELETE FROM ${table} WHERE id = ?`
    const query = connection.query(sql, [id], (err, res) => {
      if (err) return clbk(err, null)
      return clbk(null, res)
    })
    console.log('last db query =>', query.sql)
  }

  return { create, get, getAll, remove, getByMail }
}
