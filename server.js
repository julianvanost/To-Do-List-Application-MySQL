// SERVER BOILERPLATE
const express = require('express')
const { join } = require('path')
const fs = require('fs')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(join(__dirname, 'public')))

app.use(require('./routes'))

let PORT = 3000
app.listen(PORT)
console.log(`Server is listening on port: ${PORT}`)