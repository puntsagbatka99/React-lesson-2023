console.log("DAY-50 Express Server")

const http = require("http")

const Port = 8001

const server = http.createServer((request, response) =>{

    response.statusCode= 200;
    response.setHeader("Content-Type", "text/plain")
    response.end("Hello World\n")
})

server.listen(Port, () =>{
    console.log(`server is running at http://localhost:${Port}`)
})