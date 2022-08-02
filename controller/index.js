// requirements for all packages and files needed for server
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const models = require("../sequelize/models");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const store = new SequelizeStore({
  db: models.sequelize,
});
const app = express();
const es6Renderer = require("express-es6-template-engine");
const PORT = 3005;
const boujieeClothesRoute = require("./routes/boujieeClothes");
const babyProductsRoutes = require("./routes/babyProducts");
const basicHomepageRoutes = require("./routes/basicHomepage");
const freeJunkRoutes = require("./routes/freeJunk");
const loginPageRoutes = require("./routes/loginPage");
const pcPartsRoutes = require("./routes/pcParts");
const addOrder = require("./routes/addOrder");

//middleware
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: false,
      maxAge: 2592000000,
    },
  }),
);
store.sync();
app.use(express.static("public"));
app.engine("html", es6Renderer);
app.set("views", "./public/views");
app.set("view engine", "html");
app.use(express.json());
app.use(cors());

//links for the webpages
app.use("/boujieeclothes", boujieeClothesRoute);
app.use("/baby_products", babyProductsRoutes);
app.use("/basic_homepage", basicHomepageRoutes);
app.use("/free_junk", freeJunkRoutes);
app.use("/login_page", loginPageRoutes);
app.use("/pc_parts", pcPartsRoutes);
app.use("/add_to_cart", addOrder);

// route checker

const checkLogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.json({
      message: "login Required",
    });
  }
};

app.listen(PORT, console.log(`Listening on port ${PORT}`));
