const express = require("express")
const categories = express.Router()

categories.get("/", (req, res)=>{
    res.send("GET from /categories")
})

module.exports = categories