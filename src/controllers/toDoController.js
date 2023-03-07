const express = require('express');
const asyncHandler = require('express-async-handler');
const toDoModel = require('../models/toDoSchema');


//@ todo router
//@ get all todo
//@ GET
const getAllToDo = asyncHandler(async (req, res) => {

})


//@ todo router
//@ POST
//@ create todo
const createToDo = asyncHandler(async (req, res) => {
    const create = await toDoModel.create({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    })
    const data = await create.save();
    res.status(200).json({data: {name: data.name, description: data.description, id: data._id}})
})


















module.exports = {
    createToDo,
}