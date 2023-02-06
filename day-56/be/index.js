console.log("Day-56 REST API")


const express = require("express")
const fs = require("fs")
const cors = require("cors")

const app = express()
const PORT = 8080

app.use(express.json())
app.use(cors())

app.get("/", (request, response) => {
    response.send("<h1>Express API is running</h1>")
})

app.delete("/timers", (request, response) => {
    console.log(request.body)
    

    fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "Error",
                data: []
            })
        }

        const dataObject = JSON.parse(readData);
        const newData = dataObject.filter((d) => d.id !== request.body.userId);
        

        fs.writeFile("./data/data.json", JSON.stringify(newData), (writeError) => {
            if (writeError) {
                response.json({
                    status: "Errorrrrrr",
                    data: []
                })
            }

            response.json({
                status: "Success",
                data: newData
            })
        })
    })

})

app.post("/timers", (request, response) => {
    console.log(request.body)
    const newUser = {
        title: request.body.title,
        project: request.body.project,
        elapsed: 0,
        id: Date.now().toString(),
    }
    fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: []
            })
        }

        const dataObject = JSON.parse(readData)
        dataObject.push(newUser)

        fs.writeFile("./data/data.json", JSON.stringify(dataObject), (writeError) => {
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

app.get("/timers", (request, response) => {

    fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File not found",
                data: []
            })
        }

        const timerData = JSON.parse(readData);
        console.log(timerData)
        console.log(typeof timerData)
        response.json({
            status: "Success",
            data: timerData
        })
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})