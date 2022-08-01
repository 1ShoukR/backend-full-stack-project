
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const { babyProducts, boujieeClothes, computerProducts, freeJunk, Order, user } = require("../../../sequelize/models")






const checkLogin = (req, res, next) => { // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    res.json({
      message: 'login Required',
    });
  }
};


router.post("/create_user", async (req, res) => { //after creating an account, redirect them to homepage
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
        res.redirect("/")
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post("/guestlogin",  async (req, res)  => { //after clicking "log in as a guest user" link, redirect them to the homepage html file
    console.log(req.session)
    const guestUser = await user.findOne({
        where: {
            username: "Guest",
            password: "Guest",
            firstName: "Guest",
            lastName: "User",
            email: "GuestUser@Guest.com",
        }
    })
    if (guestUser){
        req.session.user = guestUser
        console.log(req.session)
        res.redirect('/basic_homepage/');
    } else {
        res.json({
            message: "Login Failed",
        })
    }
})


router.post("/delete_all_secrets",  checkLogin, async (req,res) =>{
    res.send("You are legit")
})

module.exports = router;











