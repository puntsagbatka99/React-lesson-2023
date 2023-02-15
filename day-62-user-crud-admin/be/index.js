console.log("day-62 User Login CRUD")

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt")

const app = express();
const PORT = 8080;
const SALT_ROUNDS = 10;

app.use(cors())
app.use(express.json())

app.get("/users", (request, response) => {
    fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: []
            })
        }
        const objectData = JSON.parse(readData)
        response.json({
            status: "success",
            data: objectData,
        })
    })
})

app.post("/register", (request, response) => {
    console.log(request.body)
    const body = request.body
    fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: []
            })
        }
        const readDataObj = JSON.parse(readData)
        fs.readFile("./data/userRole.json", "utf-8", (readError, readData) => {
            if (readError) {
                response.json({
                    status: "File read errorr",
                    data: []
                })
            }

            const roleData = JSON.parse(readData);
            const roleName = roleData.filter(role => role.id === body.role)[0]

            const userPassword = body.password;

            bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
                if (err) {
                    response.json({
                        status: " BCRYPT generating salt error"
                    })
                }

                bcrypt.hash(userPassword, salt, (hashError, hashData) => {
                    if (hashError) {
                        response.json({
                            status: "Error sda",
                            data: []
                        })
                    }
                    console.log("Hashed Data", hashData)
                    const newUser = {
                        firstname: body.firstname,
                        lastname: body.lastname,
                        email: body.email,
                        password: hashData,
                        address: body.address,
                        role: roleName
                    }
                    readDataObj.push(newUser)
                    fs.writeFile("./data/users.json", JSON.stringify(readDataObj), (writeError) => {
                        if (writeError) {
                            response.json({
                                status: "ERROR during file write",
                                data: []
                            })
                        }
                        response.json({
                            status: "success",
                            data: readDataObj
                        })
                    })
                })
            })
        })
    })
})

app.get("/users/roles", (request, response) => {
    fs.readFile("./data/userRole.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File does not exist",
                data: []
            })
        }
        const objectData = JSON.parse(readData)
        response.json({
            status: "Success",
            data: objectData
        })
    })
})

app.post("/login", (request, response) => {
    console.log(request.body)
    const body = request.body
    fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
        if (readError) {
            response.json({
                status: "File not found",
                data: []
            })
        }
        const usersArrayObject = JSON.parse(readData);

        const foundUser = usersArrayObject.filter(user => body.email === user.email);
        if (foundUser.length === 0) {
            response.json({
                status: "User not found",
                data: []
            })
        } else {
            const foundUserObj = foundUser[0];
            console.log(foundUserObj)
            const plainPassword = body.password;
            const savedPassword = foundUserObj.password;

            bcrypt.compare(plainPassword, savedPassword, (compareError, compareResult) => {
                if (compareError) {
                    response.json({
                        status: "User name or password don't match",
                        data: []
                    })
                }

                if (compareResult) {
                    console.log('it matches')
                    response.json({
                        status: "success",
                        data: {
                            email: foundUserObj.email,
                            firstname: foundUserObj.firstname,
                            lastname: foundUserObj.lastname
                        }
                    })
                } else {
                    console.log('invalid password')
                    response.json({
                        status: "Username or Password do not match"
                    })
                }
            });
        }
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

