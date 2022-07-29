const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const { babyProducts, boujieeClothes, computerProducts, freeJunk, Order, user } = require("../../../sequelize/models")


router.post("/create_user", async (req, res) => {
    const {username, firstName, lastName, email, password } = req.body
    console.log({ username, firstName, lastName, email, password });
    try {
        const salt = await bcrypt.genSalt(5)
        console.log(salt)
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword)
        const encryptedUser = {
            username: username,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName,
            email: email,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        console.log(user)
        const createUser = await user.create(encryptedUser)
        console.log(createUser)
        res.status(200).send("Account succesfully created!")
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router;











