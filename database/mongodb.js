const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`Conectado ao banco de dados MongoDb: ${process.env.MONGODB_NAME}`)
});

module.exports = mongoose