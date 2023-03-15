const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createOn: Date
})

const User = mongoose.model("user", userSchema);

module.exports = User;