// const express = require("express")
// const mongoose = require("mongoose")
// require('dotenv').config()

import express, {Express, Request, Response}from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import theaterRouter from "./routes/Theaters.api"
import cors from "cors"
import moviesRouter from "./routes/Movies.api"
dotenv.config()

const app: Express = express()
const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongo:localhost:27017/test"

let name: string = "boldoo"
let phoneNumber: number = 99119911
let isMarried: boolean =false
let sheeps: Array<string> = [ 'sheep1','sheep2','sheep3']
let sheep: string[] = ['sheep1','sheep2','sheep3']
let sheepObject: {name: string; age: number} = {
    name: "sheep4",
    age: 1
}

interface Student {
    name: string,
    age: number,
    isVerified: boolean
}
// name = 12
app.use(cors())
app.use(express.json())
app.use("/theater", theaterRouter)
app.use("/movies", moviesRouter)

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>DAY-90 Express TypeScript</h1>")
})



app.listen(PORT, () => {
    mongoose.connect(MONGO_CONNECTION_STRING)
    .then(()=> console.log("DATABASE connected succesfully"))
    .catch((error) => console.log(error));
    console.log(`Server is running on http://localhost:${PORT}`)
})