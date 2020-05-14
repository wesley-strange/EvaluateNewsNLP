const dotenv = require("dotenv");
dotenv.config();

var path = require("path");

const express = require("express");
const app = express();
app.use(express.static("dist"));
app.use(express.json());// for parsing application/json

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

console.log(__dirname);

var aylien = require("aylien_textapi");

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.post("/api", (req, res) => {
    textapi.sentiment({"url": req.body.url, "mode": "document"}, (error, response) => {
        if (error == null) {
            console.log(response);
            res.send(response)
        } else {
            console.log("Sorry, there was an error:", error)
        }
    });
});

app.get("/", function (req, res) {
    res.sendFile("dist/index.html")
})

module.exports = app