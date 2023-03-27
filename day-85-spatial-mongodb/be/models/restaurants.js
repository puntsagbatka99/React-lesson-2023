const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: {
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, 
{
    collection: "restaurants"
}
)

const Restaurants = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurants