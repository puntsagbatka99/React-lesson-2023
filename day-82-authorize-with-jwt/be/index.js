const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const adminRouter = require("./routes/Admin-api")
const apiRouter = require("./routes/Api")
require('dotenv').config()

const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

const app = express()
app.use(express.json())
app.use(cors())
app.use("/adminApi", adminRouter)
app.use("/api", apiRouter)

app.get('/', (req, res) => {
    res.json({
        data: []
    })
})

app.listen(PORT, () => {
    mongoose.connect(MONGO_CONNECTION_STRING)
    .then(()=> console.log("DATABASE connected succesfully"))
    .catch((error) => console.log(error));
    console.log(`Server is running on http://localhost:${PORT}`)
})