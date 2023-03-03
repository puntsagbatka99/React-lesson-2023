console.log("Its my APP.JS")
//Import necesarry moduls
 import express from "express";
 import emp_router from "./routes/user-role.js";
 import emp_router_pc from "./routes/product-category.js";
//  import emp_router from "./routes/users.js";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(emp_router)
app.use(emp_router_pc)
// app.use(emp_router);

app.get("/", (request, response) => {
    response.send("<h1 style='text-align: center; background-color: green'>USER ROLE</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Express App is running on http://localhost:${PORT}`)
})