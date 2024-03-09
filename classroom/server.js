const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/getsignedcookie", (req, res)=>{
    res.cookie("made-in", "India", {signed: true});
    res.send("signed cookie sent");
});

app.get("/getcookies", (req, res)=> {
    res.cookie("greet", "hello");
    res.send("sent you some cookies");
});

app.get("/verify", (req, res)=>{
    console.log(req.signedCookies);
    res.send("Verified");
});

app.get("/", (req, res)=>{
    console.dir(req.cookies);
    res.send("Hi, I am Root");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, ()=> {
    console.log("Server is listening");
});