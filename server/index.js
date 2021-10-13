const express = require('express')
const app = express()
const port = 3002
const db = require('../database/index.js')
const bodyParser = require('body-parser')

app.use(express.static('client/dist'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Goodbye World!')
})

app.get('/reviews', (req, res) => {
  db.getAllReviews(req, (error, data) => {
    if (error) {
      console.log('get request failed ', error)
    } else {
      res.send(data)
    }
  })
})

app.post('/reviews', (req, res) => {
  db.postReview(req, (error, data) => {
    if (error) {
      console.log('post request failed ', error)
    } else {
      console.log(data)
      res.send(data)
    }
  })
})

app.delete('/reviews', (req, res) => {
  db.deleteReview(req, (error, data) => {
    if (error) {
      console.log('delete request failed ', error)
    } else {
      res.send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Growth and Empowerment listening at http://localhost:${port}`)
})