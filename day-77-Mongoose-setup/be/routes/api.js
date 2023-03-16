const express = require("express");
const Router = express.Router();
const User = require("../models/Users")

Router.get("/user", async (request, response) =>{
    const userId = request.query.id;
    console.log(userId)
    
    const user = await User.findOne({_id: userId});

    response.json({
        data: user
    })
})

Router.get("/userbyemail", async (request, response) => {
    const userEmail = request.query.email;
    
    const foundUser = await User.find(
        {email: userEmail}, "_id name email", {
            sort: {lastLogin: -1}}
    ).exec();

    const user = await User.findOne({email: userEmail})

    response.json({
        data: foundUser
    })
})

Router.get("/userGetEmail", async (request, response) => {
    const userEmail = request.query.email;

    const foundUser = await User.findByUserEmail(userEmail);

    response.json({
        data: foundUser
    })
})

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

Router.put("/updateUser", async (request, response) => {
    const result = await User.updateOne(
        {email: "puntsagbatka99@gmail.com"},
        {$set: {lastLogin: Date.now()}}
    )
    
    response.json({
        data: result
    })
})


module.exports = Router;