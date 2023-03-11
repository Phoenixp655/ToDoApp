const {Schema, default: mongoose} = require('mongoose');


const toDoSchema = Schema({
    name: {type: String, default: null},
    description: {type: String, default: null},
    status: {type: Boolean, default: 0},
    dueDate: Date
}, {timestamps: true});





module.exports = mongoose.model('toDo', toDoSchema)