const express = require('express');
const asyncHandler = require('express-async-handler');
const toDoModel = require('../models/toDoSchema');
const toDoTaskModel = require('../models/toDoTaskSchema')


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
        name: req.body.name
    })
    const data = await create.save();
    res.status(200).json({data: data})
})


















module.exports = {
    createToDo
}