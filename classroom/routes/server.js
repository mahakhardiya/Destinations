const express = require("express");
const router = express.Router();
const app = express();

app.get("/", (req, res)=>{
    res.send("Hi, I am Root");
});

app.get("/users", (req, res)=>{
    res.send("Get for users");
});

app.get("/users/:id", (req, res)=>{
    res.send("Get for users");
});

app.get("/users", (req, res)=>{
    res.send("Get for users");
});

app.listen(3000, ()=> {
    console.log("Server is listening");
});