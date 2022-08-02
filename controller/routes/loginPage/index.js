const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const emailValidator = require("email-validator")
const { babyProducts, boujieeClothes, computerProducts, freeJunk, Order, user } = require("../../../sequelize/models")






// check login function
const checkLogin = (req, res, next) => { // add this function to every routes page and have it redirect them to the login page html file
    if (req.session.user) {
    next();
    } else {
        res.render('createUser.html');
}
};





//logout
router.get("/logout", (req, res) =>{
    console.log(req.session);
    req.session = null
    console.log(req.session)
    res.render("loginPage.html")
})


// user login
router.post("/user_login", async (req, res) =>{
    console.log(req.session);
    const {username, password } = req.body
    console.log(username, password)
    if(!username || !password){
        res.send(400).send("Please provide a username and password")
    }
    try {
            const getUser = await user.findOne({
                where: {
                username: req.body.username,
                },
            });
            const userWeFound = getUser.dataValues
            console.log(getUser)
            const validatePassword = await bcrypt.compare(password, userWeFound.password)
            console.log(userWeFound.password)
            console.log(validatePassword)
            if (!validatePassword){
                res.status(400).send("That user does not exist") // make them redirect to login page again 
            } else {
             // make them redirected to homepage
                req.session.user = userWeFound
                console.log(req.session)
                res.redirect('/basic_homepage')
            }
    } catch (error) {
        res.status(400).send(error)
    }
})

//create a user
router.post("/create_user", async (req, res) => { //after creating an account, redirect them to homepage;
    const {username, firstName, lastName, email, password } = req.body
    console.log({ username, firstName, lastName, email, password });
    // check first if the above values are null, send alert
    try {
        if (!username) {
            return res.status(400).send("please enter a username")
        }
        if (!firstName){
            return res.status(400).send("Please enter first name")
        }
        if (!lastName){
            return res.status(400).send("Please enter a last name")
        }
        if (!email){
            return res.status(400).send("Please enter an email address")
        }
        if (email.length>254){
            return res.status(400).send('Please enter an email address');
        }
        if (!password){
            return res.status(400).send("Please enter a password")
        }
        if(emailValidator.validate(email)) {
            console.log("email is valid")
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
            res.status(200)
            res.redirect('/basic_homepage');
        } else {
            console.log("email is not valid")
            res.render('createUser.html');
        }
    } catch (error) {
        res.render('createUser.html');
        // res.status(400).redirect('/create_user');
    }
})


// guest login
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
        console.log(req.session.user)
        res.redirect('/basic_homepage');
    } else {
        res.json({
            message: "Login Failed",
        })
    }
})

// update password
router.put ('/update_password', async (req, res) => {
    const { username, password } = req.body
    console.log(username, password)
    try {
        const findUser = await user.findOne({
            where: {
                username: username,
            }
        })
        try {
            const salt = await bcrypt.genSalt(5)
            const hashedPassword = await bcrypt.hash(password, salt)
            findUser.password = hashedPassword
            findUser.update({
                username: username,
                password: hashedPassword,
                updatedAt: new Date()
            })
            res.render("createUser.html")
        } catch (error) {
            console.log(error)
            res.status(400) // give an alert that says password did not get submitted
            res.render("createUser.html")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

// delete account
router.delete('/delete_user/:id', async (req, res) => {
    const deleteUser = await user.findOne({
        where:{
            id: req.params.id
        }
    })
    if (deleteUser){
        await deleteUser.destroy()
        res.send("User has been deleted") //put an alert on the front end when the user has been deleted
    } else {
        res.send("this user does not exist") // put an alert on the front end when the user cannot be found
    }
});

//test route
router.post("/delete_all_secrets",  checkLogin, async (req,res) =>{
    res.send("You are legit")
})

module.exports = router;











