const express = require("express");
const app = express();
const port = require("dotenv").config().parsed.PORT;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send('about me')
});

app.get("/contact", (req, res) => {
    res.send("<h1>contact me</h1>");
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})