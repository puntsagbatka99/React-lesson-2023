const Restaurants = require("../models/restaurants");

exports.getRestaurants = async (req,res)=> {
    try {
        const result = await Restaurants.find({}).limit(10)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}