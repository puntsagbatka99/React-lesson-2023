import express from "express";
import { addUserRole, getUserRole } from "../services/users-services.js";

const emp_router = express.Router();

emp_router.get("/user-role", async (request, response) =>{
    const result = await getUserRole()
    console.log(result)

    response.status(200).send({result})
})

emp_router.post("/user-role", async(request, response)=>{
    const body = request.body
    console.log(body)
    const result = await addUserRole(body.roleName)

    response.status(200).send({})
})

export default emp_router;