import { default as axios } from "axios";
import express from "express";
const app = express();
const port = require("dotenv").config().parsed.PORT;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("about me");
});

app.get("/contact", (req, res) => {
    res.send("<h1>contact me</h1>");
});

app.get("/github", (req, res) => {
    res.redirect("https://github.com/Soumya-0x000");
});

app.get("/gitdetails", async (req, res) => {
    try {
        const gitDetailsRes = await axios.get(
            "https://api.github.com/users/Soumya-0x000"
        );
        res.json(gitDetailsRes.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/gitdetail", (req, res) => {
    res.redirect("https://api.github.com/users/Soumya-0x000");
});

app.get("/portfolio", (req, res) => {
    res.redirect("https://ssd-portfolio.vercel.app/");
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
