const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const todoRouter = require("./routes/todo-routes")
const categoryRouter = require("./routes/category-routes")

const app = express()
const PORT = 8081

const MONGO_CONNECTION_STRING = "mongodb+srv://puntsagbatka99:Hujshand2020@cluster0.ymsry8p.mongodb.net/test"

app.use(express.json())
app.use(cors())
app.use("/todo", todoRouter)
app.use("/category", categoryRouter)

app.get("/", (request, response) =>{
    response.status(200).send( "<h1>DAY-81 MANY/Update Many and Delete many</h1>")
})


app.listen(PORT, () => {
    mongoose.connect(MONGO_CONNECTION_STRING)
    .then(()=> console.log("DATABASE connected succesfully"))
    .catch((error) => console.log(error));
    console.log(`Server is running on http://localhost:${PORT}`)
})