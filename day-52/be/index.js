
const express = require("express")
const cors = require("cors")
const fs = require("fs");
const { type } = require("os");
const app = express()


const PORT = 8080;

app.use(cors());
app.use(express.json())

app.get("/users", (request, response) => {
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

app.post("/users", (request, response) => {
    const body = request.body;
    console.log(body)

    const newUser = {
        id: Date.now().toString(),
        username: body.username,
        age: body.age
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

app.delete("/users", (request, response) => {
    const body = request.body;
    fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: []
            })
        }
        const readObject = JSON.parse(readData)

        const filteredObject = readObject.filter(o => o.id !== body.userId)

        fs.writeFile("./data/users.json", JSON.stringify(filteredObject), (writeError) => {
            if (writeError) {
                response.json({
                    status: "ERROR during file write",
                    data: []
                })
            }
            response.json({
                status: "success",
                data: filteredObject
            })
        })
    })

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})