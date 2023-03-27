const { Router } = require("express");
const { getNeighborhoods } = require("../controllers/neighborhood.controller");

const route = Router();

route.get("/list", getNeighborhoods)

module.exports = route;