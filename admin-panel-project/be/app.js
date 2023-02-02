console.log("Its my APP.JS")
//Import necesarry moduls
const express = require("express");
const cors = require("cors")
const fs = require("fs");


//Configuration of moduls

const app = express();
const PORT = 8080

app.use(cors())
app.use(express.json())

app.get("/users/new-users", (request, response) => {
    fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: []
            })
        }
        const objectData = JSON.parse(readData)
        response.json({
            status: "success",
            data: objectData,
        })
    })
})

app.post("/users/new-users", (request, response) => {
    console.log(request.body)
    const newUser = {
        id: Date.now().toString(),
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        number: request.body.number,
        email: request.body.email,
        password: request.body.password,
    }
    fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: []
            })
        }

        const dataObject = JSON.parse(readData)
        console.log(dataObject)
        dataObject.push(newUser)
        console.log(dataObject)

        fs.writeFile("./data/users.json", JSON.stringify(dataObject), (writeError) => {
            if (writeError) {
                response.json({
                    status: "ERROR during file write",
                    data: []
                })
            }
            response.json({
                status: "success",
                data: dataObject
            })
        })
    })
})

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})