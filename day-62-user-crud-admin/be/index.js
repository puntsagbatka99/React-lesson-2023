console.log("day-62 User Login CRUD")

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { response } = require("express");

const app = express();
const PORT = 8080;

app.use(cors())
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

app.post("/register", (request, response) => {
    console.log(request.body)
    const body = request.body
    fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: []
            })
        }
        const readDataObj = JSON.parse(readData)
        fs.readFile("./data/userRole.json", "utf-8", (readError, readData) => {
            if (readError) {
                response.json({
                    status: "File read errorr",
                    data: []
                })
            }

            const roleData = JSON.parse(readData);
            const roleName = roleData.filter(role => role.id === body.role)[0]
            const userData = {
                ...body,
                role: roleName
            }
            readDataObj.push(userData)

            fs.writeFile("./data/users.json", JSON.stringify(readDataObj), (writeError) => {
                if (writeError) {
                    response.json({
                        status: "ERROR during file write",
                        data: []
                    })
                }
                response.json({
                    status: "success",
                    data: readDataObj
                })
            })
        })
    })
})

app.get("/users/roles", (request, response) => {
    fs.readFile("./data/userRole.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: []
            })
        }
        const objectData = JSON.parse(readData)
        response.json({
            status: "Success",
            data: objectData
        })
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

