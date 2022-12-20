const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productRouter = express.Router();

const app = require('express')();
const port = process.env.PORT; //http://localhost:5000/

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

/*productRouter.route("/1").get((req.res) => {
    res.send("I am Product 1");
});
app.use("/products", productRouter)*/

app.get("/", (req,res) => {

        res.render('index', {username: "Ponggg", customer: ["AA", "BB","CC","DDD","EEEEE"]}); 

    }
)

app.listen(port, () => {

        debug("listen on port " + chalk.blue(port));

    }
)