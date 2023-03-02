import express from "express";
import { getEmployees, getMaxNo, hireEmployee } from "../services/employee-services.js";
const emp_router = express.Router();
emp_router.get("/employees", async (request, response) =>{
    const result = await getEmployees()
    response.status(200).send(result)
})

emp_router.post("/employee", async(request, response) =>{
    const {birthDate, firstName, lastName, gender, hireDate} = request.body;
    const {max} = await getMaxNo();
    
    const result = await hireEmployee(
        max + 1,
        birthDate,
        firstName,
        lastName,
        gender,
        hireDate
    );
    console.log(result)

    response.status(200).send({})
})
export default emp_router;