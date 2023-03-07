const {Schema, default: mongoose} = require('mongoose');


const toDoTaskSchema = Schema({
    name: String,
    toDoId: {type: Schema.Types.ObjectId,ref: 'toDo'}
}, {timestamps: true})











module.exports = mongoose.model('toDoTask', toDoTaskSchema)