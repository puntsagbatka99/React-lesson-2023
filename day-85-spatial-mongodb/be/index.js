const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()
const restaurantAPI = require("./routes/restaurants.routes")
const neighborhoodAPI = require("./routes/neighborhoods.routes")

const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

const app = express()
app.use(express.json())
app.use(cors())
app.use("/restaurant", restaurantAPI)
app.use("/neighborhood", neighborhoodAPI)
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