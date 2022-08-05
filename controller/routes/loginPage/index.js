const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const { user } = require("../../../sequelize/models");

// check login function
const checkLogin = (req, res, next) => {
  // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    res.render("create-user.html");
  }
};

//logout
router.get("/logout", (req, res) => {
  req.session.user = null;
  // res.render("loginPage.html");
  res.redirect("http://127.0.0.1:3005/basic_homepage");
});

// user login
router.post("/user_login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.send(400).send("Please provide a username and password");
  }
  try {
    const getUser = await user.findOne({
      where: {
        username: req.body.username,
      },
    });
    const userWeFound = getUser.dataValues;
    const validatePassword = await bcrypt.compare(password, userWeFound.password);
    if (!validatePassword) {
      res.status(400).send("That user does not exist"); // make them redirect to login page again
    } else {
      // make them redirected to homepage
      req.session.user = userWeFound;
      // res.redirect("/basic_homepage");
      res.send(
        JSON.stringify({
          username: getUser.username,
          firstName: getUser.firstName,
          lastName: getUser.lastName,
          email: getUser.email,
        }),
      );
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// new user page
router.get("/new_user", async (req, res) => {
  res.render("create-user.html");
});

// settings page
router.get("/settings", async (req, res) => {
  res.render("settings.html");
});

//create a user
router.post("/create_user", async (req, res) => {
  //after creating an account, redirect them to homepage;
  const { username, firstName, lastName, email, password } = req.body;
  // check first if the above values are null, send alert
  try {
    if (!username) {
      return res.status(400).send("please enter a username");
    }
    if (!firstName) {
      return res.status(400).send("Please enter first name");
    }
    if (!lastName) {
      return res.status(400).send("Please enter a last name");
    }
    if (!email) {
      return res.status(400).send("Please enter an email address");
    }
    if (email.length > 254) {
      return res.status(400).send("Please enter an email address");
    }
    if (!password) {
      return res.status(400).send("Please enter a password");
    }
    if (emailValidator.validate(email)) {
      const salt = await bcrypt.genSalt(5);
      const hashedPassword = await bcrypt.hash(password, salt);
      const encryptedUser = {
        username: username,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
        email: email,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const createUser = await user.create(encryptedUser);
      // res.redirect("/basic_homepage");
      res.status(200).redirect("/basic_homepage");
    } else {
      res.status(400).render("create-user.html");
    }
  } catch (error) {
    res.status(400).render("create-user.html");
    // res.status(400).redirect('/create_user');
  }
});

// guest login
router.post("/guestlogin", async (req, res) => {
  //after clicking "log in as a guest user" link, redirect them to the homepage html file
  const guestUser = await user.findOne({
    where: {
      username: "Guest",
      password: "Guest",
      firstName: "Guest",
      lastName: "User",
      email: "GuestUser@Guest.com",
    },
  });
  if (guestUser) {
    req.session.user = guestUser;
    // res.redirect("/basic_homepage");
    res.status(200);
    res.send(JSON.stringify(guestUser));
  } else {
    res.json({
      message: "Login Failed",
    });
  }
});

// update password
router.put("/update_password", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await user.findOne({
      where: {
        username: username,
      },
    });
    try {
      const salt = await bcrypt.genSalt(5);
      const hashedPassword = await bcrypt.hash(password, salt);
      findUser.password = hashedPassword;
      findUser.update({
        username: username,
        password: hashedPassword,
        updatedAt: new Date(),
      });
      res.render("create-user.html"); // give alert that password has been updated
    } catch (error) {
      res.status(400); // give an alert that says password did not get submitted
      res.render("create-user.html");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete account
router.delete("/delete_user", async (req, res) => {
  const deleteUser = await user.findOne({
    where: {
      id: req.session.user.id,
    },
  });
  if (deleteUser) {
    await deleteUser.destroy();
    // res.send("User has been deleted"); //put an alert on the front end when the user has been deleted
    // res.redirect("http://127.0.0.1:3005/basic_homepage");
    res.status(200).send();
  } else {
    res.send("this user does not exist"); // put an alert on the front end when the user cannot be found
  }
});

//test route
router.post("/delete_all_secrets", checkLogin, async (req, res) => {
  res.send("You are legit");
});

module.exports = router;
