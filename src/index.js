const express = require('express')
const morgan = require('morgan')
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)


// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use(require('./routes/tasks.js'))
// Statics Files

app.use(express.static(__dirname + '/public'))

// Server
app.listen(app.get('port'), ()=>{
    console.log("Server on port ", app.get('port'))
    console.log("http://localhost:3000")
})