const service = require(`../services/${process.env.DATABASE}`)

module.exports = {
    ping(req, res) {
        return res.json({pong:true})
    },

    async list(req, res) {
        let json = {error:'', result:[]};

        const notes = await service.getAll()

        for(let i in notes) {
            json.result.push({
                id:notes[i].id,
                title:notes[i].title
            })
        }

        res.json(json)
    },

    async one(req, res) {
        let json = {error:'', result:{}}; 

        let id = req.params.id 
        let note = await service.getOne(id) 
        if(note) {
            json.result = note
        }

        res.json(json)
    },

    async new(req, res) {
        let json = {error:'', result:{}}; 

        let title = req.body.title 
        let body = req.body.body 

        if(title && body) {
            let noteId = await service.create(title, body)

            json.result = {
                id:noteId,
                title,
                body
            }
        } else {
            json.error = 'Ocorreu um erro, Preencha todos os campos e tente novamente'
        }

        res.json(json)
    },

    async edit(req, res) {
        let json = {error:'', result:{}}; 
        let id = req.params.id
        let title = req.body.title 
        let body = req.body.body 

        if(id && title && body) {
            await service.update(id, title, body)

            json.result = {
                id,
                title,
                body
            }
        } else {
            json.error = 'Ocorreu um erro, Preencha todos os campos e tente novamente'
        }

        res.json(json)
    },

    async delete(req, res) {
        let json = {error:'', result:{}}; 
        let id = req.params.id 
        
        await service.delete(id)
        
        res.json(json)
    },
}