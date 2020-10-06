const express = require('express')
const NoteController = require('../controllers/NoteController')

const routes = express.Router()

routes.get('/ping', NoteController.ping)
routes.get('/notes', NoteController.list)
routes.get('/note/:id', NoteController.one)
routes.post('/note', NoteController.new)
routes.put('/note/:id', NoteController.edit)
routes.delete('/note/:id', NoteController.delete)

module.exports = routes