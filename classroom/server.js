const express = require("express");
const app = express();
// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
        secret: "mysupersecretstring", 
        resave: false, 
        saveUninitialized: true
}
app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next)=>{
    res.locals.messages = req.flash("success");
    next();
})

app.get("/reqcount", (req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else {
        req.session.count = 1;
    }
    res.send(`You sent a request ${req.session.count} times`);
});

app.get("/register", (req, res)=>{
    let {name = "annonymous"} = req.query;
    req.session.name = name;
    console.log(req.session.name);
    req.flash("success", "user registered sucessfully");
    res.redirect("/hello");
});

app.get("/hello", (req, res)=>{
    res.render("page.ejs", {name: req.session.name});
});

// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie", (req, res)=>{
//     res.cookie("made-in", "India", {signed: true});
//     res.send("signed cookie sent");
// });

// app.get("/getcookies", (req, res)=> {
//     res.cookie("greet", "hello");
//     res.send("sent you some cookies");
// });

// app.get("/verify", (req, res)=>{
//     console.log(req.signedCookies);
//     res.send("Verified");
// });

// app.get("/", (req, res)=>{
//     console.dir(req.cookies);
//     res.send("Hi, I am Root");
// });

// app.use("/users", users);
// app.use("/posts", posts);

app.listen(3000, ()=> {
    console.log("Server is listening");
});