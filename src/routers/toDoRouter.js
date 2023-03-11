const router= require('express').Router();
const {createToDo, getAllToDo, default: toDoController} = require("../controllers/toDoController")





router.route('/')
.get((req, res) => {
    getAllToDo(req, res)
})
.post((req, res) => {
    createToDo(req, res)
})























module.exports = router;