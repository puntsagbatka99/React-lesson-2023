const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const adminRouter = express.Router()
const Users = require("../models/Users")

adminRouter.post("/register", async (request, response) => {
    const { email, password } = request.body

    if (email && password) {
        const oldUser = await Users.findOne({ email: email })

        if (oldUser) {
            return response.json({
                message: "Хэрэглэгч байна",
                email: email
            })
        } else {
            const hashedPassword = await bcrypt.hash(password, 10)

            Users.create({ email: email, password: hashedPassword })
                .then((data) => {
                    response.status(201).json({
                        message: "Хэрэглэгч амжилттай үүслээ.",
                        email: data.email
                    })
                    return;
                })
                .catch((error) => {
                    response.status(500).json({
                        success: false,
                        error
                    })
                })
        }

    } else {
        return response.json({ error: "Input field is empty!" })
    }
})

adminRouter.post("/login", async (request, response) => {
    try {
        const { email, password } = request.body
        if (!(email && password)) {
            return response.status(400).json({ message: "Utguudiig buren oruul" })
        } else {
            const user = await Users.findOne({ email })

            const isMatch = await bcrypt.compare(password, user?.password)

            if (user && isMatch) {
                const jwtBody = {
                    user_id: user._id,
                    email
                }
                const token = jwt.sign(jwtBody, "MySuperDuperPrivateKey", { expiresIn: "24h" })

                response.status(200).json({
                    success: true,
                    token: token
                })
                return;
            } else {
                return response.status(400).json({
                    success: false,
                    status: "нууц үг эсвэл нэр хоорондоо таарахгүй байна."
                })
            }
        }

    } catch (error) {
        response.status(555).json({
            data: "failed",
            error: error
        })
    }
})

module.exports = adminRouter