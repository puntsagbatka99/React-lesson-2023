import express from "express";
// import { fireEmployee, getEmployees, getMaxNo, hireEmployee, updateEmployee } from "../services/employee-services.js";
import { getPopularCategories } from "../services/category-services.js";
import { getChildrenMenus, getParentMenus } from "../services/menus-services.js";
import { search, getAllProducts } from "../services/product-services.js";
const apiRouter = express.Router();

apiRouter.get("/popular", async (request, response) => {
    const result = await getPopularCategories()
    response.status(200).send(result)
})

apiRouter.get("/products", async (request, response) => {
    const result = await getAllProducts()
    response.status(200).send(result)
})

apiRouter.get("/search", async (request, response) => {
    const keyword = request.query.keyword;
    const result = await search(keyword);
    response.status(200).send(result)
})

apiRouter.get("/menus", async (request, response) => {
    const parentMenus = await getParentMenus()

    await Promise.all(
        parentMenus.map(async (parent) => {
            const children = await getChildrenMenus(parent.id);
            parent.children = children;
            return parent
        })
    )

    console.log(parentMenus)
    response.status(200).send(parentMenus);
})
// emp_router.get("/employees", async (request, response) =>{
//     const result = await getEmployees()
//     response.status(200).send(result)
// })
// emp_router.put("/employee", async (request, response)=>{
//     const body = request.body;
//     console.log(body)
//     const result = await updateEmployee(
//         body.empNo,
//         body.lastName,
//         body.gender
//     )   
//     console.log(result)

//     response.status(200).send({});
// })
// emp_router.delete("/employee", async (request, response) => {
//     const body = request.body;
//     console.log(body)

//     const result = await fireEmployee(body.empNo)

//     response.status(200).send({})
// })
// emp_router.post("/employee", async(request, response) =>{
//     const {birthDate, firstName, lastName, gender, hireDate} = request.body;
//     const {max} = await getMaxNo();

//     const result = await hireEmployee(
//         max + 1,
//         birthDate,
//         firstName,
//         lastName,
//         gender,
//         hireDate
//     );
//     console.log(result)

//     response.status(200).send({})
// })

export default apiRouter;
