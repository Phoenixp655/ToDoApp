const express = require('express');
const asyncHandler = require('express-async-handler');
const toDoModel = require('../models/toDoSchema');


//@ todo router
//@ get all todo
//@ GET
const getAllToDo = asyncHandler(async (req, res) => {
    toDoModel.find({},'name description status').then(data => res.status(200).json({data: data}))
})


//@ todo router
//@ POST
//@ create todo
const createToDo = asyncHandler(async (req, res) => {
    const reqform = req.body;
    const create = await toDoModel.create({
        name: reqform.name||'#',
        description: reqform.description,
        status: reqform.status,
        dueDate: reqform.dueDate || new Date()
    })
    const data = await create.save();
    res.status(200).json({data: {name: data.name, description: data.description, dueDate: data.dueDate, id: data._id}})
})


















module.exports = {
    createToDo,
    getAllToDo
}