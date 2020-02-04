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
const IOA = require('./controllers/Universal_Studios/Orlando/IslandsOfAdventureController')
const US = require('./controllers/Universal_Studios/Orlando/UniversalStudiosController')

//massive
massive(CONNECTION_STRING)
    .then(database => {
        app.set('database', database);
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

//endpoints
app.get('/api/IOAJanuaryTimesModerate', IOA.getJanTimes_Moderate)
app.get('/api/USJanuaryTimesModerate', US.getJanTimes_Moderate)

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))