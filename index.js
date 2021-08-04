const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')


const PORT = process.env.PORT || 4000

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './build')))

// require('./controllers')(io)

//set a static folder
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}))

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`)
})