const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
//GET:http://localhost:5000/
app.get('/', (req, res) => {
        res.send("Home Page")
})
//GET:http://localhost:5000/hello
app.get('/hello', (req, res, next) => {
        res.send({ "message": "Hello" })
})
//GET:http://localhost:5000/user
app.post('/user', (req, res) => {
        res.send("Got a POST request at /user")
})
//GET:http://localhost:5000/user
app.put('/user', (req, res) => {
        res.send("message", "Got a PUT request at /user")
})

//Delete:http://localhost:5000/user
app.delete('/user', (req, res) => {
        res.send("message", "Got a PUT request at /user")
})
server.listen(5000)
