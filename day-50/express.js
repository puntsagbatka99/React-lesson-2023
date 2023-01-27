const timerData = {data:[{
    "title": "Mow the lawn",
    "project": "House Chores",
    "elapsed": 5459795,
    "id": "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
    "runningSince": null
}, {
    "title": "Clear paper jam",
    "project": "Office Chores",
    "elapsed": 1273998,
    "id": "a73c1d19-f32d-4aff-b470-cea4e792406a"
}, {
    "title": "Ponder origins of universe",
    "project": "Life Chores",
    "id": "2c43306e-5b44-4ff8-8753-33c35adbd06f",
    "elapsed": 12345601,
    "runningSince": null
}]}

const express = require("express")

const PORT = 8080

const app = express();

app.get("/", (request, response) => {
    response.send("Hello sda")
})

app.get("/data",(request, response) => {
    response.json(timerData)
} )

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})