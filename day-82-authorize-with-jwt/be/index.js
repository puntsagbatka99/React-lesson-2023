const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const adminRouter = require("./routes/Admin-api")
const apiRouter = require("./routes/Api")

const app = express()
const PORT = 8080

app.use(express.json())
app.use(cors())
app.use("/adminApi", adminRouter)
app.use("/api", apiRouter)


const MONGO_CONNECTION_STRING = "mongodb+srv://puntsagbatka99:Hujshand2020@cluster0.ymsry8p.mongodb.net/test"


app.listen(PORT, () => {
    mongoose.connect(MONGO_CONNECTION_STRING)
    .then(()=> console.log("DATABASE connected succesfully"))
    .catch((error) => console.log(error));
    console.log(`Server is running on http://localhost:${PORT}`)
})