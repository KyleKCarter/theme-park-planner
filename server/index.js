require("dotenv").config();
const express = require('express');
// const {Client} = require('pg');
const massive = require('massive');
const session = require('express-session');

const app = express()

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    SESSION_COOKIE_KEY
} = process.env

//controllers
// const IOA = require('./controllers/Universal_Studios/Orlando/IslandsOfAdventureController');
// const US = require('./controllers/Universal_Studios/Orlando/UniversalStudiosController');
// const AK = require('./controllers/Disney_World/AnimalKingdomController');
// const EC = require('./controllers/Disney_World/EpcotController');
// const HS = require('./controllers/Disney_World/HollywoodStudiosController');
// const MK = require('./controllers/Disney_World/MagicKingdomController');
// const schedule = require('./controllers/Schedule_Controller/scheduleController');

//massive
// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "$T@rw00d2!",
//     database: "ThemeParkGuide"
// })

// client.connect();

// client.query(`SELECT * FROM parks`, (err, res) => {
//     if(!err) {
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
//     client.end;
// })
// const db = await massive({
//     host: "localhost",
//     port: 5432,
//     database: "ThemeParkGuide",
//     user: "postgres",
//     password: "$T@rw00d2!",
//     ssl: false,
// })

massive(CONNECTION_STRING)
    .then(database => {
        app.set('database', database);
        console.log("Database Connected")
    })
    .catch(error => console.log(error));

// app.use(
//     session({
//         secret: SESSION_SECRET,
//         resave: false,
//         saveUninitialized: true,
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24 * 7,
//             keys: [SESSION_COOKIE_KEY]
//         }
//     })
// )

app.use(express.json())

//ENDPOINTS
//crowd levels
// app.get('/crowd_levels/:month', schedule.crowd_level)

//NOT_CROWDED TIMES

//MODERATE TIMES
//times
// app.get('/IOATimesmoderate', IOA.moderate_times)
// app.get('/USTimesmoderate', US.moderate_times)
// app.get('/AKTimesmoderate', AK.moderate_times)
// app.get('/ECTimesmoderate', EC.moderate_times)
// app.get('/HSTimesmoderate', HS.moderate_times)
// app.get('/MKTimesmoderate', MK.moderate_times)
//ride_types
// app.get('/selected_ride_type_MK_moderate/search', schedule.selected_ride_types_MK)
// app.get('/selected_ride_type_HS_moderate/search', schedule.selected_ride_types_HS)
// app.get('/selected_ride_type_EC_moderate/search', schedule.selected_ride_types_EC)
// app.get('/selected_ride_type_AK_moderate/search', schedule.selected_ride_types_AK)
// app.get('/selected_ride_type_US_moderate/search', schedule.selected_ride_types_US)
// app.get('/selected_ride_type_IOA_moderate/search', schedule.selected_ride_types_IOA)
//asc ride_times
// app.get('/USTimes_nine_am', US.moderate_ride_times_asc_nine_am)

//BUSY TIMES

//VERY_BUSY TIMES

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))