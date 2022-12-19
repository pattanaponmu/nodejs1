const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const app = require('express')();
const port = 5000;

app.get("/", (req,res) => {

        res.send('Hello PongNode'); 

    }
)

app.listen(port, () => {

        debug("listen on port " + chalk.blue(port));

    }
)