require("dotenv").config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const app = express()

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    SESSION_COOKIE_KEY
} = process.env

//controllers

//massive
massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        dbInstance = db;
        console.log("Database Connected")
    })
    .catch(error => console.log(error));

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            keys: [SESSION_COOKIE_KEY]
        }
    })
)

app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))