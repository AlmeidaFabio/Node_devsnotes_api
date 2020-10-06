require('../database/mongodb')
const Note = require('../models/Note')

module.exports = {
    async getAll() {
        const notes = await Note.find()

        return notes
    },

    async getOne(id) {
        const note = await Note.findById(id)

        return note
    },

    async create(title, body) {
        const note = await Note.create({
            title,
            body
        })

        note.save()

        return note
    },

    async update(id, title, body) {
        const note = await Note.findByIdAndUpdate(id, {
            title,
            body
        }, {new:true, useFindAndModify:false})

        return note
    },

    async delete(id) {
        await Note.findByIdAndDelete(id)
    }
}