require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const { urlencoded } = require('body-parser')

const server = express()
server.use(cors())
server.use(urlencoded({extended:false}))
server.use('/api', routes)

server.listen(process.env.Port || 3001, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.Port}`)
})