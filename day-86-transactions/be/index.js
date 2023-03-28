const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()
const transactionAPI = require("./routes/transaction.route")
const productAPI = require("./routes/product.route")

const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

const app = express()
app.use(express.json())
app.use(cors())
app.use("/transaction", transactionAPI)
app.use("/product", productAPI)

app.get('/', (req, res) => {
    res.send("<h1>DAY-86 MONGODB TRANSACTION</h1>")
})

app.listen(PORT, () => {
    mongoose.connect(MONGO_CONNECTION_STRING)
    .then(()=> console.log("DATABASE connected succesfully"))
    .catch((error) => console.log(error));
    console.log(`Server is running on http://localhost:${PORT}`)
})