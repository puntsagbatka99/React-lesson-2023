const express = require("express");
const Router = express.Router();
const User = require("../models/Users")

Router.get("/users", async (request, response) => {
    const result = await User.find({})
    console.log(result)
    
    response.json({ data: result })
})

Router.post("/user", async (request, response) => {
    const body = request.body;

    const newUser = new User(body)

    const result = await newUser.save();
    console.log(result);

    response.json({
        data: []
    })
})

Router.delete("/user", async (request, response)=> {
    const body = request.body;
    console.log(body);

    const result = await User.findOneAndDelete({_id: body.id});

    response.json({data: result})
})

module.exports = Router;