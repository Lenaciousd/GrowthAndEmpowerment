const express = require('express')
const app = express()
const port = 3000

app.use(express.static('client/dist'))

app.get('/', (req, res) => {
  res.send('Goodbye World!')
})

app.listen(port, () => {
  console.log(`Growth and Empowerment listening at http://localhost:${port}`)
})