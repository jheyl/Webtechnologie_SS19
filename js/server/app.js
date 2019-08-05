"use strict";
const express = require('express');
const cors = require('cors');
const https = require('https');

// Set up the express app
const app = express();

app.use(cors());

const getData = (param, callback) => {
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&APPID=d915892930bc4db44dea4edd69aa1992`, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        })

        res.on('end', () => {
            callback(JSON.parse(data));

        })
    }).on("error", (err) => {
        console.error("Error" + err.message);
    });
}
app.get('/api/v1/weather/:city', (req, res) => {
    const callback = (data) => {
        res.status(200).send({
            success: 'true',
            payload: data
        })
    }
    getData(req.params['city'], callback);
})

const PORT = 500;



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
