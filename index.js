require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/reddit', (req, res) => {
    res.send('bananaFish')
})

app.get('/chainsaw', (req, res) => {
    res.send('<h1>Please watch legend of the galactic heroes</h1>')
})

app.get('/coffee', (req, res) => {
    res.send('coffee is the elixr of life')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`After changes new port is ${process.env.PORT}`)
})