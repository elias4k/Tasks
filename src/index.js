const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://localhost/mevn-database')
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err))

// Settings
app.set('port', process.env.PORT || 3000)


// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('tasks', require('./routes/tasks.js'))


// Statics Files

app.use(express.static(__dirname + '/public'))

// Server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'))
    console.log("http://localhost:3000")
})