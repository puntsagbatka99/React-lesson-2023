import express from "express"
import helloRouter from "./routes/api"
const app = express();

const PORT = 8082
app.use(helloRouter)

app.get('/', (request, response) => {
    response.status(200).send( "<h1>DAY-79 BABEL</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Application is running on http://localhost:${PORT}`)
})