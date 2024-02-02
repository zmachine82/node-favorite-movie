const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Movie', MovieSchema)