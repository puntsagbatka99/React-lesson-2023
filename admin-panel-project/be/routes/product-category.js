import express from "express";
import { getProductCategory , addProductCategory } from "../services/product-category-services.js";

const emp_router_pc = express.Router();

emp_router_pc.get("/product-category", async(request, response) => {
    const result = getProductCategory()

    response.status(200).send({result})
})
emp_router_pc.post("/product-category", async(request, response) => {
    const body = request.body;
    console.log(body)
    const result = await addProductCategory(body.productCategoryName, body.productDescription)

    response.status(200).send({result})
})

export default emp_router_pc;