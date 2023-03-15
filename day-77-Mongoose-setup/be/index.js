console.log("Day-77");

const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api")

const PORT = 8080;
const MONGO_CONNECTION_STRING = "mongodb+srv://puntsagbatka99:Hujshand2020@cluster0.ymsry8p.mongodb.net/test"

const app = express();
app.use(express.json());
app.use(apiRouter)

mongoose.connect(MONGO_CONNECTION_STRING)
.then(()=> console.log("DATABASE connected succesfully"))
.catch((error) => console.log(error));

app.get("/", (request, response) => {
    response.send("<h1>DAY-77 MONGOOSE Application</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})