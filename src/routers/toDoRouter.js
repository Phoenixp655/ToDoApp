const router= require('express').Router();
const {createToDo,default: toDoController} = require("../controllers/toDoController")





router.route('/')
.get((req, res) => {

})
.post((req, res) => {
    createToDo(req, res)
})
.put((req, res) => {

})
.delete((req, res) => {

})























module.exports = router;