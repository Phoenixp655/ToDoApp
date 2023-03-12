const {Schema, default: mongoose, Types} = require('mongoose');


const toDoSchema = Schema({
    name: {type: String, default: null},
    status: {type: Boolean, default: 0},
    tags: {type: String, default: null},
    list: {type: Types.ObjectId, ref: "List"}
}, {timestamps: true});





module.exports = mongoose.model('toDo', toDoSchema)