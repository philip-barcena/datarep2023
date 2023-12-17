const mongoose = require('mongoose')

const Schema = mongoose.Schema

const assignmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    },
    whichModule: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Assignment', assignmentSchema)