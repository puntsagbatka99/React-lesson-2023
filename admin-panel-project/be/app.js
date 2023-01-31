console.log("Its my APP.JS")
//Import necesarry moduls
const express = require("express");
const cors = require("cors")
const fs = require("fs")

//Configuration of moduls

const app = express();
const PORT = 8080

app.use(cors())
app.use(express.json())

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})