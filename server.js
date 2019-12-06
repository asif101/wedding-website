const express = require('express')
const app = require('express')()
const http = require('http').Server(app)

const PORT = process.env.PORT || 3001


app.use(express.static('build'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

http.listen(PORT, function () {
    console.log('\x1b[36m%s\x1b[0m', 'listening on port ' + PORT)
})