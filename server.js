const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path') // require the 'path' module

// const home = require('./routes/home')

const app = express()

// app.use(express.static(__dirname + '/public/index.html'))
app.use(express.json())
app.use(cookieParser())

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')))

// Routes
// app.use('/home', home)

app.get('/', async (req, res) => {
  // res.render(__dirname + './public')
  // const filePath = path.join(__dirname, 'public', 'index.html')
  // res.sendFile(filePath)
  // res.sendFile(path.join(__dirname, 'public', 'index.html'))
  res.send('hello world')
})

function filterBoolean(str) {
  return str === 'true'
}

// connection
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Listening to port ${port}`))
