const {Schema, default: mongoose} = require('mongoose');


const toDoSchema = Schema({
    name: String,
    description: String,
    status: {type: Boolean, default: 0}
}, {timestamps: true});





module.exports = mongoose.model('toDo', toDoSchema)