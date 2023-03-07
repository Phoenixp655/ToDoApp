const {Schema, default: mongoose} = require('mongoose');


const toDoSchema = Schema({
    name: String
}, {timestamps: true});





module.exports = mongoose.model('toDo', toDoSchema)