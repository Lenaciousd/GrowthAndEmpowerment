const mysql = require('mysql');
const {password} = require('./db.config.js')

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : password,
  database : 'growthAndEmpowerment'
})

connection.connect(
  (error) => {
  if (error) {
    console.log('Error connecting to db: ', error)
  } else {
    console.log('connected to mysql database!')
  }
}
)

const getAllReviews = (req, callback) => {
  connection.query('SELECT * FROM reviews', (error, data) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, data)
    }
  })
}

const postReview = (req, callback) => {
  connection.query(`INSERT INTO reviews (description, category, age, gender) VALUES (?, ?, ?, ?)`,[req.body.description, req.body.category, req.body.age, req.body.gender], (error, data) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, data)
    }
  })
}

const updateReview = (id, review, callback) => {
  connection.query(`UPDATE reviews SET description = ? WHERE id = ?`, [review.description, id], (error, data) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, data)
    }
  })
}

const deleteReview = (id, callback) => {
  connection.query(`DELETE FROM reviews WHERE id = ?`, [id], (error, data) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, data)
    }
  })
}

module.exports = {
  getAllReviews: getAllReviews,
  postReview: postReview,
  updateReview: updateReview,
  deleteReview: deleteReview
}