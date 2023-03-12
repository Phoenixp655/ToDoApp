const express = require('express');
const asyncHandler = require('express-async-handler');
const toDoModel = require('../models/toDoSchema');

//@ todo router
//@ get all todo
//@ GET
const getAllToDo = asyncHandler(async (req, res) => {
    toDoModel
        .find({}, 'name description status')
        .then((data) => res.status(200).json({ data: data }));
});

//@ todo router
//@ POST
//@ create todo
const createToDo = asyncHandler(async (req, res) => {
    const reqBody = req.body;
    const create = await toDoModel.create({
        name: reqBody.name || '#',
        status: reqBody.status,
        tags: reqBody.tag
    });
    const data = await create.save();
    res.status(200).json([{ _id: data._id, name: data.name }]);
});

module.exports = {
    createToDo,
    getAllToDo,
};
