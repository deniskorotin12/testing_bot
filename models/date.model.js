const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dateSchema = new Schema({
    getDate: {
        type: Number,
        required: true
    },
    current_goose: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: true,
        default: new Date().getFullYear()
    }
})

mongoose.model('get_date', dateSchema)