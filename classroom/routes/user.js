const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Get for users");
});

router.get("/:id", (req, res)=>{
    res.send("Get for users id");
});

router.post("/", (req, res)=>{
    res.send("Post for users");
});

router.delete("/:id", (req, res)=>{
    res.send("Delete for users id");
});

module.exports = router;